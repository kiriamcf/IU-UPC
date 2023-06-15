<template>
    <main class="min-h-almostScreen pb-10 px-5">
        <h1 class="p-5 text-center font-bold text-2xl">
            El teu carret
        </h1>
        <div>
            <table class="w-full text-center">
                <thead>
                <tr class="border-b-2">
                    <th class='py-2'></th>
                    <th class="py-2">Producte</th>
                    <th class="py-2">Preu</th>
                    <th class="py-2">Quantitat</th>
                    <th class="py-2">Total</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in userCart" :key="index" class='border-b font-medium'>
                        <td class="py-2 w-24">
                            <img :src="product.image_path" alt="Imatge producte"/>
                        </td>
                        <td class="py-2">
                            {{product.name}}
                        </td>
                        <td class="py-2">
                            {{product.price}}€
                        </td>
                        <td class="py-2">
                            {{product.product_quantity}}
                        </td>
                        <td class="py-2">
                            {{(product.price * product.product_quantity).toFixed(2)}}€
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-4 flex justify-end">
            <div class="flex flex-col gap-2 w-64">
                <div class="flex justify-between items-center">
                    <p class="font-semibold">Total:</p>
                    <p class="text-xl">{{userCart.reduce((acc, curr) => acc + (curr.price * curr.product_quantity), 0)}}$</p>
                </div>
                <customButton :asWhite="false" text="Pagar" />
            </div>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex';
import customButton from "@/components/customButton.vue";

export default {
    components: {
        customButton,
    },
    computed: {
        ...mapState(['userCart']),
    },
};
</script>
