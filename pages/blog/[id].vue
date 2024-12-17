<script setup lang="js">
const route = useRoute();
definePageMeta({
  layout: "default",
});
useHead({
  titleTemplate: `Blog ${route.params.id} - %s`,
});

const { data: blog } = await useFetch(`/api/blogs/${route.params.id}`);
</script>

<template>
  <div>
    <h1 class="text-2xl text-green-500 font-bold mb-4">
      Blog {{ route.params.id }} - {{ blog.title }}
    </h1>
    <p lang="en">{{ blog.body }}</p>
  </div>
</template>
