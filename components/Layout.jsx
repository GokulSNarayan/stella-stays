import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Layout({ children }) {
  const [transparent, settransparent] = useState(true);
  const handleScroll = () => {
    if (window.scrollY >= 300) settransparent(false);
    else settransparent(true);
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div className="bg-white min-h-screen flex flex-col relative font-sans">
      <nav
        className={`navbar ${
          transparent ? "bg-transparent text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex flex-col self-start ml-2 mt-1 p-2">
          <img
            className={`mb-1 ${transparent ? "fill-white" : "fill-[#2B4650]"}`}
            src="/logo/Vector.svg"
          ></img>
          <img
            className={`${transparent ? "fill-white" : "fill-[#2B4650]"}`}
            src="/logo/Vector-1.svg"
          ></img>
        </div>
        <div>Middle</div>
        <div className="flex items-center justify-around w-3/12">
          <button
            className={`rounded-xl w-32 shadow-md ${
              transparent ? "bg-transparent border" : "bg-[#2B4650] text-white"
            }`}
          >
            Help Center
          </button>
          <a>Contact</a>
          <span>|</span>
          <p>About</p>
          <button
            className={`w-10 h-10 mx-4 rounded-full shadow-md ${
              transparent ? "bg-white text-black" : "bg-[#2B4650] text-white"
            }`}
          >
            TT
          </button>
        </div>
      </nav>
      {children}
    </div>
  );
}
