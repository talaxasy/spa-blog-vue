

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

const id = computed(() => {
    return route.params.id;
})

</script>

<template>
    <div>
        {{ $route.params.id }}
    </div>
</template>

<style scoped>
</style>