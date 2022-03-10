export default function Gallery2() {
  return (
    <section className="gallery-section">
      <div className=" md:col-span-2  w-[70%] md:place-self-end ">
        <div className="relative flex flex-col items-center">
          <img src="/images/gallery/image-1.jpg" alt="image 1" />
          <div className="bg-gray-100 w-5/6 -mt-10 rounded-lg opacity-90 relative -bottom-8">
            <span>
              <h3>Beyond Living</h3>
              <p>
                Modern and fresh, our spaces are outfitted with comfort and
                style, be it for a quick getaway to a long term stay.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="col-span-3  place-self-center relative w-[70%]">
        <div className="relative flex flex-col items-center">
          <img src="/images/gallery/image-2.jpg" alt="image 2" />
          <div className="bg-gray-100 w-5/6 -mt-10 rounded-lg opacity-90 relative -bottom-8">
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

      <div className="col-span-3 place-self-center relative w-[70%]">
        <div className="relative flex flex-col items-center">
          <img src="/images/gallery/image-3.jpg" alt="image 3" />
          <div className="bg-gray-100 w-5/6 -mt-10 rounded-lg opacity-90 relative -bottom-8">
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
      </div>

      <div className=" md:col-span-2 md:place-self-start relative w-[70%]">
        <div className="relative flex flex-col items-center">
          <img src="/images/gallery/image-4.jpg" alt="image 4" />
          <div className="bg-gray-100 w-5/6 -mt-10 rounded-lg opacity-90 relative -bottom-8">
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
    </section>
  );
}
