

<script setup lang="ts">
import redaxios from 'redaxios';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const state = reactive<{
    post: { title: string, description: string } | null;
    loading: boolean;
}>({
    post: null,
    loading: false,
});

onMounted(async () => {
    await redaxios(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(({ data }) => state.post = { title: (data as any).title, description: (data as any).body })
        .catch(() => router.push('/404'));
    state.loading = false;
})

</script>

<template>
    <div v-if="!state.loading">
        <h1>{{ state.post?.title }}</h1>
        <br>
        <p>{{ state.post?.description }}</p>
    </div>
    <div v-else>
        loading...
    </div>
</template>

<style scoped>
</style>