import { useState } from "react";
import "./App.css";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Explore from "../components/Explore";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Gallery2 from "../components/Gallery2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Hero />
      <Explore />
      <Showcase />
      <Gallery2 />
      <Footer />
    </Layout>
  );
}

export default App;
