/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import HotelListing from "./hotelListing";

it("<HotelListing /> Component", () => {
  render(<HotelListing />);
  expect(screen.getByTestId("hotel-listing")).toBeTruthy();
});
