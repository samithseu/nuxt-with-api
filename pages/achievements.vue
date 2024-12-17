<script setup lang="js">
const { data: certs } = await useFetch("/api/certs");

definePageMeta({
  layout: "default",
});
useHead({
  titleTemplate: "Achievements - %s",
});
</script>

<template>
  <div>
    <h1 class="text-2xl text-green-500 font-bold mb-4">Achievements Page!</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
      <GradientBorder class="text-center" v-for="c in certs" :key="c.id">
        <p>{{ c.subject }}</p>
      </GradientBorder>
    </div>
  </div>
</template>
