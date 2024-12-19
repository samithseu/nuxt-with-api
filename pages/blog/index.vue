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
    <h1 class="text-2xl font-bold text-green-500 mb-4">
      Blog - {{ blogs.length }}
    </h1>
    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <GradientBorder
        class="text-center"
        v-for="blog in blogs"
        :key="blog.id"
        :to="`/blog/${blog.id}`"
        target="_self"
      >
        <p class="text-nowrap overflow-hidden overflow-ellipsis">
          {{ blog.title }}
        </p>
      </GradientBorder>
    </div>
  </div>
</template>
