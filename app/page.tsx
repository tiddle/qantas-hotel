import HotelListing from "@/components/hotelListing";
import HotelCounter from "@/components/hotelCounter";
import HotelFilter from "@/components/hotelFilter";

import data from './data.json';

export default async function Page() {
  // simulate API call
  const { results } = await Promise.resolve(data);

  console.log(results);

  return (
    <>
      <img src="./qantas-logo.png" alt="Qantas Logo" />
      <div>
        <HotelCounter count={results.length} locations={getLocations(results)} />
        <HotelFilter />
      </div>
      <HotelListing hotels={results} />
    </>
  );
}


export function getLocations(hotelArray) {
  const hotelCities = hotelArray.map((hotel) => {
    return hotel.property.address[1];
  });

  // remove duplicates
  return [... new Set(hotelCities)];
}
