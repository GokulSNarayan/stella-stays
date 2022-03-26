import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { addDays, getDate, getMonth } from "date-fns";
// import { dataAPI } from "../api/dataApi";

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

const datesToExclude = [
  "2022,3,28",
  "2022,4,5",
  "2022,4,10",
  "2022,4,16",
  "2022,4,25",
];

export default function DatePicker({
  bookingDates,
  setBookingDates,
  validation,
  clearRef,
}) {
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [bookAbleDates, setBookAbleDates] = useState([]);
  const [viewMode, setViewMode] = useState("desktop");
  const [dateRange, setDateRange] = useState([null, null]);

  function getMinLOS(date) {
    let dateObj = bookAbleDates.find(
      (item) =>
        new Date(item.date).toDateString() === new Date(date).toDateString()
    );
    return dateObj
      ? addDays(dateObj?.date, dateObj.los)
      : addDays(new Date(date), 2);
  }

  function disableSpecificDates(date) {
    return unavailableDates.some(
      (currentItem) =>
        new Date(currentItem).toDateString() === new Date(date).toDateString()
    );
  }

  function getMaxDate(date) {
    let firstBiggerDateIdx = unavailableDates.findIndex(
      (item) => new Date(item).getTime() > new Date(date).getTime()
    );
    return firstBiggerDateIdx !== -1 && date !== null
      ? new Date(unavailableDates[firstBiggerDateIdx])
      : undefined;
  }

  clearRef.current.onClick = () => setDateRange([null, null]);
  // useEffect(() => {}, [clearRef]);

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
          displayStaticWrapperAs={viewMode}
          minDate={getMinLOS(dateRange[0])}
          maxDate={getMaxDate(dateRange[0])}
          shouldDisableDate={disableSpecificDates}
          value={dateRange}
          open={true}
          onChange={(newValue) => {
            setDateRange(newValue);
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
          value={dateRange}
          open={true}
          onChange={(newValue) => {
            setDateRange(newValue);
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
