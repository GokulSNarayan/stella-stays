import { useState } from "react";
import DatePicker from "./DatePicker";
import FlexiDatePicker from "./FlexiDatePicker";

export default function Calender() {
  const [calenderType, setCalenderType] = useState("basic");

  return (
    <div className="container relative flex flex-col items-center bg-white shadow-lg rounded-lg cursor-default divide-y-2 divide-y-reverse">
      <div
        className="outline-1 outline-gray-500 shadow-lg rounded-3xl  w-2/5 mb-2 flex justify-around items-center text-black"
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
            className=" h-full w-full rounded-3xl flex justify-center items-center transition-colors bg-white peer-checked:bg-gradient-to-r from-gradientA to-gradientB"
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
            className="h-full w-full rounded-3xl flex justify-center items-center transition-colors bg-white peer-checked:bg-gradient-to-r from-gradientA to-gradientB "
          >
            <span>Flexible</span>
          </label>
        </div>
      </div>
      <span className="block">
        <hr />
      </span>
      <div className="w-full divide-y-2 divide-y-reverse "></div>
      <div className="block">
        {calenderType === "basic" ? (
          <div className="mx-2 ">
            <DatePicker />
          </div>
        ) : (
          <div className="w-[40vw]">
            <FlexiDatePicker />
          </div>
        )}
      </div>
    </div>
  );
}
