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
    <h1 class="text-2xl text-green-500 font-bold mb-4">Todos</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <NuxtLink
        v-for="todo in todos"
        :key="todo.id"
        class="text-center w-full h-max bg-gradient-to-br from-green-500 from-10% bg-black via-30% to-black p-[3px] rounded-[11px] hover:to-green-500 duration-300"
      >
        <div class="bg-black w-full h-max px-4 py-2 font-semibold rounded-lg">
          <p class="text-nowrap overflow-hidden overflow-ellipsis">
            {{ todo.title }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
