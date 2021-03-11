<template>
  <nav>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/aboutme">About me</router-link></li>
      <li><router-link to="/portafolio">Portafolio</router-link></li>
      <li><router-link to="/contactame">Contactame</router-link></li>  
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style lang="scss" scoped>
nav, ul {
  display: flex;
}

nav {
  justify-content: center;
}

ul {
  justify-content: space-between;
  min-width: 530px;
}
</style>