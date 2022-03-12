import { useState } from "react";
import "./App.css";
import DateFnsAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Explore from "../components/Explore";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>
      <Layout>
        <Hero />
        <Explore />
        <Showcase />
        <Gallery />
        <Footer />
      </Layout>
    </LocalizationProvider>
  );
}

export default App;
