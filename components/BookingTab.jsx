import { useState } from "react";
import Calender from "./Calender";
import DropDown from "./DropDown";

export default function BookingTab() {
  const [location, setLocation] = useState("");
  const [showCalender, setShowCalender] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className=" mx-auto relative z-20 bottom-16 shadow-xl flex items-center w-4/5 flex-col md:flex-row justify-around  bg-white p-2 rounded-3xl  max-w-5xl">
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
        onBlur={() => setShowCalender(false)}
      >
        <span className=" block text-xs opacity-60 font-thin mb-1">DATES</span>
        <span className="block font-semibold">Select dates</span>
        <div
          className={`${
            showCalender ? "block" : "hidden"
          } absolute -bottom-1 z-30 md:-bottom-4 md:-translate-x-1/4  h-64 md:w-[40vw] left-0 right-0 translate-y-full`}
        >
          <Calender />
        </div>
      </button>
      <span className="hidden md:inline-block  md:mx-4">|</span>
      <div className=" w-11/12 md:w-1/4 block md:inline-block text-left mb-1 p-2 md:m-2 ">
        <span className="inline-block mr-2">
          <label
            className=" block text-xs opacity-60 font-thin mb-1"
            htmlFor="dateSelect"
          >
            GUESTS
          </label>
          <span className="block">Add guests</span>
        </span>
        <div className="inline-block">
          <span className="flex rounded-3xl  outline outline-offset-1 outline-black/10">
            <button className="shadow-lg bg-white p-1 inline-block ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </button>
            <button className="shadow-lg bg-white p-1 inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
          </span>
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
