<template>
  <header class="gap">
    <h1>{{ titulo }}</h1>
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
}

header > h1 {
  height: inherit;
  align-content: space-around;
}
.gap {
  height: 5em;
}
</style>
