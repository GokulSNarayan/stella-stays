export default function Gallery() {
  return (
    <section className="flex flex-col mx-auto my-10">
      <div className="flex flex-col mb-10">
        <div className="flex mb-16">
          1st Row
          <div className="flex flex-col w-3/6 items-center justify-start relative">
            <img
              className="h-3/4"
              src="/images/gallery/image-1.jpg"
              alt="image 1"
            />
            <div className="bg-gray-100 w-8/12 -mt-10 rounded-lg opacity-90 absolute bottom-[20%]">
              <span>
                <h3>Beyond Living</h3>
                <p>
                  Modern and fresh, our spaces are outfitted with comfort and
                  style, be it for a quick getaway to a long term stay.
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex-col w-4/6 items-center justify-end relative">
            <img
              className="mt-20 w-3/4"
              src="/images/gallery/image-2.jpg"
              alt="image 1"
            />
            <div className="bg-gray-100 w-8/12 -mt-10 rounded-lg opacity-90 absolute -bottom-8">
              <span>
                <h3>Prime Locations</h3>
                <p>
                  Breathtaking views in convenient and sought after locations, a
                  little something for everyone.{" "}
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          2nd row
          <div className="flex flex-col w-4/6 items-center justify-start relative">
            <img
              className="w-3/4"
              src="/images/gallery/image-3.jpg"
              alt="image 1"
            />
            <div className="bg-gray-100 w-8/12 -mt-10 rounded-lg opacity-90 absolute bottom-[24%]">
              <span>
                <h3>Nullam efficitur turpis</h3>
                <p>
                  Phasellus fermentum tellus vitae ante vehicula posuere.
                  Curabitur metus metus, feugiat non semper lacinia, maximus sit
                  amet ligula. Proin dictum quis ipsum.
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex-col  w-3/6 items-center justify-end relative">
            <img
              className="h-3/4"
              src="/images/gallery/image-4.jpg"
              alt="image 1"
            />
            <div className="bg-gray-100 w-3/4 -mt-10 rounded-lg opacity-90 absolute -bottom-8">
              <span>
                <h3>A Signature of Excellence</h3>
                <p>
                  24/7 guest concierge, seamless check-in and immaculate
                  cleanliness, always a flawless stay.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
