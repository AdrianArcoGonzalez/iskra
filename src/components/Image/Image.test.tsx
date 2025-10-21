import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Image component", () => {
  const placeholder =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

  test("renders correctly", () => {
    const image = { src: "test.jpg", alt: "Test Image" };

    render(<Image src={image.src} alt={image.alt} />);

    expect(screen.getByAltText(image.alt)).toBeInTheDocument();
  });
  test("renders placeholder when src causes an error", async () => {
    const image = {
      src: new Error("Image load error") as unknown as string,
      alt: "Test Image",
    };

    render(<Image src={image.src} alt={image.alt} />);

    await (() => {
      const imgElement = screen.getByRole("img");

      expect(imgElement).toHaveAttribute("src", placeholder);
    });
  });
});
