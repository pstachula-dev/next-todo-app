import { render, screen } from "@testing-library/react";

import Home from "../page";

describe("Home Page", () => {
  it("renders TodoList with fetched data", async () => {
    render(await Home());

    expect(screen.getByText("TODO List")).toBeInTheDocument();
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });
});
