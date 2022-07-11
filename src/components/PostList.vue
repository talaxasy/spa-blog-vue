<template>
    <div class="wrapper">
        <h1>Posts</h1>
        <PostItem v-for="post in posts" :post="post" />

    </div>

</template>

<script lang="ts" setup>
import PostItem from "./PostItem.vue";

defineProps<{
    posts: Array<{
        id: number;
        title: string;
        description: string;
    }>;
}>()

</script>

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