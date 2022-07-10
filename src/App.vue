
<script setup lang="ts">
import { reactive } from 'vue';
import PostList from './components/PostList.vue';
import PostForm from './components/PostForm.vue';

type TState = {
  title: string;
  description: string;
  posts: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

const state: TState = reactive({
  title: 'title',
  description: 'description',
  posts: [{
    id: 1, title: 'abobus', description: 'text'
  },
  {
    id: 2, title: 'levus', description: 'text text 31323'
  },
  {
    id: 3, title: 'deianus', description: 'lalallalalalal'
  }],
});

const createPost = () => {
  state.posts.push({
    id: state.posts.length + 1,
    title: state.title,
    description: state.description,
  });
  state.title = '';
  state.description = '';
}
</script>




<template>
  <main class="main">
    <PostForm />
    <PostList :posts="state.posts" />
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
