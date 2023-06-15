<template>
    <div class='relative p-2 group'>
        <cartFilled class='group-hover:text-primary transition-colors' />
        <span class='absolute top-0 right-0 flex items-center justify-center rounded-full w-5 h-5 aspect-w-1 aspect-h-1 bg-primary group-hover:bg-white group-hover:text-primary border border-primary transition-colors text-xs font-semibold text-white'>
            {{userCart.reduce((acc, curr) => acc + curr.product_quantity, 0)}}
        </span>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import cartFilled from "@/components/icons/cartFilled.vue";

export default {
    components: {
        cartFilled,
    },
    computed: {
        ...mapState(['userCart']),
    },
    methods: {
        ...mapActions(['fetchUserCart']),
    },
};
</script>