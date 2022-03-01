import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome'

import Vue3Autocounter from 'vue3-autocounter';
createApp(App)
  .use(router)
  .use(store)
  .component('vue3-autocounter', Vue3Autocounter)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

  
  