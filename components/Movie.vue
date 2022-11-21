<template>
    <h1>{{ movie.title }}</h1>
</template>

<script setup lang="ts">
import IMovie from '@/models/IMovie'

type movieProps = {
    movie: IMovie
}
const { movie } = defineProps<movieProps>()
</script>

<style>

</style>