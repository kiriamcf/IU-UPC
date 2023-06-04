<template>
    <div class='relative p-2 group'>
        <cartFilled class='group-hover:text-primary transition-colors' />
        <span class='absolute top-0 right-0 flex items-center justify-center rounded-full w-5 h-5 aspect-w-1 aspect-h-1 bg-primary group-hover:bg-white group-hover:text-primary border border-primary transition-colors text-xs font-semibold text-white'>
            <!-- {userCart.reduce((total, product) => total + product.quantity, 0)} -->
            {{example_context}}
        </span>
    </div>
</template>

<script>
import { inject } from 'vue';
import cartFilled from "@/components/icons/cartFilled.vue";

export default {
    components: {
        cartFilled,
    },
    setup() {
        const example_context = inject('example_context');

        return {
            example_context,
        };
    },
};
</script>