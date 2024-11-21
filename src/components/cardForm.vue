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
import  TitleInput  from './validations/TitleInput.vue';
import DescriptionInput from './validations/DescriptionInput.vue';
import  UrlInput  from './validations/UrlInput.vue';

const emit = defineEmits()

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
  valid.value = true;
  title.value.content = title.value.content.trim();
  description.value.content = description.value.content.trim();
  url.value.content = url.value.content.trim();
  const titleResult = TitleInput(title.value.content);
  title.value.errorValue = titleResult.errorValue;
  if (!titleResult.valid) valid.value = false;

  const descriptionResult = DescriptionInput(description.value.content);
  description.value.errorValue = descriptionResult.errorValue;
  if (!descriptionResult.valid) valid.value = false;

  const urlResult = UrlInput(url.value.content);
  url.value.errorValue = urlResult.errorValue;
  if (!urlResult.valid) valid.value = false;

  if (valid.value) {
    emit("card-added", {
      id: 0,
      title: title.value.content,
      description: description.value.content,
      url: url.value.content,
    });

    title.value.content = "";
    title.value.errorValue = "";
    description.value.content = "";
    description.value.errorValue = "";
    url.value.content = "";
    url.value.errorValue = "";
  }
};
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
