"use client";

import Image from 'next/image'
import Footer from '../components/footer';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';

export default function Home() {

  const [triedLogin, setTriedLogin] = useState(false)

  return (
    <>
      <div className="flex min-h-almostScreen flex-col">
        <main className="w-full max-w-sm mx-auto">
          <form className="bg-white shadow-xl-full rounded p-8 mb-6 mt-8 flex flex-col gap-4">
              <div>
                <div className="flex gap-2">
                  <label class="block w-1/3 text-gray-700 text-sm font-bold mb-2" for="nom">
                      Nom
                  </label>
                  <label class="block w-2/3 text-gray-700 text-sm font-bold mb-2" for="cognoms">
                      Cognoms
                  </label>
                </div>
                <div className="flex gap-2">
                  <input className={`shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${triedLogin ? "border-red-500" : ""}`} id="nom" type="text" placeholder="foo" />
                  <input className={`relative shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${triedLogin ? "border-red-500" : ""}`} id="cognoms" type="text" placeholder="bar baz" />
                </div>
                {triedLogin
                  ? <p className="text-red-500 text-xs italic mt-2">Introdueix el nom i cognoms.</p>
                  : '' 
                }
              </div>
              <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${triedLogin ? "border-red-500" : ""}`} id="email" type="email" placeholder="exemple@email.com" />
                {triedLogin
                  ? <p className="text-red-500 text-xs italic mt-2">Introdueix el correu.</p>
                  : '' 
                }
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Contrasenya
                </label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${triedLogin ? "border-red-500" : ""}`} id="password" type="password" placeholder="******************" />
                {triedLogin
                  ? <p className="text-red-500 text-xs italic mt-2">Introdueix la contrasenya.</p>
                  : '' 
                }
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Confirmació contrasenya
                </label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors ${triedLogin ? "border-red-500" : ""}`} id="password-confirm" type="password" placeholder="******************" />
                {triedLogin
                  ? <p className="text-red-500 text-xs italic mt-2">Introdueix la confirmació de contrasenya.</p>
                  : '' 
                }
              </div>
              <button onClick={setTriedLogin} className="bg-primary-fill w-full hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Register
              </button>
          </form>
          <section className="flex gap-4 w-full mb-6">
            <div class="rounded p-4 w-1/2 flex justify-center bg-white shadow-xl-full hover:bg-gray-100 transition-colors cursor-pointer">
              <a href="#">
                <FcGoogle size="40" />
              </a>
            </div>
            <div class="rounded p-4 w-1/2 flex justify-center bg-white shadow-xl-full hover:bg-gray-100 transition-colors cursor-pointer">
              <a href="#">
                <Image src="/upc.svg" alt="Upc Logo" width={40} height={40} className="h-[40px]" />
              </a>
            </div>
          </section>
      </main>

      <Footer />
      
      </div>
    </>
  )
}
