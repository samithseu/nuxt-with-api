<script setup lang="js">
definePageMeta({
  layout: "default",
});
useHead({
  titleTemplate: "About - %s",
});

const { data: todos } = await useFetch("/api/todos");
</script>

<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <li
      class="px-8 py-6 border border-green-500 rounded-lg text-white duration-200 hover:bg-green-500 hover:text-black text-xl text-center cursor-pointer content-center"
      v-for="todo in todos"
      :key="todo.id"
    >
      {{ todo.title }}
    </li>
  </ul>
</template>
