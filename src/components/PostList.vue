

<script lang="ts" setup>
import { reactive } from "vue";
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

        <TransitionGroup name="post-list">
            <PostItem v-for="post in posts" :key="post.id" :post="post" @delete="$emit('delete', post.id)" />
        </TransitionGroup>
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

.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.3s ease;
}

.post-list-leave-active {
    position: absolute;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: scale(0.5);

}
</style>