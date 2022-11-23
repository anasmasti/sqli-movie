<template>
  <article class="p-10">
    <img :src="movie.cover" :alt="movie.title" class="w-full h-56 object-cover rounded-lg">
    <div class="flex items-center justify-between gap-5">
      <h1 v-text="movie.title" class="text-6xl font-black my-5"></h1>
      <div class="flex items-center gap-3">
        <div class="bg-yellow-400 font-bold rounded-xl p-2 text-xs">{{ movie.note }}/5</div>
        <div>
          <a @click="addToFav" class="cursor-pointer">
            <i :class="` ${movie.fav ? 'fas' : 'far'}  fa-heart text-red-400`"></i>
          </a>
        </div>
      </div>
    </div>
    <p v-text="movie.description" class="text-gray-400 "></p>

  </article>
</template>

<script setup>
import { useMovieStore } from '@/store/movie'

const store = useMovieStore()
const route = useRoute()

const { id } = route.params

const movie = ref(store.getMovieById(id))
</script>