<script setup lang="js"></script>

<template>
  <div
    class="cursor-pointer w-full h-max bg-gradient-to-br from-green-500 from-10% bg-black via-30% to-black p-[3px] rounded-[11px] hover:to-green-500 duration-300"
  >
    <div class="bg-black w-full h-max px-4 py-2 font-semibold rounded-lg">
      <slot />
    </div>
  </div>
</template>
