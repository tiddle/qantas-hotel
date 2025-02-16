import HotelListing from "@/components/hotelListing";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <>
      <img src="./qantas-logo.png" alt="Qantas Logo" />
      <HotelListing />
    </>
  );
}
