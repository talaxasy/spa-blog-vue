import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import Main from '@/pages/Main.vue';
import About from '@/pages/About.vue';
import Posts from '@/pages/Posts.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts',
    component: Posts,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
