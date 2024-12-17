<script setup lang="js">
useHead({
  htmlAttrs: {
    lang: "en"
  },
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "color-scheme", content: "only dark" },
    { rel: "shortcut icon", href: "favicon.ico", type: "image/x-icon" },
  ],
});

useSeoMeta({
  charset: 'utf-8',
  title: 'Nuxt with API',
  description: "This website created for testing the Nuxt abilities in creating web apps.",
  ogTitle: 'Nuxt with API',
  ogDescription: "This website created for testing the Nuxt abilities in creating web apps.",
  ogImage: 'cover.webp',
  twitterCard: 'cover.webp',
  twitterTitle: 'Nuxt with API',
  twitterDescription: "This website created for testing the Nuxt abilities in creating web apps.",
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator :height="2" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
