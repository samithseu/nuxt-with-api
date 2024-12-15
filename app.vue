<script setup>
useHead({
  title: "JROCH",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "color-scheme", content: "only dark" },
    {
      hid: "description",
      name: "description",
      content: "JROCH is a web development company based in the Philippines.",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "JROCH",
    },
    {
      hid: "og:description",
      property: "og:description",
      content: "JROCH is a web development company based in the Philippines.",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator class="w-full h-[2px]" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
