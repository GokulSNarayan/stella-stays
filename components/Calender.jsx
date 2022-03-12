export default function Calender() {
  return (
    <div className="container relative w-full h-full flex flex-col items-center bg-white shadow-lg rounded-lg cursor-default">
      <div className=" absolute outline-1 outline-gray-500 shadow-lg rounded-3xl top-5 h-12 w-2/3 md:h-10 md:w-1/4 z-30 flex justify-around items-center text-black">
        <div className="h-full w-full inline-block p-1 hover:cursor-pointer ">
          <input
            className="hidden peer"
            name="calender"
            type="radio"
            id="basic"
            defaultChecked
          />
          <label
            htmlFor="basic"
            className=" h-full w-full rounded-3xl flex justify-center items-center transition-colors bg-white peer-checked:bg-gradient-to-r from-gradientA to-gradientB"
          >
            <span>Calender</span>
          </label>
        </div>
        <div className="h-full w-full inline-block p-1hover:cursor-pointer">
          <input
            className="hidden peer"
            name="calender"
            type="radio"
            id="flexible"
          />
          <label
            htmlFor="flexible"
            className="h-full w-full rounded-3xl flex justify-center items-center transition-colors bg-white peer-checked:bg-gradient-to-r from-gradientA to-gradientB "
          >
            <span>Flexible</span>
          </label>
        </div>
      </div>
      <span className="block">
        <hr />
      </span>
    </div>
  );
}
