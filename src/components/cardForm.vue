<template>
  <div class="add">
    <h3>Adicionar Filme</h3>
    <input v-model="title.content" placeholder="Título" class="inputs" />
    <small style="color:red; text-shadow: 0px 0px 45px white;" v-if="!valid && title.errorValue != ''">{{
      title.errorValue
    }}</small>
    <textarea v-model="description.content" placeholder="Descrição" class="inputs"></textarea>
    <small style="color:red; text-shadow: 0px 0px 45px white;" v-if="!valid && description.errorValue != ''">{{
      description.errorValue }}</small>

    <input v-model="url.content" placeholder="Link sobre o filme" class="inputs" />
    <small style="color:red; text-shadow: 0px 0px 45px white;" v-if="!valid && url.errorValue != ''">{{ url.errorValue
      }}</small>

    <button @click="addCard">Cadastrar filme</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue"
const emit = defineEmits()
const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;

const title = ref({
  "content": '',
  "errorValue": '',
})
const description = ref({
  "content": '',
  "errorValue": '',
})
const url = ref({
  "content": '',
  "errorValue": '',
})
const valid = ref(true)

const addCard = () => {
  title.value.content = title.value.content.trim();
  description.value.content = description.value.content.trim();
  url.value.content = url.value.content.trim();
  valid.value = true;

  if (title.value.content.length > 100 || title.value.content.length <= 0) {
    valid.value = false
    title.value.errorValue = "O titulo deve ter no mínimo 1 caractere e no máximo 100 caracteres"
  } else {
    title.value.errorValue = ""
  }


  if (description.value.content.length > 1000 || description.value.content <= 0) {
    valid.value = false
    description.value.errorValue = "A descrição deve ter no mínimo 1 caractere e no máximo 1000 caracteres."
  }


  if (!urlRegex.test(url.value.content)) {
    valid.value = false
    url.value.errorValue = "O link fornecido não é uma URL válida.";
  } else if (url.value.content == "") {
    valid.value = false
    url.value.errorValue = "Não há algum link fornecido"
  } else {
    url.value.errorValue = ""
  }

  

  if (valid.value) {
    emit("card-added", {
      title: title.value.content,
      description: description.value.content,
      url: url.value.content,
    })

    title.value.content = ""
    description.value.content = ""
    url.value.content = ""
    valid.value = true;
    return
  }
}
</script>

<style>
.add {
  color: black;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 40%;
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
