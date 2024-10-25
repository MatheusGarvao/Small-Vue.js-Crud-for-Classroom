<template>
  <div class="add">
    <h3>Adicionar Filme</h3>
    <input v-model="title" placeholder="Título" />
    <textarea v-model="description" placeholder="Descrição"></textarea>
       <input v-model="url" placeholder="Link" />
    <button @click="addCard">Cadastrar filme</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits();

const title = ref("");
const description = ref("");
const url = ref("");

const addCard = () => {
  if (title.value && description.value) {
    emit("card-added", { title: title.value, description: description.value, url: url.value });
    title.value = "";
    description.value = "";
    url.value = "";
  }
};
</script>

<style>
.add {
  color: black;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  gap: 20px;
}
input,
textarea,
button {
  color: black;
}
</style>
