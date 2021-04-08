<template>
  <section>
    <article>
      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <Button />
    </article>
    <img src="../assets/world.svg" alt="world">
  </section>
</template>

<script>
  import Button from '@/components/Button.vue'

  export default {
    name: 'Inicio',
    components: {
      Button
    }
  }
</script>

<style lang="scss" scoped>
section, article {
  display: flex;
  justify-content: center;
  align-items: center;
}

article {
  flex-direction: column;
}

img {
  position: fixed;
  left: -85px;
  bottom: -120px;
}

button {
  align-self: center;
}
</style>