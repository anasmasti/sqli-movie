<template>
    <div class="flex flex-wrap gap-5 lg:gap-8 justify-start items-start">
        <Movie v-for="movie in movies" :key="movie.id" :movie="movie" />
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