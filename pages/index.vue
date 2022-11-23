<template>
    <section class="p-5">
        <AppJumbotron :movie="jumbotronMovie" />
        <div class="mb-6 flex flex-col py-5">
            <AppTitle title="Most Popular" />
            <MostPopular :movies="mostPopularMovies" />
        </div>
        <div class="mb-6 flex flex-col py-5">
            <AppTitle title="All" />
            <MovieList :movies="movies" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/store/movie'
const store = useMovieStore()

let movies = store.getMovies
let mostPopularMovies = store.getMostPopularMovies
let jumbotronMovie = store.getJumbotronMovie!

</script>

<style>

</style>