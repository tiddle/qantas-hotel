import styles from "./hotelCounter.module.css";

export default function HotelCounter({ count, location }) {
  return (
    <div data-testid="hotel-counter" className={styles.hotelCounter}>
      {count} hotels in {location.reduce((acc, curr) => {
        acc += ', ' + curr;
        return acc;
      }, '')}
    </div>
  );
}
