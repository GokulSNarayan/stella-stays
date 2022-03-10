import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";

export default function Layout({ children }) {
  const [transparent, settransparent] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 300) settransparent(false);
    else settransparent(true);
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div className="bg-white min-h-screen flex flex-col relative font-sans">
      <nav
        className={`navbar ${
          transparent
            ? "bg-transparent text-white"
            : "shadow-md bg-white text-black"
        }`}
      >
        <div className="flex flex-col self-start ml-2 mt-1 p-2">
          <Logo transparent={transparent} />
        </div>
        <div>Middle</div>
        <div className="flex items-center justify-end m-4 md:hidden relative">
          <button
            className="menu-bar"
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 stroke-current ${
                transparent ? "fill-white" : "fill-black"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className={`mobile-menu ${mobileMenu ? "block" : "hidden"}`}>
            <ul className="flex flex-col justify-center">
              <li className="text-lg font-bold p-2 mb-2">
                <a href=""></a>Login
              </li>
              <hr className="w-11/12 flex self-center" />
              <li className="text-lg font-bold p-2 mb-2">
                <a href=""></a>Sign Up
              </li>
              <hr className="w-11/12 flex self-center" />
              <li className="p-2 mb-2">
                <a href=""></a>Contact
              </li>
              <li className="p-2 mb-2">
                <a href=""></a>Help Center
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden items-center justify-around md:flex">
          <a
            className={`flex items-center justify-center rounded-xl w-32 shadow-md mr-2 ${
              transparent ? "bg-transparent border" : "bg-[#2B4650] text-white"
            }`}
            href="javascript:void(0)"
          >
            Help Center
          </a>
          <a className="mr-2" href="#footer">
            Contact
          </a>
          <span className="mr-2">|</span>
          <a className="mr-2" href="javascript:void(0)">
            About
          </a>
          <a
            className={`flex items-center justify-center w-10 h-10 mx-4 rounded-full shadow-md md:mr-2 ${
              transparent ? "bg-white text-black" : "bg-[#2B4650] text-white"
            }`}
            href="javascript:void(0)"
          >
            TT
          </a>
        </div>
      </nav>
      {children}
    </div>
  );
}
