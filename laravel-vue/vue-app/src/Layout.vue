<template>
    <div>
        <customHeader />
        <slot></slot>
        <customFooter />
    </div>
</template>

<script>
import {provide} from "vue";
import customHeader from "@/components/customHeader.vue";
import customFooter from "@/components/customFooter.vue";

export default {
    components: {
        customHeader,
        customFooter,
    },
    setup() {
        const example_context = 7;
        provide('example_context', example_context);
    },
};
</script>
