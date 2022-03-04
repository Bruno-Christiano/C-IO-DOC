import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Maska from 'maska';

const app = createApp(App);

// app.use(VueMask);
app.use(Maska);
app.use(router).mount('#app');
