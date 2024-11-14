<template>
  <div class="card">
    <div>
      <h2>{{ title }}</h2>
      <p>
        {{ description }}
      </p>
      <a :href="url" target="_blank">Veja mais aqui</a>
    </div>
    <div class="delete" @click="deleteCard">X</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  id: Number,
  title: String,
  description: String,
  url: String,
});
const emit = defineEmits();

const description = ref("");
const title = ref("");
const url = ref("");

const deleteCard = () => {
  emit("delete-card", props.id);
};

onMounted(() => {
  if (props.description) {
    description.value =
      props.description.trim().length > 61
        ? props.description.slice(0, 61) + "..."
        : props.description;
  } else {
    description.value = "Não há descrição cadastrada para este filme";
  }

  if (props.title) {
    title.value =
      props.title.trim().length > 11 ? props.title.slice(0, 11) + "..." : props.title;
  } else {
    title.value = "Não tem título";
  }

  url.value = props.url;
});
</script>
<style>
.card {
  height: 15em;
  margin-top: 10%;
  border-radius: 50% 50% 50% 50% / 24% 24% 76% 76%;
  background-image: linear-gradient(
    45deg,
    hsl(248deg 100% 2%) 0%,
    hsl(253deg 76% 9%) 25%,
    hsl(238deg 72% 14%) 46%,
    hsl(233deg 70% 16%) 65%,
    hsl(229deg 100% 22%) 82%,
    hsl(243deg 98% 36%) 100%
  );
  backdrop-filter: blur(1px);
  border: 2px solid #ff6b99;
}

.card > div {
  width: 10em;
  margin-top: 2em;
  overflow: hidden;
  margin-left: 20%;
  text-align: center;
}

.card > div p {
  margin-top: 0.5em;
}

.delete {
  color: red;
  cursor: pointer;
}
</style>
