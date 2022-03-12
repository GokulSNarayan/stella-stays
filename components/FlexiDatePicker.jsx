import { useState } from "react";

const categories = ["Weekend", "Week", "Month"];

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export default function FlexiDatePicker() {
  const [category, setCategory] = useState("");
  const [selectedMonths, setSelectedMonths] = useState([]);

  const handleCheck = (event) => {
    let updatedList;
    let isChecked = selectedMonths.some((num) => num === event.target.value);
    if (isChecked) {
      updatedList = selectedMonths.filter(
        (monthId) => monthId !== event.target.value
      );

      setSelectedMonths(updatedList);
    } else {
      setSelectedMonths((prev) => [...prev, event.target.value]);
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center">
        <div className="block mx-auto h-4 mb-4">
          <span>{`Stay for a ${category}`}</span>
        </div>
        <div
          className="outline-1 outline-gray-500 shadow-lg rounded-3xl  w-2/5 mb-2 flex justify-around items-center text-black"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category, idx) => (
            <div
              className="h-10 w-full inline-block p-1 hover:cursor-pointer"
              key={idx}
            >
              <input
                className="hidden peer"
                name="category"
                type="radio"
                id={category}
                value={category}
                defaultChecked={category === "Weekend"}
              />
              <label
                htmlFor={category}
                className=" h-full w-full rounded-3xl flex justify-center items-center transition-colors bg-white peer-checked:bg-gradient-to-r from-gradientA to-gradientB"
              >
                <span>{category}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="block mx-auto h-4 mb-4">
          <span>{`Go in ${selectedMonths.map(
            (num) => ` ${months[num]}`
          )}`}</span>
        </div>

        <div className="w-full flex flex-wrap flex-col">
          {Object.keys(months).map((monthKey, idx) => (
            <div className="h-10 w-full p-1 hover:cursor-pointer" key={idx}>
              <input
                className="hidden peer"
                name="selectedMonths"
                type="checkbox"
                id={monthKey}
                value={monthKey}
                onChange={handleCheck}
                checked={selectedMonths.some(
                  (checkedItem) => checkedItem === monthKey
                )}
              />
              <label
                htmlFor={monthKey}
                className="rounded-3xl w-1/5  shadow-md transition-colors flex justify-center items-center border border-white peer-checked:border-gradientB"
              >
                <span>{months[monthKey]}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
