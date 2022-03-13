import BookingTab from "./BookingTab";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const sliderImages = [
  "https://stellastays.com/static/media/w2560-mtl-stj-53.33e0c4d3.webp",
  "https://stellastays.com/static/media/w2560-dxb-mt-362.e40e7739.webp",
  "https://stellastays.com/static/media/w2560-mtl-stj-23.d31309b6.webp",
  "https://stellastays.com/static/media/w2560-dxb-sparkle-2803.ea944445.webp",
  "https://stellastays.com/static/media/w2560-dxb-palm-c67.b86299e1.webp",
];

export default function Hero() {
  return (
    <section className="bg-white block -mt-48">
      <div className="bg-contain relative md:bg-cover  opacity-90 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          rewind={false}
          modules={[Autoplay, Pagination, EffectFade]}
          className="mySwiper"
        >
          {sliderImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <img
                className="bg-no-repeat h-screen w-screen object-none sm:object-cover"
                src={image}
                alt="background image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
