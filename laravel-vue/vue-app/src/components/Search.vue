<template>
    <div class='relative group w-full'>
        <div class='py-2 flex items-center gap-2 text-sm text-gray-400 border-b-2 border-gray-400'>
            <searchIcon class='group-focus-within:text-primary transition-colors duration-300 group-valid:text-primary' />
            <input class='bg-transparent focus:outline-none placeholder-gray-400 focus:text-primary valid:text-primary' type='text' placeholder="Producte" />
        </div>
        <div class='absolute bottom-0 w-full h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300'></div>
    </div>
</template>

<script>
import searchIcon from "@/components/icons/searchIcon.vue";

export default {
    components: {
        searchIcon,
    },
};
</script>

