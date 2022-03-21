import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, use } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/HomePage/Home";
import BookingPage from "./components/BookingPage/BookingPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
