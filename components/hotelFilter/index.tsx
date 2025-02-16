'use client'
import { useRouter } from 'next/navigation';
import styles from "./hotelFilter.module.css";

export default function HotelFilter() {
  const router = useRouter();

  return (
    <div data-testid="hotel-filter" className={styles.hotelFilter}>
      <label>Sort by:
        <select onChange={(e) => {
          router.push('/?sort=' + e.target.value);
        }}>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>
      </label>

    </div>
  );
}
