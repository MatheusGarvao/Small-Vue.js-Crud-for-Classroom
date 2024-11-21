import "./assets/main.css"
import { createRouter, createWebHistory } from "vue-router"
import { createApp } from "vue"
import App from "./App.vue"
import AddMovieView from "./components/AddMovieView.vue"
import ViewMoviesView from "./components/ViewMoviesView.vue"
import DeleteMoviesView from "./components/DeleteMoviesView.vue"

const routes = [
  { path: "/", name: "AddMovie", component: AddMovieView },
  { path: "/view", name: "ViewMovies", component: ViewMoviesView },
  { path: "/delete", name: "DeleteMovies", component: DeleteMoviesView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App)
app.use(router)
app.mount("#app")
