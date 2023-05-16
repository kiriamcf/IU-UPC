import './globals.css'
import "tailwindcss/tailwind.css";
import { Montserrat } from "next/font/google";
import Header from './components/header';
import { UserProvider } from './context/UserContext';

export const metadata = {
  title: 'Restaurant de l’Epsem',
  description: 'RESTAURANT DE L’EPSEM',
}

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}