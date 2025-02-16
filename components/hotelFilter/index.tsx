import styles from "./hotelFilter.module.css";

export default function HotelFilter({ count, location }) {
  return (
    <div data-testid="hotel-filter" className={styles.hotelCounter}>
      Hello Filter

    </div>
  );
}
