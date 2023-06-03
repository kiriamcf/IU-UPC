<template>
    <div class='relative'>
        <div>
            <div class='hidden md:flex items-center gap-2'>
                <img class='rounded-full w-[32px]' :src="imgUrl" alt="img de perfil" />
                <div @click="loginDropdown = !loginDropdown" class='flex cursor-pointer hover:text-primary'>
                    <p class='font-medium select-none'>
                        {{name}}
                    </p>
                    <arrowDropdown />
                </div>
            </div>
            <img @click="loginDropdown = !loginDropdown" class='md:hidden rounded-full w-[32px] cursor-pointer' :src="imgUrl" alt="img usuari" />
        </div>

        <div 
            class="absolute w-fit p-2 bg-white rounded shadow-md border right-0 mt-[12px] z-30 transition-all duration-250"
            :class="loginDropdown ? 'visible opacity-100' : 'invisible opacity-0'"
            >
            <ul class='text-sm text-gray-700 flex flex-col gap-2 list-none'>
                <li>
                    <a href='#' class="uppercase text-lg transition-colors hover:text-primary whitespace-nowrap">
                        Perfil
                    </a>
                </li>
                <li>
                    <a href='#' class="uppercase text-lg transition-colors hover:text-primary whitespace-nowrap" onClick={handleLogOut}>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import arrowDropdown from "@/components/icons/arrowDropdown.vue";

export default {
    components: {
        arrowDropdown,
    },
    props: {
        name: String,
        imgUrl: String,
    },
    data() {
        return {
            loginDropdown: false,
        };
    },
};
</script>