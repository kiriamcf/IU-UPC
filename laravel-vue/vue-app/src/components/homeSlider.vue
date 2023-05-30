<template>
    <div class="h-[400px] sm:h-[500px] w-full m-auto relative group">
        <div
            :style="{ backgroundImage: `url(${slides[currentIndex]})` }"
            class="w-full h-full bg-center bg-cover duration-500"
        />
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10"
        >
            <h1 class="uppercase font-bold text-white text-5xl sm:text-7xl">
                Benvingut
            </h1>
            <div class="w-[80%] text-center">
                <!-- Falta enviar a /reserva -->
                <custom-button :asWhite="true" text="Reserva" />
            </div>
        </div>
        <div
            class="absolute bottom-0 left-[50%] -translate-x-[50%] flex justify-between px-4 items-center bg-white w-[380px] h-12"
        >
            <arrow-left
                @click="prevSlide"
                class="cursor-pointer text-primary"
            />
            <div class="flex">
                <div
                    v-for="(slide, index) in slides"
                    :key="index"
                    @click="goToSlide(index)"
                >
                    <dot-filled
                        v-if="currentIndex == index"
                        class="cursor-pointer text-primary"
                    />
                    <dot-empty v-else class="cursor-pointer text-primary" />
                </div>
            </div>
            <arrow-right
                @click="nextSlide"
                class="cursor-pointer text-primary"
            />
        </div>
    </div>
</template>

<script>
import customButton from "@/components/customButton.vue";
import arrowRight from "@/components/icons/arrowRight.vue";
import arrowLeft from "@/components/icons/arrowLeft.vue";
import dotFilled from "@/components/icons/dotFilled.vue";
import dotEmpty from "@/components/icons/dotEmpty.vue";
import imgLanding from "@/assets/landing.png";

export default {
    components: {
        customButton,
        arrowRight,
        arrowLeft,
        dotFilled,
        dotEmpty,
    },
    data() {
        return {
            currentIndex: 0,
            slides: [
                imgLanding,
                "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
                "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
            ],
        };
    },
    methods: {
        prevSlide() {
            const isFirstSlide = this.currentIndex === 0;
            const newIndex = isFirstSlide
                ? this.slides.length - 1
                : this.currentIndex - 1;
            this.currentIndex = newIndex;
        },
        nextSlide() {
            const isLastSlide = this.currentIndex === this.slides.length - 1;
            const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
            this.currentIndex = newIndex;
        },
        goToSlide(slideIndex) {
            this.currentIndex = slideIndex;
        },
    },
};
</script>
