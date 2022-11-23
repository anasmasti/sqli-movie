<template>
    <div class="relative">
        <SearchInput @input-value="handleInputValue" />
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
    if (inputValue != "") {
        filtredMovies.value.push(...store.getMoviesByTitle(inputValue)!)
        show.value = true
    }

}
</script>

<style>

</style>