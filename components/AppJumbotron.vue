<template>
	<NuxtLink :to="`/${movie.id}`">
		<div class="bg-black text-white h-96 rounded-lg flex justify-between items-center p-10">
			<div class="flex flex-col gap-3">
				<p>
					<span class="bg-yellow-400 font-bold rounded-xl p-2 text-xs text-black">{{ movie.note }}/5</span> |
					Movie
				</p>
				<h1 v-text="movie.title" class="text-3xl font-black"></h1>
				<p class="text-gray-400 w-2/3" v-text="truncate(movie.description)"></p>
			</div>
			<div class="w-1/2">
				<img class="h-80 w-full rounded-lg object-cover" :src="movie.cover" alt="">
			</div>
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
import IMovie from "@/models/IMovie"

type jumbotronProps = {
	movie: IMovie
}
const { movie } = defineProps<jumbotronProps>()
</script>

<style>

</style>