import Image from 'next/image'
import Link from 'next/link'
import Footer from './components/footer'
import Slider from './components/slider'

export default function Home() {
  return (
    <>
      <main>
        <Slider />
        <div className="pt-7 pb-10 gap-8 flex flex-col justify-center items-center">
          <h1 className="uppercase text-xl font-bold leading-5">
            restaurant de l'epsem
          </h1>
          <p className="max-w-xl text-center">
            Ens encanta oferir als nostres clients una experiència culinària única i deliciosa. Amb una àmplia varietat d'opcions al nostre menú, des de plats tradicionals espanyols fins a opcions vegetarianes i sense gluten, estem segurs que trobaràs alguna cosa que t'agradi.
          </p>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              <Image src="/example.jpg" alt="Imatge exemple" width={300} height={300} />
              <Image src="/example.jpg" alt="Imatge exemple" width={300} height={300} />
              <Image src="/example.jpg" alt="Imatge exemple" width={300} height={300} />
              <Image src="/example.jpg" alt="Imatge exemple" width={300} height={300} />
              <Image src="/example.jpg" alt="Imatge exemple" width={300} height={300} />
              <Image src="/example.jpg" alt="Imatge exemple" width={300} height={300} />
            </div>
          </div>
        </div>
        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1488.6222323815655!2d1.827872609130784!3d41.7368196264712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a45806394f06e3%3A0xd61cd53aaa1aaf0d!2sRestaurante%20UPC%2C%20Manresa!5e0!3m2!1ses!2ses!4v1678902887030!5m2!1ses!2ses" height="500" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </main>

      <Footer />

    </>
  )
}
