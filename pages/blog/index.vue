<script setup lang="js">
definePageMeta({
  layout: "default",
});
useHead({
  title: "Blog - JROCH",
});

const { data: blogs } = await useFetch("/api/blogs");
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-green-500 mb-4">Blog</h1>
    <ul class="mt-4">
      <li
        class="border border-green-500 px-4 py-2 rounded-lg mb-4 last:mb-0 duration-200 hover:bg-green-500 hover:text-black text-lg cursor-pointer"
        v-for="blog in blogs"
        :key="blog.id"
      >
        <NuxtLink :to="`/blog/${blog.id}`">{{ blog.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
