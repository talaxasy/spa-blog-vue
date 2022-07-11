import { createApp } from 'vue';
import App from './App.vue';
import UI from '@/components/UI';

const app = createApp(App);

UI.forEach((component) => {
  app.component(component.name, component);
});

app.mount('#app');
