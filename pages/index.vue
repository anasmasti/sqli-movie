<template>
    <section class="p-5">
        <AppJumbotron :movie="jumbotronMovie" />
        <div class="mb-6 flex flex-col py-5">
            <AppTitle title="Most Popular" />
            <MostPopular :movies="mostPopularMovies" :rendred="false" />
        </div>
        <div class="mb-6 flex flex-col py-5">
            <AppTitle title="All" />
            <MovieList :movies="movies" :rendred="true" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/store/movie'
const store = useMovieStore()

let movies = ref(store.getMovies)
let mostPopularMovies = ref(store.getMostPopularMovies)
let jumbotronMovie = ref(store.getJumbotronMovie!)
</script>

<style>

</style>