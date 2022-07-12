
<script setup lang="ts">
import { onBeforeMount, onMounted, reactive } from 'vue';
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import redaxios from 'redaxios';

type TState = {
  posts: Array<{
    id: number;
    title: string;
    description: string;
  }>;
  dialogOpen: boolean;
  postLoading: boolean;
}

const state = reactive<TState>({
  posts: [],
  dialogOpen: false,
  postLoading: true,
});


const getPosts = async () => {
  await redaxios.get('https://jsonplaceholder.typicode.com/posts?_limit=10').then(({ data }) => {
    (data as any[]).forEach(post => {
      state.posts.push({ id: post.id, title: post.title, description: post.body });
    })

  }).catch((e) => alert(e));
  state.postLoading = false;
}



onMounted(() => {
  getPosts();
});
</script>




<template>
  <main class="main">
    <h1 style="margin-bottom: 10px;">Posts page</h1>
    <hr />
    <gen-button style="align-self: flex-start; margin: 15px 0;" @click="state.dialogOpen = true">Create</gen-button>
    <hr />
    <gen-dialog v-model:open="state.dialogOpen">
      <PostForm @create="(post) => {
        state.posts.push(post);
        state.dialogOpen = false;
      }" />
    </gen-dialog>

    <PostList v-if="!state.postLoading" :posts="state.posts"
      @delete="(id) => state.posts = state.posts.filter(el => el.id !== id)" />
    <div v-else>Loading...</div>
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
