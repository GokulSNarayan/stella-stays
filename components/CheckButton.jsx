export default function CheckButton({
  monthId,
  handleCheck,
  selectedMonths,
  listOfMonths,
}) {
  return (
    <div className="h-10 w-full p-1 hover:cursor-pointer relative">
      <input
        className="hidden peer"
        name="selectedMonths"
        type="checkbox"
        id={monthId}
        value={monthId}
        onChange={handleCheck}
        checked={selectedMonths.indexOf(monthId) !== -1}
      />
      <label htmlFor={monthId} className="checkButton">
        <span>{listOfMonths[monthId]}</span>
      </label>
      <span className="absolute top-0 right-0 z-10 hidden peer-checked:block rounded-full bg-gradient-to-r from-gradientA to-gradientB">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 bg-contain"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
    </div>
  );
}
