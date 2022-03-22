import { useState } from "react";
import { getYear, getMonth, getDate } from "date-fns";
import DatePicker from "./DatePicker";
import FlexiDatePicker from "./FlexiDatePicker";
import { parseISO } from "date-fns/esm";
import DateRangePicker from "./DateRangePicker";

const monthsTable = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export default function Calender({
  setIsCalenderVisible,
  setDisplayDate,
  calenderStyle,
}) {
  const [calenderType, setCalenderType] = useState("basic");
  const [bookingDates, setBookingDates] = useState([null, null]);
  const [flexiBookingDates, setFlexiBookingDates] = useState([]);
  console.log(
    "🚀 ~ file: Calender.jsx ~ line 26 ~ Calender ~ flexiBookingDates",
    flexiBookingDates
  );

  const applyDates = () => {
    let dateRangeString;
    if (calenderType === "basic") {
      const startDate = getDate(bookingDates[0]);
      const endDate = getDate(bookingDates[1]);
      const startMonth = getMonth(bookingDates[0]);
      const endMonth = getMonth(bookingDates[1]);
      if (startMonth === endMonth) {
        let dateRangeString = `${startDate}-${endDate} ${monthsTable[startMonth]}`;
        setDisplayDate(dateRangeString);
      } else {
        let dateRangeString = `${startDate} ${monthsTable[startMonth]}-${endDate} ${monthsTable[endMonth]}`;
        console.log("🚀 reduced date", dateRangeString);
        setDisplayDate(dateRangeString);
      }
    } else {
      let dateString = flexiBookingDates.join(" ");
      setDisplayDate(dateString);
    }
    setIsCalenderVisible(false);
  };

  //  Rendering

  if (calenderStyle && calenderStyle === "normal") {
    return (
      <div className="relative">
        <DatePicker
          bookingDates={bookingDates}
          setBookingDates={setBookingDates}
        />
        <div className="flex items-center justify-between absolute bottom-4 w-full">
          <button
            className="relative w-[100px] p-1 m-1"
            onClick={() => {
              setDisplayDate(null);
              setBookingDates([null, null]);
            }}
          >
            <span>Clear</span>
          </button>
          <button
            className="relative translate-x-1/4 left-1/4 "
            onClick={() => setIsCalenderVisible(false)}
          >
            Close
          </button>
          <button
            className="relative justify-self-end   bg-gradient-to-r from-gradientA to-gradientB rounded-lg  w-[100px] p-1 mr-4"
            onClick={applyDates}
          >
            <span>Apply</span>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container relative  flex flex-col items-center bg-white shadow-lg rounded-lg cursor-default divide-y-2 divide-y-reverse">
        <div
          className="outline-1 absolute top-2 left-1/2 right-1/2 -translate-x-1/2 outline-gray-500 shadow-lg rounded-3xl  w-3/5 md:w-2/5 mb-2 flex justify-around items-center text-black"
          onChange={(e) => setCalenderType(e.target.value)}
        >
          <div className="h-10 w-full inline-block p-1 hover:cursor-pointer ">
            <input
              className="hidden peer"
              name="calender"
              type="radio"
              id="basic"
              value="basic"
              defaultChecked
            />
            <label
              htmlFor="basic"
              className=" h-full w-full p-2 rounded-3xl flex justify-center items-center transition-colors bg-white peer-checked:bg-gradient-to-r from-gradientA to-gradientB"
            >
              <span>Calender</span>
            </label>
          </div>
          <div className="h-10 w-full inline-block p-1 hover:cursor-pointer">
            <input
              className="hidden peer"
              name="calender"
              type="radio"
              id="flexible"
              value="flexible"
            />
            <label
              htmlFor="flexible"
              className="h-full w-full p-2 rounded-3xl flex justify-center items-center transition-colors bg-white peer-checked:bg-gradient-to-r from-gradientA to-gradientB "
            >
              <span>Flexible</span>
            </label>
          </div>
        </div>

        <button
          className="absolute top-4 right-2 flex items-center justify-center bg-transparent"
          onClick={() => setIsCalenderVisible(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mt-20">
          <span className="block">
            <hr />
          </span>
          <div className="w-full divide-y-2 divide-y-reverse "></div>
          <div className="block">
            {calenderType === "basic" ? (
              <div className="mx-2 ">
                <DatePicker
                  bookingDates={bookingDates}
                  setBookingDates={setBookingDates}
                />
              </div>
            ) : (
              <div className="mx-2">
                <FlexiDatePicker setFlexiBookingDates={setFlexiBookingDates} />
              </div>
            )}
          </div>
          <div>
            <button
              className="absolute bottom-4 left-2  w-[100px] p-1 m-1"
              onClick={() => {
                setDisplayDate(null);
                setBookingDates([null, null]);
              }}
            >
              <span>Clear</span>
            </button>
            <button
              className="absolute bottom-4 right-2 bg-gradient-to-r from-gradientA to-gradientB rounded-lg  w-[100px] p-1 m-1"
              onClick={applyDates}
            >
              <span>Apply</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
