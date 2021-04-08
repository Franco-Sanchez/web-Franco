<template>
  <input :type="typeName" :id="idName"/>
</template>

<script>
export default {
  name: "Input",
  props: {
      typeName: String,
      idName: String
  }
};
</script>

<style lang="scss" scoped>
input {
    width: 100%;
    height: 67px;
    border: 3px solid rgba(17, 236, 181, 0.19);
    border-radius: 20px;
    outline: none;
    font-size: 16px;
    padding: 10px;

    &:focus {
        transition: all .5s;
        border-color: var(--green-light2);
    }
}
</style>
