import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MeetUpContextProvider from "../store/context/MeetContextProvider";

export function renderWithRouter(ui: React.ReactElement, options = {}) {
  return render(<BrowserRouter>{ui}</BrowserRouter>, options);
}

export function renderWithRouterAndContext(
  ui: React.ReactElement,
  options = {}
) {
  return render(
    <MeetUpContextProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </MeetUpContextProvider>,
    options
  );
}
