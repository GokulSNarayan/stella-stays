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
    <section className="bg-white relative block h-3/5 bg-contain">
      <div className="bg-contain object-contain xl:bg-contain w-full h-fit  opacity-90">
        <Slider className="h-full" sliderContent={sliderImages} />
      </div>
      <span className="heroText">
        <h1 className=" text-5xl md:text-6xl lg:text-8xl xl:text-9xl;">
          Escape <br /> the ordinary
        </h1>
        <h4 className=" text-base md:text-lg  xl:text-xl">
          A new way to stay in your favorite neighbourhoods around the world.
        </h4>
      </span>
      <BookingTab />
    </section>
  );
}
