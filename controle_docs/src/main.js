import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Maska from 'maska';

const app = createApp(App);

app.use(Maska);

// const store = new Vuex.Store({
//   state: {
//     authentication: false,
//   },
//   mutations: {
//     setAuthentication(state, status) {
//       state.authentication = status;
//     },
//   },
// });

app.use(router).mount('#app');
