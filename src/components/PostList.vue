

<script lang="ts" setup>
import PostItem from "./PostItem.vue";

defineProps<{
    posts: Array<{
        id: number;
        title: string;
        description: string;
    }>;
}>()

defineEmits<{
    (e: 'delete', id: number): void;
}>()

</script>

<template>
    <div class="wrapper" v-if="posts.length > 0">
        <h1>Posts</h1>
        <PostItem v-for="post in posts" :key="post.id" :post="post" @delete="$emit('delete', post.id)" />
    </div>

    <div style="opacity: 0.5" v-else>
        <span>{{ `No posts`.toUpperCase() }}</span>
    </div>

</template>

<style lang="scss" scoped>
.wrapper {
    &>* {
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 50px;
        }
    }
}
</style>