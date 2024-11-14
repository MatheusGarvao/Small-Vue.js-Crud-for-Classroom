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
  margin: auto;
  padding: 50px;
  border-radius: 5% 5% 5% 5% / 15% 15% 15% 15%;
  background-image: linear-gradient(
    0deg,
    hsl(0 0% 85%) 0%,
    hsl(0 0% 95%) 100%
  );
  backdrop-filter: blur(1px);
  border: 2px solid #657094;
}

.card > div {
  width: auto;
  margin: auto;
  overflow: hidden;
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
