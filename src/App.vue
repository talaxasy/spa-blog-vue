
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
}

const state: TState = reactive({
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
</script>




<template>
  <main class="main">

    <PostForm @create="(post) => state.posts.push(post)" />
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
