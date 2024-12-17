<script setup lang="js">
definePageMeta({
  layout: "default",
});
useHead({
  titleTemplate: "Blog - %s",
});

const { data: blogs } = await useFetch("/api/blogs");
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-green-500 mb-4">Blog</h1>
    <ul class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li
        class="w-full h-max text-nowrap border border-green-500 py-4 px-4 rounded-lg duration-300 hover:bg-green-500 hover:text-black"
        v-for="blog in blogs"
        :key="blog.id"
      >
        <NuxtLink
          class="grid w-full h-max overflow-hidden overflow-ellipsis"
          :to="`/blog/${blog.id}`"
          >{{ blog.title }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
