import React, { useState } from 'react';

const BookAvailableTimes = ({ onTimeChange, times = ['10:00 AM', '11:00 PM', '12:00 PM', '1:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM'] }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (onTimeChange) {
      onTimeChange(time);
    }
  };

  return (
    <div className="p-4 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4 sm:gap-4">
      {times.map((time) => (
        <button
          key={time}
          onClick={() => handleTimeSelect(time)}
          className={`p-3 md:p-4 border rounded-lg text-center font-medium ${
            selectedTime === time
              ? 'bg-blue-600 text-white border-blue-700'
              : 'bg-gray-100 text-gray-800 border-gray-300'
          } hover:bg-blue-500 hover:text-white transition`}
          aria-pressed={selectedTime === time}
          aria-label={`Select time ${time}`}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default BookAvailableTimes;
