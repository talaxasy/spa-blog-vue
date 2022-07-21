import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import About from '@/pages/About.vue';
import PostsInfinityScroll from '@/pages/PostsInfinityScroll.vue';
import PostsPagination from '@/pages/PostsPagination.vue';
import Post from '@/pages/Post.vue';
import NotFound from '@/pages/NotFound.vue';

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
  { path: '/404', component: NotFound },
  { path: '/:catchAll(.*)', redirect: '/404' },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
