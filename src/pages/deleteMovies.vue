<template>
  <div>
    <div class="card-container">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :description="card.description"
        :url="card.url"
        @delete-card="removeCard(index)"
      />
    </div>
    <div v-if="!cards.length">
      <p>Não há filmes cadastrados para excluir</p>
    </div>
  </div>
</template>

<script setup>
import Card from "../components/card.vue"
import { ref } from "vue"

const cards = ref(JSON.parse(localStorage.getItem("films")) || [])

const removeCard = (index) => {
  cards.value.splice(index, 1)
  localStorage.setItem("films", JSON.stringify(cards.value))
}
</script>
