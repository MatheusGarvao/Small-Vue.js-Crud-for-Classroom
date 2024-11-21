<script setup>
import Card from "./components/card.vue"
import CardForm from "./components/cardForm.vue"
import { ref } from "vue"
const cards = ref([])
var lastID = 0
const addCard = (card) => {
  cards.value.push([card, lastID])
  lastID++
}
const removeCard = (id) => {
  cards.value = cards.value.filter((x) => x[1] !== id)
  console.log(cards.value)
}
</script>
<template>
  <div class="card-container">
    <Card
      v-for="card in cards"
      :key="card[1]"
      :id="card[1]"
      :title="card[0].title"
      :description="card[0].description"
      :url="card[0].url"
      @delete-card="removeCard"
    />
  </div>
  <div v-if="!cards.length"><p>Não há filmes cadastrados</p></div>
</template>
<style scoped></style>
