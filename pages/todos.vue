<script setup lang="js">
definePageMeta({
  layout: "default",
});
useHead({
  titleTemplate: "Todos - %s",
});

const { data: todos } = await useFetch("/api/todos");
</script>

<template>
  <div>
    <h1 class="text-2xl text-green-500 font-bold mb-4">
      Todos - {{ todos.length }}
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <GradientBorder
        v-for="todo in todos"
        :key="todo.id"
        to="/todos"
        target="_self"
      >
        <p class="text-nowrap overflow-hidden overflow-ellipsis text-center">
          {{ todo.title }}
        </p>
      </GradientBorder>
    </div>
  </div>
</template>
