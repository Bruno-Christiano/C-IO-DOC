<template>
  <div id="app">
    <Navbar v-if="!$route.meta.hideNavbar" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      isLogin: true
    }
  },
  computed: {
    isNotALoginPage() {
      this.$route.name !== 'login'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600&family=Roboto:wght@100;400&display=swap');

* {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

:root {
  --letter-color: #f2f2f2;
  --secundary-letter-color: #e2e8e9;
  --main-color: #0477bf;
  --secundary-color: #0468bf;
}

#app {
  background: #dafaff;
  min-height: 100vh;
}
</style>
