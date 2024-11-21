<template>
  <header class="gap">
    <a href="https://www.youtube.com/watch?v=SwG6i-B8ztk"
      ><h1>{{ titulo }}</h1></a
    >
  </header>
  <div class="gap"></div>
</template>

<script setup>
const props = defineProps({
  titulo: String,
})
</script>
<style>
header {
  background-color: rgba(0, 0, 0, 0.35);
  width: 100%;
  position: absolute;
  text-align: center;
  justify-content: center;
  align-items: center;
}

header > h1 {
  height: inherit;
  align-content: space-around;
}
.gap {
  height: 5em;
}
a {
  text-decoration: none;
  cursor: default;
}
</style>
