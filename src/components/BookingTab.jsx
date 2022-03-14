import { useState } from "react";
import Calender from "./Calender";
import DropDown from "./DropDown";

export default function BookingTab() {
  const [location, setLocation] = useState("");
  const [isCalenderVisible, setIsCalenderVisible] = useState(false);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [displayDate, setDisplayDate] = useState(null);
  const [guests, setGuests] = useState(0);
  return (
    <div className=" mx-auto w-full xl:w-3/4 relative z-20 -top-12 shadow-xl flex items-center flex-col md:flex-row justify-around min-w-5xl bg-white p-2 rounded-3xl  ">
      <div className="relative w-4/5 md:w-1/4 self-start block md:inline-block text-left p-2 m-2 border border-white hover:border-b-black">
        <span className="block text-xs opacity-60 font-thin mb-1">CITY</span>
        <button
          className="block font-semibold w-[100px] text-left"
          onClick={() => setIsDropDownVisible((prev) => !prev)}
        >
          {location !== "" ? (
            <span className="font-semibold">{location}</span>
          ) : (
            "Select a city"
          )}
        </button>
        <div
          className={`${
            isDropDownVisible ? "block" : "hidden"
          } absolute -bottom-1 z-30 md:-bottom-4 w-full left-0  md:left-3 md:right-0 translate-y-full `}
        >
          <DropDown
            changeCity={setLocation}
            toggleMenu={setIsDropDownVisible}
            selectedOption={location}
          />
        </div>
      </div>
      <span className="hidden md:inline-block  md:mx-4">|</span>
      <div className="relative w-[150px] md:w-1/4 self-start  block md:inline-block text-left p-2 m-2  border border-white hover:border-b-black">
        <span className=" block text-xs opacity-60 font-thin mb-1">DATES</span>
        <button
          onClick={() => setIsCalenderVisible((prev) => !prev)}
          className="block font-semibold "
        >
          {displayDate === null ? "Select dates" : displayDate}
        </button>
        <div
          className={`${
            isCalenderVisible ? "block" : "hidden"
          } absolute -bottom-1 z-30 md:-bottom-4 -translate-x-6 md:-translate-x-1/4 w-max left-0 right-0 translate-y-full`}
        >
          <Calender
            setIsCalenderVisible={setIsCalenderVisible}
            setDisplayDate={setDisplayDate}
          />
        </div>
      </div>
      <span className="hidden md:inline-block  md:mx-4">|</span>
      <div className="block w-full md:w-1/4 self-start md:inline-block text-left mb-2 p-2 m-2 ">
        <span className="inline-block  p-1 w-[100px]">
          <span
            className=" block text-xs opacity-60 font-thin mb-1"
            htmlFor="dateSelect"
          >
            GUESTS
          </span>
          <span className=" font-semibold">
            {guests !== 0
              ? `${guests > 1 ? `${guests} guests` : `${guests} guest`}`
              : "Add guests"}
          </span>
        </span>
        <div className="inline-block  md:w-auto rounded-3xl shadow-lg  outline outline-offset-1 outline-gray-300/10">
          <button
            className="p-2 inline-block"
            onClick={() => setGuests((prev) => prev - 1)}
            disabled={guests < 2}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                guests > 1 ? "fill-gray-200" : "fill-black"
              }  h-4 w-4`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>
          <button
            className=" p-2 inline-block"
            onClick={() => setGuests((prev) => prev + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
      <button className="block self-center w-full md:w-1/4 mx-4  md:inline-block search-button ">
        <span className="inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4  inline-block mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h4 className="inline-block">Search</h4>
        </span>
      </button>
    </div>
  );
}
