import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const unavailableDates = [
  new Date(2022, 4, 10),
  new Date(2022, 4, 15),
  new Date(2022, 4, 17),
  new Date(2022, 4, 25),
];

const bookAbleDates = [
  { date: new Date(2022, 4, 11), los: 2 },
  { date: new Date(2022, 4, 16), los: 2 },
  { date: new Date(2022, 4, 18), los: 3 },
];

export default function DateRangePicker({ bookingDates, setBookingDates }) {
  return (
    <DatePicker
      selected={bookingDates[0]}
      onChange={setBookingDates}
      startDate={bookingDates[0]}
      endDate={bookingDates[1]}
      excludeDates={unavailableDates}
      selectsRange
      selectsDisabledDaysInRange
      inline
    />
  );
}
