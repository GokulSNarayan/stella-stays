import { useState } from "react";
import Slider from "./Slider";

const sliderImages = [
  "/slider/image1.webp",
  "/slider/image2.webp",
  "/slider/image3.webp",
  "/slider/image4.webp",
  "/slider/image5.webp",
];

export default function Hero() {
  const [location, setLocation] = useState("");
  return (
    <section className="bg-white relative block">
      <Slider
        className="object-cover bg-local w-full max-h-[88vh] opacity-90"
        sliderContent={sliderImages}
      />
      <span className="heroText">
        <h1 className=" text-4xl md:text-6xl lg:text-8xl xl:text-9xl;">
          Escape <br /> the ordinary
        </h1>
        <h4 className=" text-xs md:text-base  xl:text-lg;">
          A new way to stay in your favorite neighbourhoods around the world.
        </h4>
      </span>
      <div className="flex items-center w-4/5 flex-col md:flex-row justify-around  mx-auto relative z-20 bottom-16 shadow-xl bg-white p-2 rounded-3xl  max-w-5xl">
        <div className="flex flex-col relative justify-start p-2 m-2 md:mx-4 border-0 border-b-black  hover:border">
          <label
            className="text-xs opacity-60 font-thin mb-1"
            htmlFor="citySelection"
          >
            CITY
          </label>
          <select
            className="bg-transparent"
            name="citySelection"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select a city</option>
            <option value="Dubai">Dubai</option>
            <option value="Montreal">Montreal</option>
            <option value="Manama">Manama</option>
          </select>
        </div>
        <span className="mx-2 hidden md:mx-4 md:block">|</span>
        <div className="flex flex-col justify-start p-2 m-2 md:mx-4">
          <label
            className="text-xs opacity-60 font-thin mb-1"
            htmlFor="dateSelect"
          >
            DATES
          </label>
        </div>
        <span className="mx-2 hidden md:mx-4 md:block">|</span>
        <div className="flex flex-col justify-start mb-1 md:p-2 md:m-2 md:mx-4">
          <label
            className="text-xs opacity-60 font-thin mb-1"
            htmlFor="dateSelect"
          >
            GUESTS
          </label>
        </div>
        <button className="search-button md:mx-4">
          <span className="flex justify-around">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
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
            <h4>Search</h4>
          </span>
        </button>
      </div>
    </section>
  );
}
