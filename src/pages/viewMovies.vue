<template>
  <div>
    <div class="card-container">
      <Card v-for="(card) in cards" :key="card.id" :id="card.id" :title="card.title" :description="card.description" :url="card.url"
        @delete-card="removeCard" />
    </div>
    <div v-if="!cards.length" style="text-align: center;">
      <p>Não há filmes cadastrados para excluir</p>
    </div>
  </div>
</template>

<script setup>
import Card from "../components/card.vue"
import { ref } from "vue"

const cards = ref(JSON.parse(localStorage.getItem("films")) || [])

const removeCard = (id) => {

  cards.value = cards.value.filter((x) => {
    return x.id !== id;
  });

  localStorage.setItem("films", JSON.stringify(cards.value))
}
</script>
<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 15em);
  justify-content: space-evenly;
  margin-top: 20px;
}
</style>