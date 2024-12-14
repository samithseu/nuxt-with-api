<template>
  <div>
    <Header />
    <div class="defaultContainer">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="css">
.defaultContainer {
  width: min(1200px, calc(100% - 1rem));
  height: max-content;
  margin-inline: auto;
  margin-block: 1.5em;
}
</style>
