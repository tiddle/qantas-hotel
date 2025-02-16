import styles from "./hotelFilter.module.css";

export default function HotelFilter() {
  return (
    <div data-testid="hotel-filter" className={styles.hotelFilter}>
      <label>Sort by:
        <select>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>
      </label>

    </div>
  );
}
