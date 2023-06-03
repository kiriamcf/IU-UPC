<template>
    <div class="relative">
        <menuBurger class="md:hidden cursor-pointer hover:text-primary" @click="genericDropdown = !genericDropdown" />
        <div 
        class="absolute top-[120%] md:hidden flex flex-col gap-2 w-fit left-[50%] translate-x-[-50%] p-4 bg-white rounded shadow-md border right-0 z-30 transition-all duration-250"
        :class="genericDropdown ? 'visible opacity-100' : 'invisible opacity-0'">
            <a href="#" class="w-full uppercase text-lg transition-colors hover:text-primary whitespace-nowrap">
                Reservar taula
            </a>
            <a href="#" class="uppercase text-lg transition-colors hover:text-primary whitespace-nowrap">
                Carta
            </a>
        </div>
    </div>
</template>

<script>
import menuBurger from "@/components/icons/menuBurger.vue";

export default {
    components: {
        menuBurger,
    },
    data() {
        return {
            genericDropdown: false,
        };
    },
};
</script>