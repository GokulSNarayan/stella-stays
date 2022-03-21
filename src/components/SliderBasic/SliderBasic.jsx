import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "./slider.css";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper";

export default function SliderBasic({ sliderContent, swiperRef, sliderType }) {
  if (sliderType && sliderType === "basic") {
    return (
      <>
        <Swiper
          initialSlide={2}
          centeredSlides={true}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="mySwiper "
          ref={swiperRef}
        >
          {sliderContent.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-contain m-2 p-2 flex flex-col justify-center mx-1">
                <img
                  className="rounded-xl"
                  src={image.src}
                  alt="background image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  } else {
    return (
      <>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1080: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper h-full"
          ref={swiperRef}
        >
          {sliderContent.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative m-2 p-2 flex flex-col justify-center mx-1 translate-y-0 hover:-translate-y-1 hover:transform transition-transform ease-in-out">
                <h3 className="absolute rounded-3xl p-1 text-sm font-semibold text-white top-5 right-5 bg-gray-900 opacity-70">{`from ${image.currency} ${image.price}/night`}</h3>
                <img
                  className="object-contain rounded-3xl"
                  src={image.src}
                  alt="background image"
                />
                <span className="mt-1">
                  <h3 className="font-semibold text-sm">{image.name}</h3>
                  <h3 className="font-thin text-xs">{`${image.location} - ${image.capacity}`}</h3>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
}
