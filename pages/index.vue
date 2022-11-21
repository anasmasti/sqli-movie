<template>
    <h1>{{ movie }}</h1>
</template>

<script setup lang="ts">
import { movieStore } from '@/store/movie'
let store = movieStore()

let movie = reactive(store.getMovies)
</script>

<style>

</style>