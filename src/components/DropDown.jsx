const options = ["Dubai", "Montreal", "Manama"];

export default function DropDown({ changeCity, toggleMenu, selectedOption }) {
  return (
    <div className="container relative w-[50vw] md:w-full h-full flex flex-col  bg-white shadow-lg rounded-lg">
      <div className="block text-left">
        {options.map((option, idx) => (
          <button
            className={`${
              selectedOption === option ? "bg-blue-400" : ""
            } w-full m-1 p-2 block text-left text-lg font-medium rounded-md hover:bg-blue-100`}
            key={idx}
            onFocus={() => {
              changeCity(option);
              toggleMenu(false);
            }}
          >
            <span>{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
