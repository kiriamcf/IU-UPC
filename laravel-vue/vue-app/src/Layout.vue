<template>
    <div>
        <customHeader />
        <slot></slot>
        <customFooter />
    </div>
</template>

<script>
import customHeader from "@/components/customHeader.vue";
import customFooter from "@/components/customFooter.vue";

export default {
    components: {
        customHeader,
        customFooter,
    },
    created() {
        this.$store.dispatch('fetchUserCart');
    },
};
</script>
