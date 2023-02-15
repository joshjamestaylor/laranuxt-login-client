<template>
    <div class="container  ">

        <form class="w-full max-w-sm mx-auto p-4 mb-48" @submit.prevent="register">
            <h1 class="block text-gray-800 text-xl font-bold text-center p-20">
                        Register
            </h1>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-first-name">
                        First name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input v-model="firstName" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-first-name" type="text" placeholder="John">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-last-name">
                        Last name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input v-model="lastName" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-last-name" type="text" placeholder="Doe">
                </div>
            </div>
            <div class="md:flex md:items-center my-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-email">
                        Email
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input v-model="email" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" placeholder="john.doe@example.com">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Password
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input v-model="password" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************">
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Sign Up
                </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      try {
        const runtimeConfig = useRuntimeConfig()
        const response = await useFetch(runtimeConfig.apiBase+'/api/register', {
          method: 'POST',
          body: JSON.stringify({
            "name": this.firstName + this.lastName,
            "email" : this.email,
            "password" : this.password
          },
          )
        })
        if (response.data.value.status) {
          const token = useCookie('token')
          
            token.value = response.data.value.token;
            navigateTo('/dashboard')


        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<script setup>


</script>