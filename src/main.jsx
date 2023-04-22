import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./api";
import { render } from "react-dom";
// import { worker } from "./mocks/browser";
// worker.start();
// import "./mocks";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
