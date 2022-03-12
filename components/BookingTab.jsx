import { useState } from "react";
import Calender from "./Calender";
import DropDown from "./DropDown";

export default function BookingTab() {
  const [location, setLocation] = useState("");
  const [showCalender, setShowCalender] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [guests, setGuests] = useState(0);
  return (
    <div className=" mx-auto relative z-20  -top-20 shadow-xl flex items-center w-4/5 flex-col md:flex-row justify-around  bg-white p-2 rounded-3xl  max-w-5xl">
      <button
        className="w-11/12 md:w-1/4 relative block md:inline-block text-left p-2 m-2 border border-white hover:border-b-black"
        onClick={() => setShowDropDown(true)}
        onBlur={() => setShowDropDown(false)}
      >
        <span className="block text-xs opacity-60 font-thin mb-1">CITY</span>
        <span className="block font-semibold">
          {location !== "" ? location : "Select a city"}
        </span>
        <div
          className={`${
            showDropDown ? "block" : "hidden"
          } absolute -bottom-1 z-30 md:-bottom-4 w-full left-0  md:left-3 md:right-0 translate-y-full `}
        >
          <DropDown
            changeCity={setLocation}
            showMenu={setShowDropDown}
            selectedOption={location}
          />
        </div>
      </button>
      <span className="hidden md:inline-block  md:mx-4">|</span>
      <button
        className="w-11/12 md:w-1/4 relative block md:inline-block text-left p-2 m-2  border border-white hover:border-b-black"
        onClick={() => setShowCalender(true)}
        // onBlur={() => setShowCalender(false)}
      >
        <span className=" block text-xs opacity-60 font-thin mb-1">DATES</span>
        <span className="block font-semibold">Select dates</span>
        <div
          className={`${
            showCalender ? "block" : "hidden"
          } absolute -bottom-1 z-30 md:-bottom-4 md:-translate-x-1/4 w-max left-0 right-0 translate-y-full`}
        >
          <Calender />
        </div>
      </button>
      <span className="hidden md:inline-block  md:mx-4">|</span>
      <div className=" w-11/12 md:w-1/4 block relative md:inline-block text-left mb-1 p-2 md:m-2 ">
        <span className="inline-block mr-2">
          <label
            className=" block text-xs opacity-60 font-thin mb-1"
            htmlFor="dateSelect"
          >
            GUESTS
          </label>
          <span className="block font-semibold">
            {guests !== 0
              ? `${guests > 1 ? `${guests} guests` : `${guests} guest`}`
              : "Add guests"}
          </span>
        </span>
        <div className="absolute left-12 top-5 translate-x-16 rounded-3xl shadow-lg  outline outline-offset-1 outline-gray-300/10">
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
      <button className="w-10/12 block md:inline-block md:w-1/4 search-button md:mx-4">
        <span className="inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block mr-2"
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
