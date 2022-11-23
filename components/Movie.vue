<template>
     <NuxtLink :to="`/${movie.id}`">
    <div class="py-3 sm:max-w-xl sm:mx-auto">
        <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
            <div class="h-48 overflow-visible w-1/2">
                <img class="rounded-3xl shadow-lg" :src="movie.cover" alt="">
            </div>
            <div class="flex flex-col w-1/2 space-y-4">
                <div class="flex justify-between items-start">
                    <h2 class="text-3xl font-bold">{{ movie.title }}</h2>
                    <div class="flex items-center gap-2">
                        <div class="bg-yellow-400 font-bold rounded-xl p-2 text-xs">{{ movie.note }}/5</div>
                        <div v-if="rendred">
                            <a @click="addToFav" class="cursor-pointer">
                                <i :class="` ${movie.fav ? 'fas' : 'far'}  fa-heart text-red-400`"></i>
                            </a>
                        </div>
                    </div>

                </div>
                <div>
                    <div class="text-sm text-gray-400">Movie</div>
                    <div class="text-lg text-gray-800" v-text="movie.release"></div>
                </div>
                <p class=" text-gray-400 max-h-40 overflow-y-hidden" v-text="truncate(movie.description)"></p>
            </div>
        </div>
    </div>
</NuxtLink>
</template>

<script setup lang="ts">
import IMovie from '@/models/IMovie'
import { useMovieStore } from '@/store/movie'

const store = useMovieStore()
type movieProps = {
    movie: IMovie,
    rendred: boolean
}
const { movie } = defineProps<movieProps>()

const addToFav = () => {
    let favMovie = { ...movie }
    favMovie.fav = true
    store.editMovieById(favMovie.id, favMovie)
}
</script>

<style>
</style>