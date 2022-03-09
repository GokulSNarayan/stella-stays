import { useState } from "react";
import "./App.css";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Explore from "../components/Explore";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Hero />
      <Explore />
      <Showcase />
      <Footer />
    </Layout>
  );
}

export default App;
