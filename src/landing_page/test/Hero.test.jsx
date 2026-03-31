import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Hero from "../home/Hero";

describe("Hero component", () => {
  test("renders hero image", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    const heroImage = screen.getByAltText(/hero image/i);
    expect(heroImage).toBeInTheDocument();
  });
});