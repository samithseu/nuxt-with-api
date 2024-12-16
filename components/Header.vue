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
    class="w-full h-max sticky top-0 z-50 left-0 backdrop-blur-lg backdrop-brightness-25 shadow-sm shadow-green-500"
  >
    <nav
      class="lg:flex-row lg:max-w-[1200px] lg:mx-auto lg:flex justify-between items-center py-6"
    >
      <NuxtLink
        class="text-3xl text-white font-bold duration-200 hover:text-green-500"
        to="/"
        >JROCH</NuxtLink
      >
      <ul class="flex gap-x-6 *:*:text-lg *:*:font-bold">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLink
            class="duration-200 text-white hover:text-green-500"
            :to="link.path"
            >{{ link.name }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
