import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import Maska from 'maska'
// import VueMask from '@devindex/vue-mask';

const app = createApp(App);

// app.use(VueMask);
app.use(Maska);
app.use(router).mount('#app');

