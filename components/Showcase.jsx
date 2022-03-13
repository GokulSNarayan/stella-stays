import Slider from "./Slider";

const sliderImages = [
  "https://stellastays.com/static/media/home.280c73ff.jpg",
  "https://stellastays.com/static/media/search.e1016aeb.jpg",
  "https://stellastays.com/static/media/pre-checkin.505f4280.jpg",
  "https://stellastays.com/static/media/reservation.a5848dac.jpg",
];
export default function Showcase() {
  return (
    <section className="showcase-section">
      {/* left col */}
      <div className="flex flex-col items-center md:items-start justify-center  sm:my-6 sm:w-3/6">
        <div className="mx-8 md:m-0 flex flex-col justify-center sm:py-4">
          <h1 className="text-4xl flex-wrap font-semibold mb-4">
            Duis aute irure dolor in reprehenderit in voluptate
          </h1>
          <h3 className="text-lg mb-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui{" "}
            <br />
            officia deserunt mollit anim id est laborum.
          </h3>
        </div>
        <div className="w-3/4 p-2">
          <span className="flex items-center mb-4">
            <img
              className="h-8 w-8 mr-2"
              src="/images/support.svg"
              alt="support"
            />
            <h3>Sagittis vitae et leo duis ut diam quam nulla.</h3>
          </span>
          <span className="flex items-center mb-4">
            <img
              className="h-8 w-8 mr-2"
              src="/images/mail-wifi.svg"
              alt="mail"
            />
            <h3>
              Faucibus pulvinar elementum integer enim neque volutpat ac
              tincidunt vitae.
            </h3>
          </span>
          <span className="flex items-center mb-4">
            <img
              className="h-8 w-8 mr-2"
              src="/images/location.svg"
              alt="location"
            />
            <h3>
              Viverra adipiscing at in tellus integer feugiat scelerisque
              varius.{" "}
            </h3>
          </span>
          <span className="flex items-center mb-4">
            <img
              className="h-8 w-8 mr-2"
              src="/images/calender.svg"
              alt="calender"
            />
            <h3>Elementum curabitur vitae nunc.</h3>
          </span>
        </div>
        <div>
          <hr className="my-4 border-gray-300" />
          <span>
            <div className="flex">
              <img
                className="h-8 w-8"
                src="/images/star-solid.svg"
                alt="star image"
              />
              <img
                className="h-8 w-8"
                src="/images/star-solid.svg"
                alt="star image"
              />
              <img
                className="h-8 w-8"
                src="/images/star-solid.svg"
                alt="star image"
              />
              <img
                className="h-8 w-8"
                src="/images/star-solid.svg"
                alt="star image"
              />
              <img
                className="h-8 w-8"
                src="/images/star-solid.svg"
                alt="star image"
              />
            </div>
          </span>
          <span className="flex h-24">
            <img
              className="w-40 mr-2"
              src="https://stellastays.com/static/media/app_store.4b86dc08.svg"
            ></img>
            <img
              className="w-40 "
              src="https://stellastays.com/static/media/play_store.5ef45cd6.svg"
            ></img>
          </span>
        </div>
      </div>
      {/* right col */}
      <div className="hidden w-[20%] md:inline-block relative -bottom-24">
        <div className="absolute z-10 inline-block">
          <img
            src="https://stellastays.com/static/media/hardware.e76a5c70.png"
            alt="iphone mockup"
          />
        </div>
        <div className="p-[5%] rounded-[15%] ">
          <Slider sliderContent={sliderImages} delay={3000} />
        </div>
      </div>
    </section>
  );
}
