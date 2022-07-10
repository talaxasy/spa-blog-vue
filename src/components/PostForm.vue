<template>
    <!--  @submit.prevent="createPost" -->
    <form class="form">
        <h1>Create post</h1>
        <input required v-bind:value="state.title" @input="state.title = ($event.target as HTMLInputElement).value"
            type="text" placeholder="Title">
        <textarea required v-bind:value="state.description"
            @input="state.description = ($event.target as HTMLInputElement).value" type="text"
            placeholder="Description" />
        <button type="submit">Create</button>
    </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const state = reactive({
    title: '',
    description: '',
});

</script>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    width: 500px;

    &>* {
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    padding: 20px 0;
}
</style>