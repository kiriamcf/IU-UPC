<template>
    <header class="w-full h-[67px] py-4 px-8 flex items-center justify-between">
      <nav class="w-full flex items-center justify-between">
        <div class="flex gap-4 items-center">
            <router-link to="/">
                <img :src="logo" alt="Webpage Logo" class="w-[120px]" />
            </router-link>
            <genericDropdown />
            <a href="#" class="hidden md:inline-block uppercase underline text-lg transition-colors hover:text-primary">
                Reservar taula
            </a>
            <router-link to="/carta" class="hidden md:inline-block uppercase underline text-lg transition-colors hover:text-primary">
                Carta
            </router-link>
        </div>
        <div v-if="session" class='flex gap-4 items-center'>
            <router-link to="/carret">
                <cartIcon />
            </router-link>
            <loginDropdown :name="userData.name" imgUrl="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" />
        </div>
        <div v-else>
            <ul class="hidden md:flex items-center gap-4">
                <li class="uppercase underline text-xl transition-colors hover:text-primary">
                    <router-link to="/login">
                        Login
                    </router-link>
                </li>
                <li class="uppercase underline text-xl transition-colors hover:text-primary">
                    <a href="#">
                        Register
                    </a>
                </li>
            </ul>
            <userCircle class='md:hidden cursor-pointer hover:text-primary' />
        </div>
      </nav>
    </header>
</template>

<script>
    import axios from "axios";
    import imgLogo from "@/assets/logo.svg";
    import genericDropdown from "@/components/genericDropdown.vue";
    import cartIcon from "@/components/cartIcon.vue";
    import loginDropdown from "@/components/loginDropdown.vue";
    import userCircle from "@/components/icons/userCircle.vue";

    export default {
        components: {
            genericDropdown,
            cartIcon,
            loginDropdown,
            userCircle,
        },
        data() {
            return {
                session: true,
                logo: imgLogo,
                userData: {},
            };
        },
        created() {
            axios.get("http://localhost:8000/api/user")
            .then(response => {
                this.userData = response.data.data;
            })
            .catch(error => {
                console.error(error);
            });
        },
    };
</script>