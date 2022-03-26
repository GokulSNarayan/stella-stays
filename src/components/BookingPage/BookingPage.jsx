import { useAtom } from "jotai";
import { useRef, useState, useEffect } from "react";
import { actualGuestsNumAtom, bookingRangeAtom } from "../../store";
import Calender from "../Calender";
import SliderBasic from "../SliderBasic/SliderBasic";
import MainDetails from "./MainDetails";

const sliderContent = [
  {
    src: "https://storage.googleapis.com/hermeez/fe984674-9156-439d-871a-12323e321716.jpg",
  },
  {
    src: "https://storage.googleapis.com/hermeez/4639d5a4-14fc-4739-9b26-5a84f5e8e2ea.jpg",
  },
  {
    src: "https://storage.googleapis.com/hermeez/25a82536-d9e5-4ac5-9d11-e764166c504f.jpg",
  },
  {
    src: "https://storage.googleapis.com/hermeez/afbe70a2-bf04-43e6-b7ac-bb6fd4dc1501.jpg",
  },
  {
    src: "https://storage.googleapis.com/hermeez/9954be92-035a-4129-901d-75125de7dd0c.jpg",
  },
];

export default function BookingPage() {
  const swiperRef = useRef();
  const [displayDate, setDisplayDate] = useState(null);
  const [bookingDates, setBookingDates] = useAtom(bookingRangeAtom);
  const [isCalenderVisible, setIsCalenderVisible] = useState(false);
  const [guests, setGuests] = useAtom(actualGuestsNumAtom);

  useEffect(() => {
    window.scrollTo(0, 0);
    setBookingDates([null, null]);
  }, []);
  return (
    <div className="container block mx-auto mt-20">
      {/* title */}
      <div className="block mx-auto">
        <span className="m-1 p-1">
          <h4 className=" m-1 p-1 text-base">
            Frond O - Palm Jumeirah - Dubai - United Arab Emirates
          </h4>

          <h1 className=" p-1 text-3xl font-semibold">
            Gorgeous 5 BDR Palm Villa | Beach | Private Pool
          </h1>
        </span>
      </div>
      {/* slider */}
      <div className="">
        <SliderBasic
          sliderContent={sliderContent}
          sliderType="basic"
          swiperRef={swiperRef}
        />
      </div>
      {/* about  bookingWindow */}
      <div className="p-2 m-2 relative flex justify-around">
        <MainDetails />
        <div className="sticky flex flex-col outline outline-1 outline-gray-300 rounded-xl shadow-md w-1/4 justify-self-center self-start m-4 p-4 right-1/4 top-20 translate-x-1/4 ">
          <span className="mb-2">
            <p>from</p>
            <h3>AED 3,670 / night</h3>
          </span>
          {/* calender */}
          <div className=" flex flex-col items-start p-2 outline outline-1 outline-gray-300 rounded-lg mb-2">
            <span className=" block text-xs opacity-60 font-thin mb-1">
              DATES
            </span>
            <button
              className="block font-semibold "
              onClick={() => setIsCalenderVisible((prev) => !prev)}
            >
              {displayDate === null ? "Select dates" : displayDate}
            </button>
            <div
              className={`${
                isCalenderVisible ? "block" : "hidden"
              } absolute top-1/3 z-10 -left-1/2 shadow-md`}
            >
              <Calender
                setIsCalenderVisible={setIsCalenderVisible}
                setDisplayDate={setDisplayDate}
                calenderStyle="normal"
              />
            </div>
          </div>
          {/* add guests */}
          <div className="flex items-center justify-between p-2 outline outline-1 outline-gray-300 rounded-lg mb-4">
            <span className="inline-block w-[100px]">
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
            <div className="mr-4 md:w-auto rounded-3xl shadow-lg  outline outline-offset-1 outline-gray-300/10">
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
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
          {/* button */}
          <button className="h-14 text-white text-lg rounded-xl bg-gradient-to-r from-gradientA to-gradientB">
            Continue
          </button>
        </div>
      </div>

      {/* house rules */}
    </div>
  );
}
