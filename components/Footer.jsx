export default function Footer() {
  return (
    <section
      id="footer"
      className="flex items-end bg-[#2B4650] min-h-[60vh]  text-[hsla(0,0%,100%,.8)]"
    >
      <div className="flex justify-start mx-auto lg:flex-col w-[70%]">
        <div className="my-10">
          {/* 1st row */}
          <img src="/logo/Vector.svg" alt="Stella" />
          <img src="/logo/Vector-1.svg" alt="Stays" />
        </div>
        <div className="grid grid-cols-[repeat(4,minmax(0,14rem))] gap-4 mb-28">
          {/* 2nd row */}
          <div>
            <h4 className="mb-2 font-thin opacity-40 text-xs">ABOUT</h4>
            <ul className="flex flex-col">
              <a className="mb-4" href="javascript:void(0)">
                Find a Stella
              </a>
              <a className="mb-4" href="javascript:void(0)">
                Who we are
              </a>
              <a className="mb-4" href="javascript:void(0)">
                Help center
              </a>
              <a className="mb-4" href="javascript:void(0)">
                Lease to Stella Stays
              </a>
              <a className="mb-4" href="javascript:void(0)">
                Blog
              </a>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-thin opacity-40 text-xs">CITIES</h4>
            <ul className="flex flex-col">
              <a className="mb-4" href="javascript:void(0)">
                Dubai
              </a>
              <a className="mb-4" href="javascript:void(0)">
                Montreal
              </a>
              <a className="mb-4" href="javascript:void(0)">
                Manama
              </a>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-thin opacity-40 text-xs">CONTACT US</h4>
            <ul className="flex flex-col">
              <a className="mb-4" href="javascript:void(0)">
                WhatsApp
              </a>
              <a className="mb-4" href="javascript:void(0)">
                Email
              </a>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-thin opacity-40 text-xs">DOWNLOAD</h4>
            <span className="flex h-12">
              <a href="javascript:void(0)" className="mr-2 h-16 w-28">
                <img
                  className="h-8"
                  src="https://stellastays.com/static/media/app_store.4b86dc08.svg"
                ></img>
              </a>
              <a href="javascript:void(0)" className="mr-2 h-16 w-28">
                <img src="https://stellastays.com/static/media/play_store.5ef45cd6.svg"></img>
              </a>
            </span>
          </div>
        </div>
        <hr className="my-6 border-gray-100 border-opacity-30" />
        <div className="flex justify-between mb-6">
          {/* 3rd row */}
          <div className="flex">
            <p className="mr-4">
              Copyright &#9400; 2022 StellaStays Inc. All rights resserved.{" "}
            </p>
            <p className="mr-4">Terms and conditions</p>
            <p className="mr-4">.</p>
            <p className="mr-4">Privacy Policy</p>
          </div>
          <div className="flex ">
            <a href="#">
              <img
                className="h-6 w-6 mr-2"
                src="/images/linkedin-brands.svg"
                alt="linkedin"
              />
            </a>
            <a href="#">
              <img
                className="h-6 w-6 mr-2"
                src="/images/facebook-f-brands.svg"
                alt="linkedin"
              />
            </a>
            <a href="#">
              {" "}
              <img
                className="h-6 w-6 mr-2"
                src="/images/instagram-brands.svg"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
