export default function Showcase() {
  return (
    <section className="flex items-start justify-center px-auto my-5 bg-[#F6F8F9] border border-[#D9E5E9]">
      {/* left col */}
      <div className="my-6">
        <div className="py-4">
          <h1 className="text-2xl mb-2">
            Hassle free end-to-end digital experience{" "}
          </h1>
          <h3 className="text-lg mb-6">
            Bringing the hotel lobby to your pocket, manage your stay from the
            comfort of your phone.
          </h3>
        </div>
        <div className="w-3/4 p-2">
          <span className="flex items-center mb-4">
            <img
              className="h-8 w-8 mr-2"
              src="/images/support.svg"
              alt="support"
            />
            <h3>Review, reserve & manage your stays</h3>
          </span>
          <span className="flex items-center mb-4">
            <img
              className="h-8 w-8 mr-2"
              src="/images/mail-wifi.svg"
              alt="mail"
            />
            <h3>Seamless self check-in & check-out</h3>
          </span>
          <span className="flex items-center mb-4">
            <img
              className="h-8 w-8 mr-2"
              src="/images/location.svg"
              alt="location"
            />
            <h3>An overview of your upcoming trips</h3>
          </span>
          <span className="flex items-center mb-4">
            <img
              className="h-8 w-8 mr-2"
              src="/images/calender.svg"
              alt="calender"
            />
            <h3>Contactless support available 24/7</h3>
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
      <div className="flex justify-center">
        <img
          className="h-[45rem]"
          src="/images/iphone.png"
          alt="iphone mockup"
        />
      </div>
    </section>
  );
}
