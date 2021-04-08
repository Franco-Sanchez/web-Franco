<template>
  <label :for="idName">{{ text }}</label>
</template>

<script>
export default {
  props: {
    text: String,
    idName: String
  }
}
</script>

<style lang="scss" scoped>
label {
  font-size: 14px;
  font-weight: bold;
}
</style>