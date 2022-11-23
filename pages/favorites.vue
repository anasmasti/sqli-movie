<template>
    <section class="p-6">
        <AppTitle title="Favorite Movies" />
        <div class="mt-5">
            <MovieList v-if="favMovies.length" :movies="favMovies" />
        <div v-else class="text-gray-400">There's no movie in your favorite list.</div>
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