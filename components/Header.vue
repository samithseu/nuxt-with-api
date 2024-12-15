<template>
  <header
    class="w-full h-max border-b-2 border-green-500 sticky top-0 z-50 left-0 backdrop-blur-md backdrop-brightness-50"
  >
    <nav
      class="lg:flex-row lg:max-w-[1200px] lg:mx-auto lg:flex justify-between items-center py-4"
    >
      <NuxtLink
        class="text-3xl text-white font-bold duration-200 hover:text-green-500"
        to="/"
        >JROCH</NuxtLink
      >
      <ul class="flex gap-x-6 *:*:text-lg *:*:font-bold">
        <li>
          <NuxtLink
            class="duration-200 text-white hover:text-green-500"
            to="/about"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="duration-200 text-white hover:text-green-500"
            to="/contact"
            >Contact</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="duration-200 text-white hover:text-green-500"
            to="/blog"
            >Blog</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="duration-200 text-white hover:text-green-500"
            to="/portfolio"
            >Portfolio</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
