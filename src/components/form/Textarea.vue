<template>
  <textarea :id="message" />
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    message: String
  }
}
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  height: 104px;
  border: 3px solid rgba(17, 236, 181, 0.19);
  border-radius: 20px;
  outline: none;
  resize: none;
  font-size: 16px;
  padding: 10px;

  &:focus {
    transition: all .5s;
    border-color: var(--green-light2);
  }
}
</style>