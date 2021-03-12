<template>
  <NavBar />
  <Footer />
  <router-view />
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'App',
    components: {
      NavBar,
      Footer
    }  
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap');

:root {
  --green-light: #51EDC6;
  --white: #FFF;
  --black: #000;
  --black-light: #3F3629;
  --gray: #C4C4C4;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  margin: 0 auto;
  min-width: 100vw;
  max-width: 1440px;
  min-height: 100vh;
  background-image: url('./assets/background_project.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
