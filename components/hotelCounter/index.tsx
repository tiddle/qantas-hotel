import styles from "./hotelCounter.module.css";

export default function HotelCounter({ count, locations }) {
  return (
    <div data-testid="hotel-counter" className={styles.hotelCounter}>
      {count} <span className={styles.italics}> hotels in </span> {locationArrayToString(locations)}.
    </div>
  );
}

export function locationArrayToString(locations) {
  let locationString = locations.reduce((acc, curr) => {
    acc += curr + ', ';
    return acc;
  }, '')
  locationString = locationString.substring(0, locationString.length - 2);
  return locationString;
}
