import Footer from "../components/footer";
import ShowBooking from "../components/showreserva";

export default function BookingPage({ params: {lng} }){
  return (
    <>
      <main className="min-h-almostScreen w-full max-w-sm mx-auto pt-8">
        <ShowBooking lng={lng} />
      </main>
      <Footer lng={lng}/>
    </>
  );
}