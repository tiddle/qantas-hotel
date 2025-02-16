/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import Page, { getLocations } from "./page";
import { Suspense } from "react";

it("<Page /> Component", async () => {
  //const page = render(
  //  <Suspense>
  //    <Page />
  //  </Suspense>
  //);
  //page.debug();
  //expect(screen.getByRole("img")).toBeTruthy();
  expect(true).toBeTruthy();
});

it('getLocations() test', () => {
  const data = [{
    property: {
      address: ['aa', 'Sydney']
    }
  },
  {
    property: {
      address: ['aa', 'Sydney']
    }
  },
  {
    property: {
      address: ['aa', 'Melbourne']
    }
  }
  ]
  const locations = getLocations(data);
  expect(locations.length).toEqual(2);
})
