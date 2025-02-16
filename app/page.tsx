import "@/styles/global.css";
import style from './page.module.css';

import HotelListing from "@/components/hotelListing";
import HotelCounter from "@/components/hotelCounter";
import HotelFilter from "@/components/hotelFilter";

import data from './data.json';

export default async function Page() {
  // simulate API call
  const { results } = await Promise.resolve(data);


  console.log(results);

  console.log(getLocations(results));

  const sortedHotels = sortHotels(results, "low-high");

  return (
    <main className={style.container}>
      <img src="./qantas-logo.png" alt="Qantas Logo" />
      <div className={style.filterBar}>
        <div className={style.count} >
          <HotelCounter count={results.length} locations={getLocations(sortedHotels)} />
        </div>
        <div className={style.filter}>
          <HotelFilter />
        </div>
      </div>
      <HotelListing hotels={sortedHotels} />
    </main>
  );
}


export function getLocations(hotelArray) {
  const hotelCities = hotelArray.map((hotel) => {
    return hotel.property.address[1];
  });

  // remove duplicates
  return [... new Set(hotelCities)];
}

export function sortHotels(hotelArray, sortType) {
  return hotelArray.toSorted((a, b) => {
    if (sortType === "low-high") {
      return a.offer.displayPrice.amount - b.offer.displayPrice.amount;
    }

    return b.offer.displayPrice.amount - a.offer.displayPrice.amount;
  });
}
