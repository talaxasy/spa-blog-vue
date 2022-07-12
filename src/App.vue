<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue';
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
  selectedSort: 'title' | 'description' | 'new' | '';
  sortOptions: {
    value: string;
    label: string;
  }[];
}
const state = reactive<TState>({
  posts: [],
  dialogOpen: false,
  postLoading: true,
  selectedSort: '',
  sortOptions: [
    { value: 'title', label: 'Title' },
    { value: 'description', label: 'Description' },
    { value: 'new', label: 'Newest' },
  ]
});
const getPosts = async () => {
  await redaxios.get('https://jsonplaceholder.typicode.com/posts?_limit=10').then(({ data }) => {
    (data as any[]).forEach(post => {
      state.posts.push({ id: post.id, title: post.title, description: post.body });
    })

  }).catch((e) => alert(e));
  state.postLoading = false;
}

watch(() => state.selectedSort, (selected) => {

  if (selected === 'title') {
    state.posts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (selected === 'description') {
    state.posts.sort((a, b) => a.description.localeCompare(b.description));
  } else if (selected === 'new') {
    state.posts.sort((a, b) => b.id - a.id);
  }
})


onMounted(() => {
  getPosts();
});
</script>




<template>
  <main class="main">
    <h1 style="margin-bottom: 10px;">Posts page</h1>
    <div class="main__btns">
      <gen-button @click="state.dialogOpen = true">Create</gen-button>
      <gen-select v-model="state.selectedSort" :options="state.sortOptions" />
    </div>
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

  &__btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(103, 103, 103, 0.136);
    border-bottom: 1px solid rgba(103, 103, 103, 0.136);
    padding: 15px 0;
  }
}
</style>
