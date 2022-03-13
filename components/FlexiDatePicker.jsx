import { format } from "date-fns";
import { useState } from "react";
import CheckButton from "./CheckButton";

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
  const currentDate = Date.now();
  const currentMonth = parseInt(format(currentDate, "MM"));
  const currentYear = format(currentDate, "yyyy");
  const nextYear = parseInt(currentYear) + 1;
  const [category, setCategory] = useState("Weekend");
  const [selectedMonths, setSelectedMonths] = useState([]);
  console.log(
    "🚀 ~ file: FlexiDatePicker.jsx ~ line 26 ~ FlexiDatePicker ~ currentMonth",
    currentMonth
  );

  const handleCheck = (event) => {
    let month = event.target.value;
    let updatedList;
    let isChecked = selectedMonths.indexOf(month) !== -1;
    if (isChecked) {
      updatedList = selectedMonths.filter((monthId) => monthId !== month);

      setSelectedMonths(updatedList);
    } else {
      if (selectedMonths.indexOf(month) === -1) {
        setSelectedMonths((prev) => [...prev, month]);
      } else {
        return null;
      }
    }
  };

  return (
    <div className=" md:container min-h-fit mb-10">
      <div className="flex flex-col items-center justify-center">
        <div className="block my-4 mx-auto h-4 mb-4">
          Stay for a <span className="font-semibold">{` ${category}`}</span>
        </div>
        <div
          className="outline-1 outline-gray-500 shadow-lg rounded-3xl   mb-2 flex justify-around items-center text-black"
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
                className=" h-full w-full p-2 rounded-3xl flex justify-center items-center transition-colors bg-white peer-checked:bg-gradient-to-r from-gradientA to-gradientB"
              >
                <span>{category}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="block my-4 mx-auto h-4 mb-4">
          Go in
          <span className="font-semibold">{` ${selectedMonths.map(
            (num) => ` ${months[num]}`
          )}`}</span>
        </div>
        <h2 className="text-centered-line">{currentYear}</h2>

        <div className=" my-4 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-6 lg:gap-2 lg:gap-y-2">
          {Object.keys(months).map((monthId, idx) => {
            if (monthId >= currentMonth) {
              return (
                <CheckButton
                  key={idx}
                  monthId={monthId}
                  handleCheck={handleCheck}
                  selectedMonths={selectedMonths}
                  listOfMonths={months}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <h2 className="text-centered-line">{nextYear}</h2>
        <div className=" my-4 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-6 lg:gap-2 lg:gap-y-2">
          {Object.keys(months).map((monthId, idx) => {
            if (monthId < currentMonth) {
              return (
                <CheckButton
                  key={idx}
                  monthId={monthId}
                  handleCheck={handleCheck}
                  selectedMonths={selectedMonths}
                  listOfMonths={months}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="w-full divide-y-2 divide-y-reverse "></div>
      </div>
    </div>
  );
}
