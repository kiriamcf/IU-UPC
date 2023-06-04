<template>
    <header class="w-full h-[67px] py-4 px-8 flex items-center justify-between">
      <nav class="w-full flex items-center justify-between">
        <div class="flex gap-4 items-center">
            <a href="#">
                <img :src="logo" alt="Webpage Logo" class="w-[120px]" />
            </a>
            <genericDropdown />
            <a href="#" class="hidden md:inline-block uppercase underline text-lg transition-colors hover:text-primary">
                Reservar taula
            </a>
            <a href="#" class="hidden md:inline-block uppercase underline text-lg transition-colors hover:text-primary">
                Carta
            </a>
        </div>
        <div v-if="session" class='flex gap-4 items-center'>
            <a href="#">
                <cartIcon />
            </a>
            <loginDropdown name="nom" imgUrl="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" />
        </div>
        <div v-else>
            <ul class="hidden md:flex items-center gap-4">
                <li class="uppercase underline text-xl transition-colors hover:text-primary">
                    <a href="#">
                        Login
                    </a>
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
                session: false,
                logo: imgLogo,
            };
        },
    };
</script>