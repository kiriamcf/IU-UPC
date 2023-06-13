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
                    <!-- Iterar sobre els productes que te al carret -->
                    <tr class='border-b font-medium'>
                        <td class="py-2 w-24">
                            <img src="#" alt="nom producte.."/>
                        </td>
                        <td class="py-2">
                            test
                        </td>
                        <td class="py-2">
                            3€
                        </td>
                        <td class="py-2">
                            2
                        </td>
                        <td class="py-2">
                            6€
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-4 flex justify-end">
            <div class="flex flex-col gap-2 w-64">
                <div class="flex justify-between items-center">
                    <p class="font-semibold">Total:</p>
                    <p class="text-xl">6$</p>
                </div>
                <customButton :asWhite="false" text="Pagar" />
            </div>
        </div>
    </main>
</template>

<script>
import customButton from "@/components/customButton.vue";

export default {
    components: {
        customButton,
    },
};
</script>
