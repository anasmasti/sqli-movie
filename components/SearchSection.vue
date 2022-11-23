<template>
    <div class="relative">
        <SearchInput @input-value="handleInputValue" />
        <button class="bg-black text-gray-500 border border-gray-500 p-0.5 rounded-r-lg px-2 font-black">
            <i class="far fa-search"></i>
        </button>
        <SearchResult :movies="filtredMovies" :show="show" />
    </div>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/store/movie'
import { Ref } from 'vue';
import IMovie from '~~/models/IMovie';


const store = useMovieStore()
let filtredMovies: Ref<IMovie[]> = ref([])
let show: Ref<boolean> = ref(false)

const handleInputValue = (inputValue: string) => {
    filtredMovies.value = []
    if (inputValue != "") {
        filtredMovies.value.push(...store.getMoviesByTitle(inputValue)!)
        show.value = true
    } else {
        show.value = false
    }
}
</script>

<style>

</style>