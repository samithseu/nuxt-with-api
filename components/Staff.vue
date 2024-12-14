<script setup lang="js">
const { data: users } = await useFetch("https://jsonplaceholder.typicode.com/users");
</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

<style scoped lang="css">
ul {
  width: max-content;
  margin-inline: auto;
}
li {
  font-size: 1.2rem;

  &:not(:last-child) {
    margin-bottom: 0.8em;
  }
}
</style>
