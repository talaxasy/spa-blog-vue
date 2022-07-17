import { createApp } from 'vue';
import App from './App.vue';
import UI from '@/components/UI';
import router from '@/router';
import VIntersection from '@/directives/VIntersection';

const app = createApp(App);

UI.forEach((component) => {
  app.component(component.name, component);
});

app.directive('intersection', VIntersection);

app.use(router).mount('#app');
