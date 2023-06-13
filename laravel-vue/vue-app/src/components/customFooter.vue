<template>
    <footer class="bg-custom-black py-10 flex justify-evenly mt-auto">
        <div>
            <p class="uppercase mb-1 text-white text-sm font-bold">
                Carta
            </p>
            <ul>
                <li>
                    <a class="uppercase text-custom-gray text-xs hover:text-gray-300" href="#">
                        Reservar taula
                    </a>
                </li>
                <li>
                    <router-link to="/carta" class="uppercase text-custom-gray text-xs hover:text-gray-300" href="#">
                        Carta
                    </router-link>
                </li>
            </ul>
        </div>
        <div>
            <p class="uppercase mb-1 text-white text-sm font-bold">
                Truca'ns
            </p>
            <address class="text-white text-sm">
                <p>
                    (+34) 666 666 666
                </p>
            </address>
        </div>
        <div>
            <p class="uppercase mb-1 text-white text-sm font-bold">
                Segueix-nos
            </p>
            <address class="text-custom-gray flex gap-4">
                <a class="hover:text-gray-300" href="#">
                    <facebookIcon />
                </a>
                <a class="hover:text-gray-300" href="#">
                    <instagramIcon />
                </a>
                <a class="hover:text-gray-300" href="#">
                    <twitterIcon />
                </a>
            </address>
        </div>
    </footer>
</template>

<script>
import facebookIcon from "@/components/icons/facebookIcon.vue";
import instagramIcon from "@/components/icons/instagramIcon.vue";
import twitterIcon from "@/components/icons/twitterIcon.vue";

export default {
    components: {
        facebookIcon,
        instagramIcon,
        twitterIcon,
    },
};
</script>
