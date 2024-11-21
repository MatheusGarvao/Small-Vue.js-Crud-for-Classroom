import "./assets/main.css"
import { createRouter, createWebHistory } from "vue-router"
import { createApp } from "vue"
import App from "./App.vue"
import AddMovieView from "./pages/addMovies.vue"
import ViewMoviesView from "./pages/viewMovies.vue"
import viewMovie from "./pages/viewMovie.vue"

const routes = [
  { path: "/", name: "AddMovie", component: AddMovieView },
  { path: "/view", name: "ViewMovies", component: ViewMoviesView },
  { path: "/view/:id", name: "MovieDetails", component: viewMovie }, 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App)
app.use(router)
app.mount("#app")
