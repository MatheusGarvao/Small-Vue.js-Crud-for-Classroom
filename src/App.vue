<template>
  <myHeader titulo="Filmes"></myHeader>

  <main>
    <CardForm @card-added="addCard" />
    <div class="main">
      <div class="card-container">
        <Card
          v-for="(card, index) in cards"
          :key="index"
          :title="card.title"
          :description="card.description"
          :url="card.url"
          @delete-card="removeCard"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import myHeader from "./components/myHeader.vue"
import Card from "./components/card.vue"
import CardForm from "./components/cardForm.vue"
import { ref } from "vue"

const cards = ref([])

const addCard = (card) => {
  cards.value.push(card)
}
const removeCard = (title) => {
  cards.value = cards.value.filter((card) => card.title !== title)
}
</script>

<style>
* {
  margin: 0px;
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

body {
  height: 100%;
  background-image: linear-gradient(
    75deg,
    hsl(251deg 100% 6%) 0%,
    hsl(277deg 76% 10%) 34%,
    hsl(296deg 59% 11%) 56%,
    hsl(300deg 63% 11%) 72%,
    hsl(291deg 79% 11%) 86%,
    hsl(275deg 100% 13%) 100%
  );
}

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 15em);
  justify-content: space-evenly;
}
</style>
