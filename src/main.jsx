import { render } from "preact";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./api";
import { worker } from "./mocks/browser";
worker.start();

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
