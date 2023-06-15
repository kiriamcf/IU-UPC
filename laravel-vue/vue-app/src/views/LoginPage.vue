<template>
    <main className="min-h-almostScreen w-full max-w-sm mx-auto pt-8">
        <form class="bg-white shadow-xl-full rounded p-8 mb-6 flex flex-col gap-4">
            <div>
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Correu electrònic
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors"
                    id="email"
                    type="email"
                    placeholder="exemple@email.com"
                    v-model="email"
                />
            </div>
            <div>
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                >
                    Contrasenya
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary focus:outline-none focus:shadow-outline transition-colors"
                    id="password"
                    type="email"
                    placeholder="******************"
                    v-model="password"
                />
            </div>
            <button
                @click="login"
                class="bg-primary-fill w-full hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
            >
                Login
            </button>
            <button
                @click="logout"
                class="bg-primary-fill w-full hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
            >
                Logout
            </button>
            <button
                @click="user"
                class="bg-primary-fill w-full hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
            >
                user
            </button>
            <a
                class="inline-block align-baseline font-bold text-sm text-primary-fill hover:text-primary"
                href="#"
            >
                Has oblidat la contrasenya?
            </a>
        </form>
        <section class="flex gap-4 w-full">
            <div class="rounded p-4 w-1/2 flex justify-center bg-white shadow-xl-full hover:bg-gray-100 transition-colors cursor-pointer">
                <a href="#">
                    <googleIcon />
                </a>
            </div>
            <div class="rounded p-4 w-1/2 flex justify-center bg-white shadow-xl-full hover:bg-gray-100 transition-colors cursor-pointer">
                <a href="#">
                    <img
                        src="/upc.svg"
                        alt="Upc Logo"
                        class="h-[40px]"
                    />
                </a>
            </div>

        </section>
    </main>
</template>

<script>
import axios from "axios";
import googleIcon from "@/components/icons/googleIcon.vue";

export default {
    components: {
        googleIcon,
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            axios.get('http://localhost:8000/sanctum/csrf-cookie', {headers: {'Accept':'application/json'}}).then(response => {
                axios.post("http://localhost:8000/api/login", {email: this.email, password: this.password}, {headers: {'Content-Type':'application/json', 'Accept':'application/json'}})
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            });
        },
        logout() {
            axios.get('http://localhost:8000/api/logout');
        },
        user() {
            axios.get('http://localhost:8000/api/user')
                .then(response => {
                   console.log(response); 
                })
        },
    },
};
</script>
