import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/HomePage/Home";
import BookingPage from "./components/BookingPage/BookingPage";
import { atom, Provider } from "jotai";

export const location = atom("");
export const bookingRange = atom([null, null]);
export const displayDate = atom(null);
export const guestNum = atom(0);
//booking page
export const actualBookingRange = atom([null, null]);
export const actualGuestsNum = atom(0);

function App() {
  const location = useLocation();

  return (
    <Layout location={location}>
      <Provider>
        <Routes>
          <Route path="stella-stays/" element={<Home />} />
          <Route path="stella-stays/booking" element={<BookingPage />} />
        </Routes>
      </Provider>
    </Layout>
  );
}

export default App;
