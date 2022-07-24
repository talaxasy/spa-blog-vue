<script setup lang="ts">
import { onMounted, reactive, ref, watch, type VNodeRef } from 'vue';
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import redaxios from 'redaxios';
import { computed } from '@vue/reactivity';
import usePosts from '@/hooks/usePosts';
import useLoadMorePosts from '@/hooks/useLoadMorePosts';


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

// const getPosts = async () => {
//     await redaxios.get('https://jsonplaceholder.typicode.com/posts', {
//         params: {
//             _page: state.page,
//             _limit: state.limit,
//         }
//     }).then(({ data, headers }) => {
//         state.posts = (data as any[]).map(post => ({ id: post.id, title: post.title, description: post.body }))
//         state.totalPages = Math.ceil(+headers.get('X-Total-Count')! / state.limit);
//     }).catch((e) => alert(e));
//     state.postLoading = false;
// }


const { loading, page, posts } = usePosts(10);
const { fetching } = useLoadMorePosts(page, posts, 10);



const sortedPosts = computed(() => {
    const sortBy = state.selectedSort;
    const filteredPosts = posts.value.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
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

        <div v-intersection="fetching" class="observer"></div>
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
