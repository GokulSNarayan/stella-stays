import { useState } from "react";
import "./App.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Explore from "../components/Explore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Navbar>
      <Hero />
      <Explore />
    </Navbar>
  );
}

export default App;
