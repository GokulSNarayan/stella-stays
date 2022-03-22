import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { addDays, getDate, getMonth } from "date-fns";
import { dataAPI } from "../api/dataApi";

let urls = ["/api/v1/bookableDates", "/api/v1/excludeDates"];
let apiPromises = urls.map((url) =>
  fetch(url).then((response) => response.json())
);

export default function DatePicker({ bookingDates, setBookingDates }) {
  console.log("datepicker");
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [bookAbleDates, setBookAbleDates] = useState([]);
  const [viewMode, setViewMode] = useState("desktop");

  function getDaysAfter(date, amount) {
    return date ? addDays(date, amount) : undefined;
  }

  // function disableSpecificDates(date) {
  //   let currentDate = getDate(date);
  //   let currentMonth = getMonth(date) + 1; // 0 - Jan

  //   return unavailableDates.some(
  //     (currentItem) =>
  //       currentItem.getDate() === currentDate &&
  //       currentItem.getMonth() === currentMonth
  //   );
  // }

  useEffect(() => {
    if (window.innerWidth < 768) {
      setViewMode("mobile");
    } else {
      setViewMode("desktop");
    }
  }, [window.innerWidth]);

  useEffect(() => {
    Promise.all(apiPromises).then((data) => {console.log(data)
    let bookableDates = data[0]?.data?.map(item=>{ return {
      
    }});
    let unavailableDates = data[1]?.data;

    
    let 
      setUnavailableDates()
    });

  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        disablePast
        reduceAnimations
        className="flex flex-col md:block"
        displayStaticWrapperAs={viewMode}
        minDate={getDaysAfter(bookingDates[0], 3)}
        // shouldDisableDate={disableSpecificDates}
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
