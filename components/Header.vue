<script setup lang="js">
const navLinks = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
  { name: "Achievements", path: "/achievements" },
]
</script>

<template>
  <header
    class="sticky left-0 top-0 z-50 h-max w-full border-b-2 border-green-500 backdrop-blur-md backdrop-brightness-50"
  >
    <nav
      class="container mx-auto max-w-[1200px] px-4 xl:px-0 flex flex-col items-center gap-4 py-6 md:flex-row md:items-center md:justify-between"
    >
      <NuxtLink
        class="text-3xl font-bold text-green-200 duration-300 hover:scale-105 hover:text-green-500"
        to="/"
        >JROCH</NuxtLink
      >
      <ul
        class="flex flex-wrap justify-center gap-4 px-4 *:capitalize md:gap-8 md:px-0"
      >
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLink
            class="text-lg font-semibold duration-200 hover:text-green-500"
            :to="link.path"
            >{{ link.name }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
