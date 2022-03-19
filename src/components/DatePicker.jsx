import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";

export default function DatePicker({ bookingDates, setBookingDates }) {
  const [viewMode, setViewMode] = useState("desktop");
  useEffect(() => {
    if (window.innerWidth < 768) {
      setViewMode("mobile");
    } else {
      setViewMode("desktop");
    }
  }, [window.innerWidth]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
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
