import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Slider from './components/slider'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"


export default function Home() {
  return (
    <>
      <header className="w-full py-4 px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="Webpage Logo" width={120} height={50} />
          <span className="uppercase text-xl transition-colors hover:text-primary">
            Carta
          </span>
        </div>
        <nav className="flex items-center gap-4">
          <span className="uppercase text-xl transition-colors hover:text-primary">
            Login
          </span>
          <span className="uppercase text-xl transition-colors hover:text-primary">
            Register
          </span>
        </nav>
      </header>

      <main>
        <Slider />
        <div className="mt-7 flex flex-col justify-center items-center">
          <h1 className="mb-5 text-xl font-bold">
            RESTAURANT DE L’EPSEM
          </h1>
          <p className="max-w-[50%] text-center">
            Ens encanta oferir als nostres clients una experiència culinària única i deliciosa. Amb una àmplia varietat d'opcions al nostre menú, des de plats tradicionals espanyols fins a opcions vegetarianes i sense gluten, estem segurs que trobaràs alguna cosa que t'agradi.
          </p>
        </div>
        <div className="mt-7 mb-7 flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            <Image src="/example.jpg" alt="Imatge exemple" width={300} height={300} />
            <Image src="/example.jpg" alt="Imatge exemple" width={300} height={300} />
            <Image src="/example.jpg" alt="Imatge exemple" width={300} height={300} />
            <Image src="/example.jpg" alt="Imatge exemple" width={300} height={300} />
            <Image src="/example.jpg" alt="Imatge exemple" width={300} height={300} />
            <Image src="/example.jpg" alt="Imatge exemple" width={300} height={300} />
          </div>
        </div>
      </main>

      <footer className="bg-black py-10 flex justify-evenly">
        <div>
          <p className="mb-1 text-white text-sm font-bold">
            CARTA
          </p>
          <ul>
            <li>
              <Link className="text-gray-500 text-xs hover:text-gray-300" href="/esmorzar">
                ESMORZAR
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 text-xs hover:text-gray-300" href="/dinar">
                DINAR
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 text-xs hover:text-gray-300" href="/begudes">
                BEGUDES
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-1 text-white text-sm font-bold">
            TRUCA'NS
          </p>
          <address className="text-gray-300 text-sm">
            <p>
              (+34) 666 666 666
            </p>
          </address>
        </div>
        <div>
          <p className="mb-1 text-white text-sm font-bold">
            SEGUEIX-NOS
          </p>
          <address className="text-gray-500 flex justify-around">
            <a className="hover:text-gray-300" href="#">
              <FaFacebook />
            </a>
            <a className="hover:text-gray-300" href="#">
              <FaInstagram />
            </a>
            <a className="hover:text-gray-300" href="#">
              <FaTwitter />
            </a>
          </address>
        </div>
      </footer>

      {/* per si voleu mirar exemples de com va tailwind / imports de components, al codi de abaix n'hi ha */}

      {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}

    </>
  )
}
