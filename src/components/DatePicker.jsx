import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { addDays, getDate, getMonth } from "date-fns";
import { dataAPI } from "../api/dataApi";
// import { isSameDate } from "../utils/DateMatch";

// let urls = ["/api/v1/bookableDates", "/api/v1/excludeDates"];
// let apiPromises = urls.map((url) =>
//   axios.get(url).then((response) => response.json())
// );

const bookingsDates = [
  {
    date: "2022,4,11",
    los: 2,
  },
  {
    date: "2022,4,16",
    los: 2,
  },
  {
    date: "2022,4,18",
    los: 3,
  },
];

const datesToExclude = ["2022,3,28", "2022,4,5", "2022,4,10", "2022,4,25"];

export default function DatePicker({
  bookingDates,
  setBookingDates,
  validation,
}) {
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [bookAbleDates, setBookAbleDates] = useState([]);
  const [viewMode, setViewMode] = useState("desktop");

  function getMinLOS(date) {
    // if(bookAbleDates)
    return date ? addDays(date, amount) : undefined;
  }

  function disableSpecificDates(date) {
    let currentDate = getDate(date);
    let currentMonth = getMonth(date);

    return unavailableDates.some(
      (currentItem) =>
        currentItem.getDate() === currentDate &&
        currentItem.getMonth() === currentMonth
    );
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      setViewMode("mobile");
    } else {
      setViewMode("desktop");
    }
  }, [window.innerWidth]);

  useEffect(() => {
    // Promise.all(apiPromises).then((data) => {
    //   let bookableDates = data[0]?.data?.map((item) => {
    //     return { ...item, date: new Date(item.date) };
    //   });
    //   let unavailableDates = data[1]?.data?.map((item) => new Date(item));

    //

    //   setBookAbleDates(bookableDates);
    //   setUnavailableDates(unavailableDates);
    // });

    setBookAbleDates(
      bookingsDates.map((item) => {
        return { ...item, date: new Date(item.date) };
      })
    );
    setUnavailableDates(datesToExclude.map((item) => new Date(item)));
  }, []);

  if (validation) {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateRangePicker
          disablePast
          reduceAnimations
          className="flex flex-col md:block"
          displayStaticWrapperAs={viewMode}
          minDate={getMinLOS}
          shouldDisableDate={disableSpecificDates}
          value={bookingDates}
          open={true}
          onChange={(newValue) => {
            setBookingDates(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </Fragment>
          )}
        />
      </LocalizationProvider>
    );
  } else {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateRangePicker
          disablePast
          reduceAnimations
          className="flex flex-col md:block"
          displayStaticWrapperAs={viewMode}
          value={bookingDates}
          open={true}
          onChange={(newValue) => {
            setBookingDates(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </Fragment>
          )}
        />
      </LocalizationProvider>
    );
  }
}
