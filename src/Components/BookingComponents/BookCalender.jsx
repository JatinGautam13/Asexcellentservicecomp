import React, { useState, useEffect } from "react";

const BookCalendar = ({ onDateSelect, fetchDisabledDates }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [disabledDates, setDisabledDates] = useState([]);

  useEffect(() => {
    // Fetch disabled dates when the component mounts or when the current month changes
    const fetchDates = async () => {
      if (fetchDisabledDates) {
        try {
          const startOfMonth = getStartOfMonth(currentDate).toISOString();
          const endOfMonth = getEndOfMonth(currentDate).toISOString();
          const response = await fetchDisabledDates(startOfMonth, endOfMonth);
          setDisabledDates(response || []);
        } catch (error) {
          console.error("Error fetching disabled dates:", error);
        }
      }
    };

    fetchDates();
  }, [currentDate, fetchDisabledDates]);

  const getStartOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);
  const getEndOfMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const daysInMonth = (date) => {
    const start = getStartOfMonth(date);
    const end = getEndOfMonth(date);
    const days = [];
    const startDay = start.getDay();

    // Add padding days for the first week
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    // Add actual dates
    for (let i = 1; i <= end.getDate(); i++) {
      days.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    return days;
  };

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date) => {
    if (date && !isDateDisabled(date)) {
      setCurrentDate(date);
      if (onDateSelect) {
        try {
          onDateSelect(date);
        } catch (error) {
          console.error("Error in onDateSelect:", error);
        }
      }
    }
  };

  const isDateDisabled = (date) => {
    return disabledDates.some(
      (disabledDate) => new Date(disabledDate).toDateString() === date.toDateString()
    );
  };

  const formattedMonth = currentDate.toLocaleString("default", { month: "long" });
  const formattedYear = currentDate.getFullYear();
  const calendarDays = daysInMonth(currentDate);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-4">
      <div className="flex min-w-full max-w-[336px] flex-1 flex-col gap-0.5 sm:min-w-72">
        {/* Calendar Header */}
        <div className="flex items-center p-1 justify-between">
          <button onClick={handlePreviousMonth} className="text-[#0e171b] flex size-10 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"></path>
            </svg>
          </button>
          <p className="text-[#0e171b] text-base font-bold leading-tight flex-1 text-center">
            {formattedMonth} {formattedYear}
          </p>
          <button onClick={handleNextMonth} className="text-[#0e171b] flex size-10 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
            </svg>
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <p key={`day-${index}`} className="text-[#0e171b] text-[13px] font-bold leading-normal flex h-12 w-full items-center justify-center">
              {day}
            </p>
          ))}
          {calendarDays.map((date, index) => (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              className={`h-12 w-full text-sm font-medium ${
                date
                  ? isDateDisabled(date)
                    ? "text-gray-400 cursor-not-allowed bg-gray-100"
                    : date.toDateString() === currentDate.toDateString()
                    ? "text-white bg-blue-600"
                    : "text-[#0e171b] bg-gray-100 hover:bg-blue-500 hover:text-white"
                  : "invisible"
              } flex items-center justify-center rounded-full transition`}
              disabled={isDateDisabled(date)}
            >
              {date ? date.getDate().toString() : ""}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCalendar;
