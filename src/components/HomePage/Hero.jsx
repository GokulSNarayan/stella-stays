import BookingTab from "../BookingTab";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useAtom } from "jotai";
import { transparentHeader } from "../../store";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const sliderImages = [
  "/slider/image1.webp",
  "/slider/image2.webp",
  "/slider/image3.webp",
  "/slider/image4.webp",
  "/slider/image5.webp",
];

export default function Hero() {
  const [, settransparent] = useAtom(transparentHeader);
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    trackVisibility: true,
    delay: 100,
  });
  console.log("Hero is in view:", inView);

  if (!inView) {
    settransparent(false);
  } else {
    settransparent(true);
    // console.log("setTransparent", transparent);
  }

  return (
    <section ref={ref} id="hero" className="bg-white block -mt-48">
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
