import { createApp } from 'vue';
import App from './App.vue';
import UI from '@/components/UI';
import router from '@/router';

const app = createApp(App);

UI.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).mount('#app');
