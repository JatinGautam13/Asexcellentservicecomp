import React, { useState } from 'react';
import BookHeader from '../BookingComponents/BookHeader';
import BookCalendar from '../BookingComponents/BookCalender';
import BookAvailableTimes from "../BookingComponents/BookAvailable";
import SlotBooking from '../BookingComponents/SlotBooking';
import CleaningType from '../BookingComponents/CleaningType';
import HomeFooter from '../Homecomponent/HomeFooter';
// import BookingDetails from '../AdminComponents/BookingDetails';


function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [bookingDetails, setBookingDetails] = useState([]);

  const handleDateSelect = (date) => {
    console.log("Selected Date:", date);
    setSelectedDate(date);
  };

  const handleTypeSelect = (type) => {
    console.log("Selected Type:", type);
    setSelectedType(type);
  };

  const handleBookingConfirm = (details) => {
    setBookingDetails([...bookingDetails, details]);
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: "Manrope, 'Noto Sans', sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <BookHeader />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0e171b] tracking-light text-[32px] font-bold leading-tight">
                  Book a Cleaning
                </p>
                <p className="text-[#4e7f97] text-sm font-normal leading-normal">
                  Select the day you'd like us to come clean
                </p>
              </div>
            </div>
            <BookCalendar onDateSelect={handleDateSelect} />
            {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}
            <h3 className="text-[#0e171b] text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-16">
              Available Times
            </h3>
            <BookAvailableTimes onTimeChange={setSelectedTime} />
            <h3 className="text-[#0e171b] text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-16">
              Cleaning Type
            </h3>
            <CleaningType onTypeSelect={handleTypeSelect} />
            <SlotBooking 
              selectedDate={selectedDate} 
              selectedTime={selectedTime} 
              selectedType={selectedType} 
              onBookingConfirm={handleBookingConfirm}
            />
           
            {/* <BookingDetails bookingDetails={bookingDetails} /> */}
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default BookingPage;
