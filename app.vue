<template>
  <div class="h-svh w-[100%] relative">
    <div class="h-full flex flex-col overflow-hidden relative">
      <img src="/hero.png" alt="Hero Image" class="w-full h-full object-cover object-center">

      <!--Call to action-->
      <div class="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center px-4">
        <Logo class="mb-8"></Logo>
        <div class="text-center font-body text-white font-light mb-8">
          <p class="mb-2">
            Discover our timeless pieces, crafted with the finest natural fibers in Peru.
          </p>
          <p>
            Sign up for a chance to win our first giveaway!
          </p>
        </div>

        <!--Form-->
        <form action="https://submit-form.com/0I5x40oY1" class="flex flex-col space-y-4 font-secondary text-neutral-800  [&_input]:text-sm  [&_input]:outline-0 [&_input]:h-[40px] [&_input]:w-[190px] [&_input]:px-4 [&_input]:sm:w-full">
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-1">
            <input v-model="document.name" type="text" placeholder="Name" required name="name">
            <input v-model="document.lastName" type="text" placeholder="Last Name" required name="lastName">
          </div>

          <input v-model="document.email" class="!w-full"  type="email" placeholder="Email" required name="email">
          <input v-model="document.instagram" class="!w-full" type="text" placeholder="Instagram Username" required name="instagram">

          <button class="bg-primary px-4 h-[40px] w-full font-secondary text-white font-light text-sm !mt-8">
            SEND
          </button>
        </form>
        <!--End-->
      </div>
      <!--End-->
    </div>
  </div>
</template>
<script>
import axios from "axios"

export default {
  name: 'Home',
  data() {
    return {
      document: {
        email: ''
      },
      messageSent: false,
      loading: false
    }
  },
  methods: {}
}
</script>
<style>
@import url("~/assets/css/main.css");

body, html {
  height: 100%;
}

#__nuxt {
  height: 100%;
}
</style>