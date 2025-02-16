/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import HotelCounter, { locationArrayToString } from "./";

describe("<HotelCounter />", () => {
  it("<HotelCounter /> Component", () => {
    render(<HotelCounter count={1} locations={["Sydney"]} />);
    expect(screen.getByTestId("hotel-counter")).toBeTruthy();
  });

  it("locationsArrayToString() test", () => {
    expect(locationArrayToString(["Sydney", "Melbourne"])).toBe("Sydney, Melbourne");
  })
});

