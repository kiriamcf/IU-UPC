import './globals.css'
import "tailwindcss/tailwind.css";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: 'Restaurant de l’Epsem',
  description: 'RESTAURANT DE L’EPSEM',
}

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
