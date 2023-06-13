<template>
    <article class='relative rounded-md shadow-md bg-stone-50'>
        <div style="backgroundColor: #333;" 
        class="p-4 text-custom-gray2 rounded-md absolute inset-0 z-10 transition-opacity duration-500"
        :class="isFlipped ? 'opacity-95' : 'opacity-0 pointer-events-none'"
        >
            <ul>
                <li>
                    allergies...
                </li>
            </ul>
        </div>
        <div class='relative rounded-t-md overflow-hidden'>
            <img class='duration-500 transition-transform hover:scale-125 w-full h-64 object-cover' :src="image" alt="Exemple carta"/>
            <infoCircle @click="isFlipped = !isFlipped" class='absolute top-1.5 right-1.5 z-20 text-primary'/>
        </div>
        <div class='p-4 flex flex-col gap-1'>
            <div class='flex justify-between'>
                <p class='font-bold'>
                    {{name}}
                </p>
                <p class='font-bold'>
                    {{price}}€
                </p>
            </div>
            <p class="mb-4">
                {{description}}
            </p>
            <customButton :asWhite="false" text="Afegir" />
        </div>
    </article>
</template>

<script>
import infoCircle from "@/components/icons/infoCircle.vue";
import customButton from "@/components/customButton.vue";

export default {
    props: {
        id: Number, 
        image: String, 
        name: String, 
        price: Number, 
        description: String, 
        allergies: Array,
    },
    components: {
        infoCircle,
        customButton,
    },
    data() {
        return {
            isFlipped: false,
        };
    },
};
</script>
