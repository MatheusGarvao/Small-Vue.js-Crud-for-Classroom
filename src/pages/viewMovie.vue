<template>
    <div class="movie-details">
      <div v-if="movie">
        <h1>Detalhes do Filme</h1>
        <div class="movie-info">
          <p><strong>Título:</strong> {{ movie.title }}</p>
          <p><strong>Descrição:</strong> {{ movie.description }}</p>
          <p>
            <strong>Link: </strong>
            <a :href="movie.url" target="_blank">{{ movie.url }}</a>
          </p>
        </div>
  
        <div class="actions">
          <button class="btn" @click="goBack">Voltar</button>
          <button class="btn" @click="editMovie">Editar</button>
        </div>
  
        <div v-if="isEditing" class="edit-form">
          <h2>Editar Filme</h2>
          <form @submit.prevent="saveChanges">
            <div class="form-group">
              <label for="title">Título:</label>
              <input id="title" type="text" v-model="editedMovie.title" class="form-input" />
              <small class="error" v-if="title.errorValue !== ''">{{ title.errorValue }}</small>
            </div>
            <div class="form-group">
              <label for="description">Descrição:</label>
              <textarea id="description" v-model="editedMovie.description" class="form-input"></textarea>
              <small class="error" v-if="description.errorValue !== ''">{{ description.errorValue }}</small>
            </div>
            <div class="form-group">
              <label for="url">URL:</label>
              <input id="url" type="text" v-model="editedMovie.url" class="form-input" />
              <small class="error" v-if="url.errorValue !== ''">{{ url.errorValue }}</small>
            </div>
            <div class="form-actions">
              <button type="submit" class="btn primary">Salvar</button>
              <button type="button" class="btn secondary" @click="cancelEdit">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
  
      <div v-else>
        <p>Filme não encontrado.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { titleInput } from "../components/validations/TitleInput.vue";
  import { descriptionInput } from "../components/validations/DescriptionInput.vue";
  import { urlInput } from "../components/validations/UrlInput.vue";
  
  const route = useRoute();
  const router = useRouter();
  
  const movie = ref(null);
  const isEditing = ref(false);
  const editedMovie = ref({});
  const valid = ref(true);

  const title = ref({ errorValue: "" });
  const description = ref({ errorValue: "" });
  const url = ref({ errorValue: "" });
  
  onMounted(() => {
    if (route.state?.movie) {
      movie.value = route.state.movie;
    } else {
      const storedMovies = JSON.parse(localStorage.getItem("films")) || [];
      movie.value = storedMovies.find((film) => film.id === Number(route.params.id));
    }
  
    if (!movie.value) {
      alert("Filme não encontrado!");
    }
  });
  
  const goBack = () => {
    router.push("/view");
  };
  
  const editMovie = () => {
    isEditing.value = true;
    editedMovie.value = { ...movie.value };
  };
  
  const cancelEdit = () => {
    isEditing.value = false;
  };
  
  const saveChanges = () => {
    valid.value = true;
    editedMovie.value.title = editedMovie.value.title.trim()
    editedMovie.value.description = editedMovie.value.description.trim()
    editedMovie.value.url = editedMovie.value.url.trim()
    
    const titleResult = titleInput(editedMovie.value.title);
    title.value.errorValue = titleResult.errorValue;
    if (!titleResult.valid) valid.value = false;
  
    const descriptionResult = descriptionInput(editedMovie.value.description);
    description.value.errorValue = descriptionResult.errorValue;
    if (!descriptionResult.valid) valid.value = false;
  
    const urlResult = urlInput(editedMovie.value.url);
    url.value.errorValue = urlResult.errorValue;
    if (!urlResult.valid) valid.value = false;
  
    if (valid.value) {
      const storedMovies = JSON.parse(localStorage.getItem("films")) || [];
      const movieIndex = storedMovies.findIndex((film) => film.id === movie.value.id);
      if (movieIndex !== -1) {
        storedMovies[movieIndex] = { ...editedMovie.value, id: movie.value.id };
        localStorage.setItem("films", JSON.stringify(storedMovies));
        movie.value = { ...editedMovie.value };
        isEditing.value = false;
        alert("Filme atualizado com sucesso!");
      } else {
        alert("Erro ao salvar as alterações.");
      }
    }
  };
</script>

<style>
.movie-details {
   
  max-width: 800px;
  margin: 0 auto;
  margin-top: 5px;
  padding: 20px;
  color: #fff;
  background-color: #2c2c54;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.movie-info p {
  margin: 5px 0;
  line-height: 1.5;
}

.actions {
  margin-top: 20px;
}

.actions .btn {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.actions .btn.primary {
  background-color: #e84118;
  color: #fff;
}

.actions .btn.secondary {
  background-color: #7f8fa6;
  color: #fff;
}

.edit-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.form-input:focus {
  border-color: #e84118;
  outline: none;
  box-shadow: 0 0 5px rgba(232, 65, 24, 0.8);
}

.error {
  color: #e84118;
  font-size: 0.9rem;
}

.form-actions {
  margin-top: 20px;
}

.form-actions .btn {
  padding: 10px 15px;
  margin-right: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
}

.form-actions .btn.primary {
  background-color: #e84118;
  color: white;
}

.form-actions .btn.secondary {
  background-color: #7f8fa6;
  color: white;
}
</style>