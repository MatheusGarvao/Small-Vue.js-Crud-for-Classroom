<template>
  <div>
    <div class="card-container">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :description="card.description"
        :url="card.url"
      />
    </div>
    <div v-if="!cards.length"><p>Não há filmes cadastrados</p></div>
  </div>
</template>

<script setup>
import Card from "../components/card.vue"
import { ref } from "vue"

const cards = ref(JSON.parse(localStorage.getItem("films")) || [])
</script>

<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 15em);
  justify-content: space-evenly;
  margin-top: 20px;
}
</style>
