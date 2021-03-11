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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
