import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export function renderWithRouter(ui: React.ReactElement, options = {}) {
  return render(<BrowserRouter>{ui}</BrowserRouter>, options);
}
