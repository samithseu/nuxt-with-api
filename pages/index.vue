<template>
  <div>
    <Hero />
  </div>
</template>
<style>
:root {
  --main-clr: #00dc82;
}
@layer reset,styling,utils;
@layer reset {
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-inline: 0;
    margin-block: 0;
  }
  html {
    font-family: "Inter", sans-serif;
    color-scheme: only dark;
  }
  body {
    min-height: 100dvh;
  }
  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }
}
@layer styling {
}
@layer utils {
}
</style>
