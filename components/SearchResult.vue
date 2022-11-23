<template>
  <div v-if="movies.length && show" class="absolute mt-2 ml-0 w-full focus-within:bg-slate-800 p-5 bg-white text-black rounded-lg shadow-md">
    <div class="flex gap-2 mt-2" v-for="movie in movies" :key="movie.id">
      <img class="w-7 h-7 rounded-lg object-cover " :src="movie.cover" :alt="movie.title">
      <NuxtLink :to="`/${movie.id}`">
        <h3 class="font-black hover:text-gray-500 cursor-pointer" v-text="movie.title"></h3>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import IMovie from "~~/models/IMovie";

type searchResultProps = {
  movies: IMovie[],
  show: boolean
}
const { movies, show } = defineProps<searchResultProps>()
</script>

<style>

</style>