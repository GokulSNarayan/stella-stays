const options = ["Dubai", "Montreal", "Manama"];

export default function DropDown({ changeCity, showMenu, selectedOption }) {
  const handleClick = (value) => {
    changeCity(value);
    showMenu((prev) => !prev);
  };
  return (
    <div className="container relative w-full h-full flex flex-col  bg-white shadow-lg rounded-lg">
      <ul className="block text-left">
        {options.map((option, idx) => (
          <li
            key={idx}
            className={`${
              selectedOption === option ? "bg-blue-400" : ""
            } ml-1 m-1 p-2 block text-lg font-medium rounded-md hover:bg-blue-100`}
            onClick={() => handleClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
