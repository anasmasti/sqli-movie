<template>
  <article class="p-10">
    <img :src="movie.cover" :alt="movie.title" class="w-full h-56 object-cover rounded-lg">
    <div class="flex items-center justify-between gap-5">
      <h1 v-text="movie.title" class="text-6xl font-black my-5"></h1>
      <div class="flex items-center gap-3">
        <input type="text" v-model="movieNote" v-if="voteClicked"
          class="border border-yellow-400 w-10 p-2 text-sm rounded-lg shadow-lg shadow-yellow-400">
        <button @click="vote(movie.id)"
          class="bg-black font-black rounded-lg p-2 shadow-md text-white hover:bg-gray-700">
          Vote Now
        </button>
        <div class="bg-yellow-400 font-bold rounded-xl p-2 text-xs">{{ movie.note }}/5</div>
        <div>
          <a @click="addToFav(movie.id)" class="cursor-pointer">
            <i :class="` ${movie.fav ? 'fas' : 'far'}  fa-heart text-red-400`"></i>
          </a>
        </div>
      </div>
    </div>
    <p v-text="movie.description" class="text-gray-400 "></p>

  </article>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/store/movie'
import { Ref } from 'vue';

const store = useMovieStore()
const route = useRoute()

const { id } = route.params

const movie = store.getMovieById(+id)!

let voteClicked: Ref<boolean> = ref(false)
let movieNote: Ref<number> = ref(0)

onMounted(() => {
  movieNote.value = movie.note
})

const addToFav = (id: number) => {
  movie.fav = !movie.fav
  store.editMovieById(id, movie)
}

const vote = (id: number) => {
  voteClicked.value = !voteClicked.value
  if (movieNote.value != movie.note) {
    movie.note = movieNote.value
    store.editMovieNote(id, movie)
  }
}
</script>