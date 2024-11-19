<template>
  <div class="add">
    <h3>Adicionar Filme</h3>
    <input v-model="title" placeholder="Título" class="inputs" />
    <textarea
      v-model="description"
      placeholder="Descrição"
      class="inputs"
    ></textarea>
    <input v-model="url" placeholder="Link" class="inputs" />
    <button @click="addCard">Cadastrar filme</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue"

const emit = defineEmits()

const title = ref("")
const description = ref("")
const url = ref("")

const addCard = () => {
  if (title.value && description.value) {
    emit("card-added", {
      title: title.value,
      description: description.value,
      url: url.value,
    })
    title.value = ""
    description.value = ""
    url.value = ""
  }
}
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
  cursor: pointer;
  border-radius: 10px;
  font-size: large;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.1s;
}
input:hover,
textarea:hover,
button:hover {
  outline: solid #900;
  background-color: #c7c7c7;
  font-size: 1.5rem;
}
.inputs {
  border-radius: 10px;
  font-size: 1.25rem;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  cursor: text;
}
</style>
