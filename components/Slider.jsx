import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper";
export default function Slider({ sliderContent }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      effect={"fade"}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      rewind={false}
      modules={[Autoplay, Pagination, EffectFade]}
      className="mySwiper"
    >
      {sliderContent.map((image, idx) => (
        <SwiperSlide key={idx}>
          <img
            className="object-cover bg-local w-full max-h-[88vh] opacity-90"
            src={image}
            alt="background image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
