<template>
    <Movie v-for="movie in movies" :key="movie.id" :movie="movie" />
</template>

<script setup lang="ts">
import IMovie from '@/models/IMovie'

type movieListProps = {
    movies: IMovie[]
}
const { movies } = defineProps<movieListProps>()
</script>

<style>

</style>