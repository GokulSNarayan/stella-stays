import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/HomePage/Home";
import BookingPage from "./components/BookingPage/BookingPage";

function App() {
  const location = useLocation();
  return (
    <Layout location={location}>
      <Routes>
        <Route path="stella-stays/" element={<Home />} />
        <Route path="stella-stays/booking" element={<BookingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
