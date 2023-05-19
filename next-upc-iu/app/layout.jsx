import './globals.css'
import "tailwindcss/tailwind.css";
import { Montserrat } from "next/font/google";
import Header from './components/header';
import { UserProvider } from './context/UserContext';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export const metadata = {
  title: 'Restaurant de l’Epsem',
  description: 'RESTAURANT DE L’EPSEM',
}

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  let cart = []
  
  if (session){
    const res = await fetch(`http://localhost:3000/api/users/${session.user.id}?provider=google`);
    const userData = await res.json();
    cart = userData.cart;
  }

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <UserProvider cart={session ? cart : []} >
          <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}