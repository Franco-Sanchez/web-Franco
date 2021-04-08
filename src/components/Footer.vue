<template>
  <footer>
    <h6>Derechos reservados - @Franco Sanchez</h6>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'  
  }
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 17px;
}

h6 {
  color: var(--gray);
  font-weight: 500;
  font-size: 14px;
}
</style>