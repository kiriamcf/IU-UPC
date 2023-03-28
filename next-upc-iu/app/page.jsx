import Image from 'next/image'
import Link from 'next/link'
import Footer from './components/footer'
import Slider from './components/slider'

export default function Home() {
  const landing_images = [
    {id: 1, url: "/landing_1.jpg", alt: "Arròs i gambes"},
    {id: 2, url: "/landing_2.jpg", alt: "Carn i verdures"},
    {id: 3, url: "/landing_3.jpg", alt: "Carn estil japonès"},
    {id: 4, url: "/landing_4.jpg", alt: "Sopa de verdures"},
    {id: 5, url: "/landing_5.jpg", alt: "Arròs amb carn"},
    {id: 6, url: "/landing_6.jpg", alt: "Carn amb verdures"},
  ];

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
              {landing_images.map(imatge => (
                <Image key={imatge.id} src={imatge.url} alt={imatge.alt} width={300} height={300} className="h-[250px] object-cover rounded" />
              ))}
            </div>
          </div>
        </div>
        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1488.6222323815655!2d1.827872609130784!3d41.7368196264712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a45806394f06e3%3A0xd61cd53aaa1aaf0d!2sRestaurante%20UPC%2C%20Manresa!5e0!3m2!1ses!2ses!4v1678902887030!5m2!1ses!2ses" height="500" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </main>

      <Footer />

    </>
  )
}
