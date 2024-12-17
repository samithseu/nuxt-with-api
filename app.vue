<script setup lang="js">
useHead({
  title: "Nuxt with API",
  meta: [
    { charset: "UTF-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "color-scheme", content: "only dark" },
    { rel: "shortcut icon", href: "favicon.ico", type: "image/x-icon" },
    {
      name: "description",
      content:
        "This website created for testing the Nuxt abilities in creating web apps.",
    },
    {
      property: "og:title",
      content: "JROCH - Nuxt with API",
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
      content: "cover.webp",
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
    <NuxtLoadingIndicator :height="2" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
