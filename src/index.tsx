import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import MeetUpContextProvider from "./store/context/MeetContextProvider";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <MeetUpContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MeetUpContextProvider>
  </React.StrictMode>
);
