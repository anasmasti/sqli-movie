<template>
    <input v-model="inputValue" @change="getInputValue" type="text" class="bg-gray-500 rounded-lg p-1 px-3"
        placeholder="Search..">
</template>

<script setup lang="ts">
import { Ref } from 'vue';

const emit = defineEmits<{
    (e: 'input-value', inputValue: string): void
}>()

let inputValue: Ref<string> = ref("")

const getInputValue = () => {
    emit("input-value", inputValue.value)
}
</script>

<style>

</style>