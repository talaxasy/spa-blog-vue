
<script setup lang="ts">
import { reactive } from 'vue';
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';

type TState = {
  posts: Array<{
    id: number;
    title: string;
    description: string;
  }>;
  dialogOpen: boolean;
}

const state = reactive<TState>({
  posts: [{
    id: 1, title: 'abobus', description: 'text'
  },
  {
    id: 2, title: 'levus', description: 'text text 31323'
  },
  {
    id: 3, title: 'deianus', description: 'lalallalalalal'
  }],
  dialogOpen: false,
});
</script>




<template>
  <main class="main">
    <h1 style="margin-bottom: 10px;">Posts page</h1>
    <hr />
    <gen-button style="align-self: flex-start; margin: 15px 0;" @click="state.dialogOpen = true">Create
    </gen-button>
    <hr />
    <gen-dialog v-model:open="state.dialogOpen">
      <PostForm @create="(post) => {
        state.posts.push(post);
        state.dialogOpen = false;
      }" />
    </gen-dialog>

    <PostList :posts="state.posts" @delete="(id) => state.posts = state.posts.filter(el => el.id !== id)" />
  </main>
</template>

<style>
@import './assets/base.css';
</style>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
}
</style>
