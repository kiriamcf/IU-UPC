<template>
    <button
        class="border-2 border-custom-black font-semibold uppercase text-lg py-2 px-4 hover:shadow-custom-button transition-shadow"
        :class="{
            '!border-white hover:!shadow-custom-button-white !text-white':
                asWhite,
        }"
    >
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: String,
        asWhite: Boolean,
    },
};
</script>
