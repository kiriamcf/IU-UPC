import Footer from "../components/footer";
import Button from '../components/button'
import CartList from "../components/cartlist";
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function CartPage() {
  const session = await getServerSession(authOptions); //Redirigir al login si l'usuari no esta loguejat

  const res = await fetch(`http://localhost:3000/api/users/${session.user.id}?provider=google`);
  const userData = await res.json();
  console.log(typeof userData)
  const products = userData.products;

  return (
    <>
      <main className="min-h-almostScreen pb-10 px-5">
        <h1 className="p-5 text-center font-bold text-2xl">
          El teu carret
        </h1>
        <div>
          <ul className="border-b-2 flex justify-between py-2 font-semibold">
            <li>
              Item
            </li>
            <li>
              Price
            </li>
            <li>
              Quantity
            </li>
            <li>
              Total
            </li>
          </ul>
          <CartList initialProducts={products} />

        </div>
        <div className="mt-4 flex justify-end">
          <div className="flex flex-col gap-2 w-64">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Total:</p>
              <p className="text-xl">45$</p>
            </div>
            <Button text='Pagar' />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}