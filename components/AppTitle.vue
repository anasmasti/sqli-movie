<template>
    <h2 class="text-2xl font-black" v-text="title"></h2>
</template>

<script setup lang="ts">
type titleProps = {
    title: string
}
const { title } = defineProps<titleProps>()
</script>

<style>

</style>