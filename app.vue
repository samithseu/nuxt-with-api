<script setup>
useHead({
  title: "JROCH",
  meta: [
    { charset: "utf-8" },
    { link: "/nuxt.svg", rel: "icon" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "color-scheme", content: "only dark" },
    {
      name: "description",
      content:
        "This website created for testing the Nuxt abilities in creating web apps.",
    },
    {
      property: "og:title",
      content: "JROCH - Nuxt",
    },
    {
      property: "og:description",
      content:
        "This website created for testing the Nuxt abilities in creating web apps.",
    },
    {
      property: "og:image",
      content: "/nuxt.svg",
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
