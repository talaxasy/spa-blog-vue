

<script setup lang="ts">
import { reactive, watch } from 'vue';

const emit = defineEmits<{
    (e: 'create', post: { id: number, title: string, description: string }): void
}>();

const state = reactive({
    title: '',
    description: '',
});

const createPost = () => {
    emit('create', {
        id: Date.now(),
        title: state.title,
        description: state.description,
    })
    state.description = '';
    state.title = '';
}
</script>

<template>
    <form class="form" @submit.prevent="createPost">
        <h1>Create post</h1>
        <gen-input required v-model="state.title" type="text" placeholder="Title" />
        <gen-textarea required v-model="state.description" type="text" placeholder="Description" />
        <gen-button type="submit">Create</gen-button>
    </form>
</template>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;

    &>* {
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>