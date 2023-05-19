import Footer from "../components/footer";
import ShowLogin from "../components/showlogin";


export default function LoginPage({params: {lng}}) {
  return (
    <>
      <main className="min-h-almostScreen w-full max-w-sm mx-auto pt-8">
        <ShowLogin lng={lng} /> 
      </main>
      <Footer lng={lng}/>
    </>
  );
}