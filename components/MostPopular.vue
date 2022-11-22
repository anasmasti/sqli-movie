<template>
  <MovieList :movies="movies" :rendred="false" />
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