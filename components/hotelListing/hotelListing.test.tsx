/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import HotelListing from "./";
import data from '../../app/data.json';

describe("<HotelListing />", () => {
  it("<HotelListing /> Component", () => {
    render(<HotelListing hotels={data.results} />);
    expect(screen.getByTestId("hotel-listing")).toBeTruthy();
  });
});

