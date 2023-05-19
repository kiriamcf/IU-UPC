import Footer from "../components/footer";
import Button from '../components/button'
import CartList from "../components/cartlist";
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useTranslation } from '../../i18n';
export const fetchCache = 'force-no-store';

export default async function CartPage({params: {lng}}) {
  const { t } = await useTranslation(lng);
  const session = await getServerSession(authOptions); //Redirigir al login si l'usuari no esta loguejat

  return (
    <>
      <main className="min-h-almostScreen pb-10 px-5">
        <h1 className="p-5 text-center font-bold text-2xl">
          {t('cart_title')}
        </h1>
        <CartList lng={lng}/>
        <div className="mt-4 flex justify-end">
          <div className="flex flex-col gap-2 w-64">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Total:</p>
              <p className="text-xl">45$</p>
            </div>
            <Button text={t('button_pay')} />
          </div>
        </div>
      </main>
      <Footer lng={lng}/>
    </>
  );
}