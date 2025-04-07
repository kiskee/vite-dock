import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("renders the Vite and React logos", () => {
    render(<App />);
    expect(screen.getByAltText("Vite logo")).toBeDefined();
    expect(screen.getByAltText("React logo")).toBeDefined();
  });

  it("renders the main title", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeDefined();
  });

  it("renders the main title", () => {
    render(<App />);
    expect(screen.getByText("Vite + React aasa")).toBeDefined();
  });
  
  it("increments the count when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is 0/i });
    fireEvent.click(button);
    expect(screen.getByText("count is 1")).toBeDefined();
  });
});