<template>
  <header>
    <nav class="container">
      <NuxtLink to="/" class="logo">JROCH</NuxtLink>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/services">Services</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="css" scoped>
header {
  width: 100%;
  height: max-content;
  border-bottom: 1px solid var(--main-clr);
  position: sticky;
  top: 0;
  left: 0;

  z-index: 99;
  backdrop-filter: blur(1rem) brightness(50%);
}
.container {
  width: min(1200px, calc(100% - 1rem));
  height: max-content;
  margin-inline: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.5rem;
}

.container > a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--main-clr);
}
.container ul {
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 1.5rem;

  & li a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    transition: 250ms ease-in-out;
    &:hover {
      color: var(--main-clr);
    }
  }
}
</style>
