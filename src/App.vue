<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue';
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import redaxios from 'redaxios';
import { computed } from '@vue/reactivity';

type TPost = {
  id: number;
  title: string;
  description: string;
}

type TState = {
  posts: TPost[];
  dialogOpen: boolean;
  postLoading: boolean;
  selectedSort: 'title' | 'description' | 'new' | '';
  sortOptions: {
    value: string;
    label: string;
  }[];
  searchQuery: string;
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
  ],
  searchQuery: '',
});
const getPosts = async () => {
  await redaxios.get('https://jsonplaceholder.typicode.com/posts?_limit=10').then(({ data }) => {
    (data as any[]).forEach(post => {
      state.posts.push({ id: post.id, title: post.title, description: post.body });
    })
  }).catch((e) => alert(e));
  state.postLoading = false;
}

const sortedPosts = computed(() => {
  const sortBy = state.selectedSort;
  const filteredPosts = state.posts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
  switch (sortBy) {
    case 'title':
      return filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
    case 'description':
      return filteredPosts.sort((a, b) => a.description.localeCompare(b.description));
    case 'new':
      return filteredPosts.sort((a, b) => b.id - a.id);
    default:
      return filteredPosts;
  }
});


onMounted(() => {
  getPosts();
});


</script>




<template>
  <main class="main">
    <h1 style="margin-bottom: 10px;" >Posts page</h1>
    <div class="main__btns">
      <gen-button @click="state.dialogOpen = true">Create</gen-button>
      <gen-input v-model="state.searchQuery" type="text" placeholder="Search" />
      <gen-select v-model="state.selectedSort" :options="state.sortOptions" />
    </div>
    <gen-dialog v-model:open="state.dialogOpen">
      <PostForm @create="(post) => {
        state.posts.push(post);
        state.dialogOpen = false;
      }" />
    </gen-dialog>

    <PostList v-if="!state.postLoading" :posts="sortedPosts"
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
