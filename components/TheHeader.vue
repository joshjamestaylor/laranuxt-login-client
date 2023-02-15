<template>
    <header class="w-full bg-green-500">

      <nav class="">
        <!-- WEB VIEW-->
        <ul class=" hidden sm:flex gap-10 p-4 flex h-full 	 text-2xl font-bold text-white">
            <li class="mr-auto"><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink v-if="!useRuntimeConfig().loggedIn" to="/login">Login</NuxtLink></li>
            <li><NuxtLink v-if="!useRuntimeConfig().loggedIn" to="/register">Register</NuxtLink></li>

            <li><NuxtLink v-if="useRuntimeConfig().loggedIn" to="/dashboard">Dashboard</NuxtLink></li>
            <li><a v-if="useRuntimeConfig().loggedIn" href="/" @click="logOut()" >Logout</a></li>

        </ul>


        <!-- MOBILE NAV ICON -->
        <div  class="flex p-4 sm:hidden text-white">
            <svg @click="toggleNav()"
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10"
            fill=""
            viewBox="0 0 24 24"
            stroke="currentColor">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </div>
        <!-- MOBILE VIEW-->
        <ul id="navMob" class=" h-full bg-green-500 absolute w-full hidden text-center text-2xl font-bold text-white">
            <li><NuxtLink @click="toggleNav()" class="" to="/">Home</NuxtLink></li>
            <li><NuxtLink v-if="!useRuntimeConfig().loggedIn" @click="toggleNav()" to="/login">Login</NuxtLink></li>
            <li><NuxtLink v-if="!useRuntimeConfig().loggedIn" @click="toggleNav()" to="/register">Register</NuxtLink></li>
            <li><NuxtLink v-if="useRuntimeConfig().loggedIn" @click="toggleNav()" to="/dashboard">Dashboard</NuxtLink></li>
            <li><a v-if="useRuntimeConfig().loggedIn" href="/" @click="logOut()">Logout</a></li>

            <!-- MOBILE NAV ICON -->


        </ul>
        

      </nav>
    </header>
</template>
<script>


export default {
    
    data(){
        return {
            loggedIn:false,
        }
    },
    methods: {

        toggleNav() {
            let nav = document.getElementById('navMob');
            nav.style.display = nav.style.display == "none" ? "block" : "none";
        },
        logOut() {
            const token = useCookie('token')
            token.value = null;

        },
    
    }
}

</script>
<style>

</style>