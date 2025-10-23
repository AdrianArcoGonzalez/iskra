import { describe, test, expect, vi } from "vitest";
import { Page } from "../../interfaces/Interfaces";
import { screen } from "@testing-library/react";
import Menu from "./Menu";
import { renderWithRouterAndContext } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";

describe("Menu component", () => {
  const itemsMock: Page[] = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  test("renders the menu button", () => {
    renderWithRouterAndContext(<Menu items={itemsMock} />);

    const menuButton = screen.getByText("Menu");
    expect(menuButton).toBeInTheDocument();
  });
  test("renders as many items as passed when open by user", async () => {
    renderWithRouterAndContext(<Menu items={itemsMock} />);

    const menuButton = screen.getByRole("button", { name: "Menu" });
    expect(menuButton).toBeInTheDocument();

    await userEvent.click(menuButton);

    itemsMock.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
});
