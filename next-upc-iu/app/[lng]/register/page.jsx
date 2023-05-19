import Footer from "../components/footer";
import ShowRegister from "../components/showregister";

export default function RegisterPage({ params: {lng} }){
  return (
    <>
      <main className="min-h-almostScreen w-full max-w-sm mx-auto pt-8">
        <ShowRegister lng={lng} />
      </main>
      <Footer lng={lng}/>
    </>
  );
}