<template>
  <div>
    <myHeader titulo="Gerenciar Filmes"></myHeader>
    <nav>
      <router-link to="/">Adicionar Filme</router-link> |
      <router-link to="/view">Ver Filmes</router-link> |
      <router-link to="/delete">Excluir Filmes</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import myHeader from "./components/myHeader.vue"
</script>

<style>
* {
  margin: 0%;
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
body {
  min-height: 100vh;
  background-image: linear-gradient(
    75deg,
    hsl(251deg 100% 6%) 0%,
    hsl(277deg 76% 10%) 34%,
    hsl(296deg 59% 11%) 56%,
    hsl(300deg 63% 11%) 72%,
    hsl(291deg 79% 11%) 86%,
    hsl(275deg 100% 13%) 100%
  );
}
nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

nav a {
  text-decoration: none;
  color: white;
  background-color: #900;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.2s;
}

nav a:hover {
  background-color: #ff6b99;
}
</style>
