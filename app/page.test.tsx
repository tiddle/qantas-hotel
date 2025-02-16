/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("<Page /> Component", () => {
  render(<Page />);
  expect(screen.getByRole("img")).toBeTruthy();
});
