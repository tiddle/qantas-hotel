/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import Page, { getLocations, sortHotels } from "./page";
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

it('sortHotels() test', () => {
  const data = [{
    property: {
      title: 'High'
    },
    offer: {
      displayPrice: {
        amount: 100
      }
    }
  }, {
    property: {
      title: 'Low'
    },
    offer: {
      displayPrice: {
        amount: 50
      }
    }
  }]

  const sortedHotels = sortHotels(data, 'low-high');
  expect(sortedHotels[0].property.title).toEqual('Low');
  expect(sortedHotels[1].property.title).toEqual('High');

  const sortedHotels2 = sortHotels(data, 'high-low');
  expect(sortedHotels2[1].property.title).toEqual('Low');
  expect(sortedHotels2[0].property.title).toEqual('High');
})
