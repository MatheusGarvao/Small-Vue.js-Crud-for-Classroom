<template>
  <div class="card">
    <div class="delete" @click="deleteCard">X</div>
    <div class="centralizar">
      <router-link
        :to="{
          name: 'MovieDetails',
          params: { id: id },
          state: { movie: { id, title, description, url } },
        }"
        class="card-link"
      >
        <h2>{{ title }}</h2>
      </router-link>
      <p>{{ description }}</p>
      <a :href="url" target="_blank">Site do Filme</a>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
const props = defineProps({
  id: Number,
  title: String,
  description: String,
  url: String,
})
const emit = defineEmits()

const description = ref("")
const title = ref("")
const url = ref("")

const deleteCard = () => {
  emit("delete-card", props.id)
}

onMounted(() => {
  description.value =
    props.description.trim().length > 61
      ? props.description.slice(0, 61) + "..."
      : props.description

  if (props.title) {
    title.value =
      props.title.trim().length > 11
        ? props.title.slice(0, 11) + "..."
        : props.title
  } else {
    title.value = "Não tem título"
  }

  url.value = props.url
})
</script>
<style>
.card {
  height: 120px;
  margin-top: 10%;
  border-radius: 10px;
  /* border-radius: 50% 50% 50% 50% / 24% 24% 76% 76%; */
  background-image: linear-gradient(
    45deg,
    hsl(248deg 100% 2%) 0%,
    hsl(253deg 76% 9%) 25%,
    hsl(238deg 72% 14%) 46%,
    hsl(233deg 70% 16%) 65%,
    hsl(229deg 100% 22%) 82%,
    hsl(243deg 98% 36%) 100%
  );
  border: 2px solid #ff6b99;
  margin-bottom: 30px;
}

.card > div {
  text-align: center;
  overflow: hidden;
  text-transform: uppercase;
}

.card > div p {
  margin-top: 0.5em;
}

.centralizar {
  justify-content: center;
  align-content: center;
}

.centralizar a {
  transition: 0.3s;
  text-decoration: none;
}

.delete {
  position: absolute;
  margin-left: 210px;
  color: red;
  cursor: pointer;
  font-size: 1.56rem;
  justify-items: end;
  text-align: right;
  transition: 0.3s;
}

.delete:hover {
  font-size: 2rem;
}

.centralizar a:hover {
  font-size: 1.5rem;
}

.card p {
  pointer-events: none;
}
h2 {
  display: inline-block;
  cursor: pointer;
}
a {
  cursor: pointer;
}
</style>
