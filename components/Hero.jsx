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
    <section className="bg-white relative flex justify-center">
      <Slider
        className="object-cover bg-local w-full max-h-[88vh] opacity-90"
        sliderContent={sliderImages}
      />
      <h1 className="heroText">
        Escape <br /> the ordinary
      </h1>
      <div className="mx-auto absolute z-10 -bottom-10 shadow-xl bg-white p-2 rounded-2xl h-24 flex max-w-5xl">
        <input placeholder="City"></input>
        <input placeholder="City"></input>
        <input placeholder="City"></input>
        <input placeholder="City"></input>
      </div>
    </section>
  );
}
