<script setup lang="ts">
import { onMounted, reactive, ref, watch, type VNodeRef } from 'vue';
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import { computed } from '@vue/reactivity';
import Pagination from '@/components/Pagination.vue';
import usePosts from '@/hooks/usePosts';

type TState = {
    dialogOpen: boolean;
    selectedSort: 'title' | 'description' | 'new' | '';
    sortOptions: {
        value: string;
        label: string;
    }[];
    searchQuery: string;
}

const state = reactive<TState>({
    dialogOpen: false,
    selectedSort: '',
    sortOptions: [
        { value: 'title', label: 'Title' },
        { value: 'description', label: 'Description' },
        { value: 'new', label: 'Newest' },
    ],
    searchQuery: '',
});

const { posts, totalPages, loading, page } = usePosts(10);

const sortedPosts = computed(() => {
    const sortBy = state.selectedSort;
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
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


</script>



<template>
    <main class="main">
        <h1 style="margin-bottom: 10px;">Posts page</h1>
        <div class="main__btns">
            <gen-button @click="state.dialogOpen = true">Create</gen-button>
            <gen-input v-model="state.searchQuery" type="text" placeholder="Search" />
            <gen-select v-model="state.selectedSort" :options="state.sortOptions" />
        </div>
        <gen-dialog v-model:open="state.dialogOpen">
            <PostForm @create="(post) => {
                posts.push(post);
                state.dialogOpen = false;
            }" />
        </gen-dialog>

        <PostList v-if="!loading" :posts="sortedPosts" @delete="(id) => posts = posts.filter(el => el.id !== id)" />
        <div v-else>Loading...</div>

        <Pagination v-model="page" :totalPages="totalPages" />


    </main>
</template>

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
