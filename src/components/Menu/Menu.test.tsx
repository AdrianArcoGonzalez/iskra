import { describe, test, expect, vi } from "vitest";
import { Page } from "../../interfaces/Interfaces";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";
import { renderWithRouter } from "../../utils/testUtils";
import { act } from "react";

describe("Menu component", () => {
  const itemsMock: Page[] = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  test("renders the menu button", () => {
    act(() => {
      renderWithRouter(<Menu items={itemsMock} />);

      const menuItems = screen.getAllByRole("button");

      expect(menuItems.length).toBe(1);
    });
  });
  test("renders as many items as passed when open by user", async () => {
    await act(async () => {
      renderWithRouter(<Menu items={itemsMock} />);

      const menuItems = screen.getAllByRole("button");
      await menuItems[0].click();

      const menuItemsAfterClick = screen.getAllByRole("button");
      expect(menuItemsAfterClick.length).toBe(itemsMock.length + 1);

      itemsMock.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });
  });
});
