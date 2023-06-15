<template>
  <main className="min-h-almostScreen pb-10 px-5">
    <div class="flex flex-wrap mt-4 gap-8">
      <!--  FILTRES  -->
      <div class="basis-full md:basis-0 w-64">
        <div class="flex gap-4 justify-between pb-2">
          <h1 class="text-black text-sm font-semibold uppercase">
              Filtres
          </h1>
          <button
              class="py-0 px-0 text-primary text-xs object-contain hover:text-primary-hover transition"
              @Click={restoreFilters}
          >
              Reseteja filtres
          </button>
        </div>
        <div class="text-xs">
          <div class="flex flex-col xs:flex-row md:block">
            <div class="py-2 xs:border-b md:border-0 xs:flex-1">
              <h2 class="font-medium uppercase">Cercador</h2>
              <div class="py-2 xs:pr-3 md:pr-0">
                <Search/>
              </div>
            </div>
          </div>
          <div class="py-2 border-b">
            <h2 class="font-medium uppercase">
            Categoria
            </h2>
            <ul class="flex flex-row md:flex-col gap-2 py-2">
              <li class="flex gap-1 items-center">
                <input
                  type="checkbox"
                  class="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                  id="01"
                  name="01"
                />
                <label
                  for="01"
                  class="hover:cursor-pointer"
                >
                  Vegetarià
                </label>
              </li>
              <li class="flex gap-1 items-center">
                <input
                  type="checkbox"
                  class="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                  id="02"
                  name="02"
                />
                <label
                  for="02"
                  class="hover:cursor-pointer"
                >
                  Vegà
                </label>
              </li>
              <li class="flex gap-1 items-center">
                <input
                  type="checkbox"
                  class="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                  id="03"
                  name="03"
                />
                <label
                  for="03"
                  class="hover:cursor-pointer"
                >
                  Esmorzars
                </label>
              </li>
              <li class="flex gap-1 items-center">
                <input
                  type="checkbox"
                  class="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                  id="04"
                  name="04"
                />
                <label
                  for="04"
                  class="hover:cursor-pointer"
                >
                  Begudes
                </label>
              </li>
            </ul>
          </div>
          <div class="py-2 border-b">
            <h2 class="font-medium uppercase">
            Al·lergògens
            </h2>
            <ul class="flex flex-row md:flex-col gap-2 py-2">
              <li class="flex gap-1 items-center">
                <input
                  type="checkbox"
                  class="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                  id="05"
                  name="05"
                />
                <label
                  for="05"
                  class="hover:cursor-pointer"
                >
                  Sense gluten
                </label>
              </li>
              <li class="flex gap-1 items-center">
                <input
                  type="checkbox"
                  class="appearance-none h-2 w-2 bg-gray-200 rounded-full hover:bg-primary transition duration-300 hover:cursor-pointer checked:bg-primary"
                  id="06"
                  name="06"
                />
                <label
                  for="06"
                  class="hover:cursor-pointer"
                >
                  Sense lactosa
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- GRID PRODUCTES -->
      <div class="flex-1">
        <ul class="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <li v-for="(product, index) in products" :key="index">
            <Card :id="product.id" :image="getImage(product.image_path)" :name="product.name_ca" :price="product.price" :description="product.description_ca"/>
          </li>
        </ul>
      </div>
      <!-- <AnimatePresence>
        {popupVisible && (
          <motion.div
              class="fixed inset-0 w-full h-full bg-transparent flex items-start justify-center pointer-events-none z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              exit={{ opacity: 0, y: -20 }}
          >
            <div class="rounded shadow-lg bg-green-500 text-white p-4 mt-4">
              El producte s'ha afegit correctament
            </div>
          </motion.div>
        )}
      </AnimatePresence> -->
    </div>
  </main>
</template>

<script>
import axios from "axios";
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";

export default {
  components: {
    Card,
    Search,
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    getImage(imagePath) {
      if (!imagePath.includes(":8000")) {
        const first = imagePath.substring(0, 16);
        const second = imagePath.substring(16, imagePath.length);
        return (first + ":8000" + second);
      }
      return imagePath;
    },
  },
  created() {
    axios.get("http://localhost:8000/api/products")
      .then(response => {
        this.products = response.data.data
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>
