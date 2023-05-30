<template>
    <main>
        <!-- <Slider lng="{lng}" /> -->
        <homeSlider />
        <div class="pt-7 pb-10 gap-8 flex flex-col justify-center items-center">
            <h1 class="uppercase text-xl font-bold leading-5">
                Restaurant de l'EPSEM
            </h1>
            <p class="max-w-xl text-center">
                Ens encanta oferir als nostres clients una experiència culinària
                única i deliciosa. Amb una àmplia varietat d'opcions al nostre
                menú, des de plats tradicionals espanyols fins a opcions
                vegetarianes i sense gluten, estem segurs que trobaràs alguna
                cosa que t'agradi.
            </p>
            <div class="flex items-center justify-center max-w-4xl">
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
                >
                    <div
                        v-for="(image, index) in images"
                        :key="index"
                        class="w-full h-[250px] rounded overflow-hidden"
                    >
                        <img
                            :src="image"
                            alt="Plat"
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <iframe
            class="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1488.6222323815655!2d1.827872609130784!3d41.7368196264712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a45806394f06e3%3A0xd61cd53aaa1aaf0d!2sRestaurante%20UPC%2C%20Manresa!5e0!3m2!1ses!2ses!4v1678902887030!5m2!1ses!2ses"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </main>
</template>

<script>
import homeSlider from "@/components/homeSlider.vue";
import imgLanding1 from "@/assets/landing_1.jpg";
import imgLanding2 from "@/assets/landing_2.jpg";
import imgLanding3 from "@/assets/landing_3.jpg";
import imgLanding4 from "@/assets/landing_4.jpg";
import imgLanding5 from "@/assets/landing_5.jpg";
import imgLanding6 from "@/assets/landing_6.jpg";

export default {
    components: {
        homeSlider,
    },
    data() {
        return {
            images: [
                imgLanding1,
                imgLanding2,
                imgLanding3,
                imgLanding4,
                imgLanding5,
                imgLanding6,
            ],
        };
    },
};
</script>
