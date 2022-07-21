import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import Main from '@/pages/Main.vue';
import About from '@/pages/About.vue';
import PostsInfinityScroll from '@/pages/PostsInfinityScroll.vue';
import PostsPagination from '@/pages/PostsPagination.vue';
import Post from '@/pages/Post.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PostsInfinityScroll,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/pagination',
    component: PostsPagination,
  },
  {
    path: '/posts/infinity-scroll',
    component: PostsInfinityScroll,
  },
  {
    path: '/posts',
    component: PostsInfinityScroll,
  },
  {
    path: '/posts/:id',
    component: Post,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
