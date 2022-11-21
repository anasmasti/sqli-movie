<template>
    <MovieList :movies="movies" />
</template>

<script setup lang="ts">
import { movieStore } from '@/store/movie'
let store = movieStore()

let movies = reactive(store.getMovies)
</script>

<style>

</style>