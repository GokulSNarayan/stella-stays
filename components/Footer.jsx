import Logo from "./Logo";

export default function Footer() {
  return (
    <section
      id="footer"
      className="flex items-end bg-[#2B4650] min-h-[60vh]  text-[hsla(0,0%,100%,.8)]"
    >
      <div className="flex justify-start mx-auto flex-col w-[70%]">
        <div className="my-6 w-1/4">
          {/* 1st row */}
          <Logo transparent={true} />
        </div>
        <div className="footer-external-links">
          {/* 2nd row */}
          <div>
            <h4 className="mb-2 font-thin opacity-40 text-sm">ABOUT</h4>
            <ul className="flex flex-col text-base">
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
            <h4 className="mb-2 font-thin opacity-40 text-sm">CITIES</h4>
            <ul className="flex flex-col text-base">
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
            <h4 className="mb-2 font-thin opacity-40 text-sm">CONTACT US</h4>
            <ul className="flex flex-col text-base">
              <a className="mb-4" href="javascript:void(0)">
                WhatsApp
              </a>
              <a className="mb-4" href="javascript:void(0)">
                Email
              </a>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-thin opacity-40 text-sm">DOWNLOAD</h4>
            <span className="flex flex-col lg:flex-row items-start lg:items-center  lg:justify-between h-14">
              <a
                href="javascript:void(0)"
                className="block mb-2 md:mb-0 md:inline-block md:mr-1 "
              >
                <img
                  className="h-10"
                  src="https://stellastays.com/static/media/app_store.4b86dc08.svg"
                ></img>
              </a>
              <a href="javascript:void(0)" className="block md:inline-block">
                <img
                  className="h-10"
                  src="https://stellastays.com/static/media/play_store.5ef45cd6.svg"
                ></img>
              </a>
            </span>
          </div>
        </div>
        <hr className="my-6 border-gray-100 border-opacity-30" />
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* 3rd row */}
          <div className="flex mb-4 md:m-0">
            <p className="mr-4">
              Copyright &#9400; 2022 StellaStays Inc. All rights resserved.{" "}
            </p>
            <p className="mr-4">Terms and conditions</p>
            <p className="mr-4">.</p>
            <p className="mr-4">Privacy Policy</p>
          </div>
          <div className="flex">
            <a href="javascript:void(0)" className="inline-block">
              <img
                className="h-6 w-6 mx-2"
                src="/images/linkedin-brands.svg"
                alt="linkedin"
              />
            </a>
            <a href="javascript:void(0)" className="inline-block">
              <img
                className="h-6 w-6 mx-2"
                src="/images/facebook-f-brands.svg"
                alt="linkedin"
              />
            </a>
            <a href="javascript:void(0)" className="inline-block">
              {" "}
              <img
                className="h-6 w-6 mx-2"
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
