<script setup>
useHead({
  title: "JROCH",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { rel: "shortcut icon", href: "/nuxt.svg", type: "image/x-icon" },
    { name: "color-scheme", content: "only dark" },
    {
      name: "description",
      content:
        "This website created for testing the Nuxt abilities in creating web apps.",
    },
    {
      property: "og:title",
      content: "JROCH - Nuxt w/ API",
    },
    {
      property: "og:description",
      content:
        "This website created for testing the Nuxt abilities in creating web apps.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: "/cover.jpg",
    },
    {
      property: "og:url",
      content: "https://jroch-nuxt.netlify.app",
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
