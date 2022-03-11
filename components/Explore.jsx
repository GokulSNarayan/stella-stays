import { useRef } from "react";
import SliderBasic from "./SliderBasic/SliderBasic";

const sliderContent = [
  {
    name: "Cozy Beachfront Villa | Private Pool | 4BDR",
    capacity: "8 guests",
    location: "Dubai",
    src: "https://storage.googleapis.com/hermeez/3548ad02-77b7-4d6d-b3f0-bb85d731c688.jpg",
    price: "2,753",
    currency: "AED",
  },
  {
    name: "Stunning 1 BDR | Marassi | Beach | Pool",
    capacity: "2 guests",
    location: "Manama",
    src: "https://storage.googleapis.com/hermeez/d48e2b52-3e59-4f33-8e68-3114defdbe66.jpg",
    price: "35",
    currency: "BHD",
  },
  {
    name: "Exceptional 4 BDR Palm Villa | Beach | Private Pool",
    capacity: "10 guests",
    location: "Dubai",
    src: "https://storage.googleapis.com/hermeez/b919238b-c4af-444b-9923-656e95bc1b79.jpg",
    price: "3,505",
    currency: "AED",
  },
  {
    name: "Brilliant 1 BDR | Dubai JBR | Beach | Netflix",
    capacity: "2 guests",
    location: "Dubai",
    src: "https://storage.googleapis.com/hermeez/fb34f0ef-f11b-4dd8-a294-045bb042791d.jpg",
    price: "363",
    currency: "AED",
  },
  {
    name: "65th Floor Penthouse | Dubai Marina | Twisted Tower",
    capacity: "8 guests",
    location: "Dubai",
    src: "https://storage.googleapis.com/hermeez/87d283d3-ffe7-4dc7-aabb-d8b3d9b50205.jpg",
    price: "1,174",
    currency: "AED",
  },
  {
    name: "Lux Rustic Home | Old MTL",
    capacity: "6 guests",
    location: "Montreal",
    src: "https://storage.googleapis.com/hermeez/d0a2a6ec-615c-411a-b273-baf17fbcf383.jpg",
    price: "198",
    currency: "CAD",
  },
  {
    name: "4 BDR Penthouse | Dubai Marina |Private Pool",
    capacity: "10 guests",
    location: "Dubai",
    src: "https://storage.googleapis.com/hermeez/c70b445a-2da1-4752-94a9-a0515b079dca.jpg",
    price: "1,652",
    currency: "AED",
  },
];

export default function Explore() {
  const swiperRef = useRef(null);
  return (
    <section className="flex flex-col mx-10 my-8 sm:mx-20 xl:mx-72">
      <div className="my-7">
        <h1 className="text-3xl font-bold mb-4">Explore</h1>
        <span className="flex justify-between">
          <h4>
            Beachfront villas to high rise apartments and penthouses, <br />
            experience your next stay with <b>Stella</b>.
          </h4>
          <div className="flex flex-row justify-end mt-5 md:mt-10 md:px-8">
            <button
              className="bg-white rounded-full shadow-lg h-10 w-10 flex justify-center items-center p-2"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="bg-white rounded-full shadow-lg h-10 w-10 flex justify-center items-center p-2"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </span>
      </div>
      <div className=" ">
        <SliderBasic sliderContent={sliderContent} swiperRef={swiperRef} />
      </div>
    </section>
  );
}
