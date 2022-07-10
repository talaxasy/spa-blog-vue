<template>
    <h2>Posts:</h2>
    <div class="post" v-for="post in posts">
        <div><b>Title:</b> <span>{{ post.title }}</span></div>
        <div><b>Description:</b>
            {{ " " }}
            <p style="display: inline;">
                {{ post.description }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const { posts = [] } = defineProps<{
    posts: Array<{
        id: number;
        title: string;
        description: string;
    }>;
}>()

</script>

<style lang="scss" scoped>
.post {
    padding: 20px;
    border-radius: 5px;
    border: 5px solid rgb(0, 128, 77);
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}
</style>