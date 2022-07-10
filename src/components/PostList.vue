<template>
    <div class="wrapper">
        <h1>Posts</h1>
        <div class="post" v-for="post in posts">
            <div><b>Title:</b> <span>{{ post.title }}</span></div>
            <div><b>Description:</b>
                {{ " " }}
                <p style="display: inline;">
                    {{ post.description }}
                </p>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>

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
            margin-bottom: 0;
        }
    }
}

.post {
    padding: 20px;
    border-radius: 5px;
    border: 5px solid rgb(0, 128, 77);

    &:last-child {
        margin-bottom: 50px;
    }
}
</style>