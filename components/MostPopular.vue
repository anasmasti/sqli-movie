<template>
  <div class="flex flex-wrap gap-3">
    <MovieList :movies="movies" :rendred="false" />
  </div>
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