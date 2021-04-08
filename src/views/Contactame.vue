<template>
  <section>
    <Form />
  </section>
</template>

<script>
  import Form from '@/components/Form.vue'

  export default {
    name: 'Contactame',
    components: {
      Form
    }
  }
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>