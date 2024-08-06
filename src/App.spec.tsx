import { describe, expect, it } from "vitest";

import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should render Hello Testing header", () => {
    // render the component
    render(<App />);

    // search by text, is it in the document?
    expect(screen.getByText("Hello Testing!")).toBeInTheDocument();
  });

  it("should render a card element", () => {
    render(<App />);

    expect(screen.getByTestId("card")).toBeInTheDocument();
  });

  it("should increment the count when the button is clicked", async () => {
    render(<App />);

    // simulating user's click
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("count is 0");

    await user.click(button);

    expect(button.textContent).toBe("count is 1");
  });
});
