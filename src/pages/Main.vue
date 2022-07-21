<script setup lang="ts">
import { store } from '@/store';

</script>


<template>
    <div>
        <h1>Main page</h1>
        <button @click="store.app().increment()"></button>
        <div>{{ store.app().counter }}</div>
    </div>
</template>

<style scoped>
</style>