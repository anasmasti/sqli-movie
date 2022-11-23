<template>
  <nav class="p-4 flex justify-between bg-black text-white">
    <div class="text-xl">
      <NuxtLink to="/">
        <span class="logo mr-1">SQLI</span><span>Movies</span>
      </NuxtLink>
    </div>
    <SearchSection />
    <div>
      <NuxtLink to="/favorites" class="flex items-centers justify-center gap-1">
        <span v-text="favMoviesCount"></span>
        <span><i class="far fa-heart"></i></span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/store/movie'

const store = useMovieStore()
const favMoviesCount = store.getFavMoviesCount
</script>

<style>

</style>