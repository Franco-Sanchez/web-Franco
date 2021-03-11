<template>
  <NavBar />
  <router-view />
</template>

<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'App',
    components: {
      NavBar
    }  
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  max-width: 1440px;
  margin: 0 auto;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
