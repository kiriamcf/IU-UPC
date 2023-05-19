import ShowCard from "../components/showcard";
import Footer from "../components/footer";
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function CardPage() {
  const session = await getServerSession(authOptions);

  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();
  
  return (
    <>
      <main className="min-h-almostScreen pb-10 px-5">
        <ShowCard products={products} session={session}/>
      </main>
      <Footer />
    </>
  );
}
