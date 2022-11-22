<template>
    <section class="p-6">
        <AppTitle title="Favorite Movies" />
        <div class="mt-5">
            <MovieList :movies="favMovies" :rendred="false" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/store/movie'
const store = useMovieStore()

let favMovies = ref(store.getFavMovies)
</script>

<style>

</style>