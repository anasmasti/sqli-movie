<template>
    <section class="p-5">
        <AppJumbotron :movie="jumbotronMovie" />
        <div class="mb-6 flex flex-col py-5">
            <AppTitle title="Most Popular" />
            <MostPopular :movies="mostPopularMovies" />
        </div>
        <div class="mb-6 flex flex-col py-5">
            <AppTitle title="All" />
            <div class="mt-5">
                <MovieList :movies="movies" />

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { movieStore } from '@/store/movie'
let store = movieStore()

let movies = reactive(store.getMovies)
let mostPopularMovies = reactive(store.getMostPopularMovies)
let jumbotronMovie = reactive(store.getJumbotronMovie!)

</script>

<style>

</style>