import BookingTab from "./BookingTab";
import Slider from "./Slider";

const sliderImages = [
  "/slider/image1.webp",
  "/slider/image2.webp",
  "/slider/image3.webp",
  "/slider/image4.webp",
  "/slider/image5.webp",
];

export default function Hero() {
  return (
    <section className="bg-white block -mt-48">
      <div className="bg-contain relative md:bg-cover w-full  opacity-90 ">
        <Slider sliderContent={sliderImages} delay={5000} />
      </div>
      <span className="heroText">
        <h1 className=" text-5xl md:text-6xl lg:text-8xl xl:text-9xl;">
          Escape <br /> the ordinary
        </h1>
        <h4 className=" text-base md:text-lg  xl:text-xl">
          A new way to stay in your favorite neighbourhoods around the world.
        </h4>
      </span>
      {/* <BookingTab /> */}
    </section>
  );
}
