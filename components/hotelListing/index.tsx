import styles from "./hotelListing.module.css";

export default function HotelListing({ hotels }) {
  return (
    <div data-testid="hotel-listing" className={styles.hotelListing}>
      {" "}
      {hotels.map((hotel) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export function HotelItem({ hotel }) {
  const { offer, property } = hotel;
  return (
    <div data-testid="hotel-item">
      {offer.name} {property.title}
    </div>
  );
}
