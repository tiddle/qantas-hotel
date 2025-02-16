import styles from "./hotelListing.module.css";
console.log(styles);

export default function HotelListing({ hotels }) {
  return (
    <ul data-testid="hotel-listing" className={styles.hotelListing}>
      {hotels.map((hotel) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </ul>
  );
}

export function HotelItem({ hotel }) {
  const { offer, property } = hotel;
  const propertyAddress = property.address[0] + ", " + property.address[1];


  return (
    <li data-testid="hotel-item" className={styles.hotel}>
      <div className={styles.image}>
        {offer.promotion && (<span className={styles.deal}>{offer.promotion.title}</span>)}
        <img src={property.previewImage.url} alt={property.previewImage.caption} />
      </div>
      <div className={styles.room}>
        <div className={styles.nameSection}>
          <h3 className={styles.title}>{property.title}</h3>
          <p className={styles.address}>{propertyAddress}</p>
        </div>
        <div className={styles.priceSection}>
          <p className={styles.night}>1 night total ({offer.displayPrice.currency})</p>
          <p className={styles.price}>${offer.displayPrice.amount}</p>
          {offer.savings && (<p className={styles.savings}>Save ${offer.savings.amount}~</p>)}
        </div>
      </div>
    </li>
  );
}
