<script setup lang="js">
const { data: certs } = await useFetch("/api/certs");

definePageMeta({
  layout: "default",
});
useHead({
  title: "Achievements - JROCH",
});
</script>

<template>
  <div>
    <h1 class="text-2xl text-green-500 font-bold mb-4">Achievements Page!</h1>
    <ol class="list-decimal list-inside">
      <li class="text-xl mb-2" v-for="c in certs" :key="c.id">
        {{ c.subject }}
      </li>
    </ol>
  </div>
</template>
