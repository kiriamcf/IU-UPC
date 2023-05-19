import Footer from "../components/footer";
import Button from '../components/button'
import CartList from "../components/cartlist";
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export const fetchCache = 'force-no-store';

export default async function CartPage() {
  const session = await getServerSession(authOptions); //Redirigir al login si l'usuari no esta loguejat


  return (
    <>
      <main className="min-h-almostScreen pb-10 px-5">
        <h1 className="p-5 text-center font-bold text-2xl">
          El teu carret
        </h1>
        <CartList />
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