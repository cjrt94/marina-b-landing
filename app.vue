<template>
  <div class="h-svh w-[100%] relative">
    <div class="h-full flex flex-col overflow-hidden relative">
      <img src="/hero.png" alt="Hero Image" class="w-full h-full object-cover object-center">
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