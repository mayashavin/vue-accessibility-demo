// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuessibility from './plugins/Vuessibilty';
import Cloudinary from '../cloudinary_vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuessibility);
Vue.use(Cloudinary, {
  cloudName: 'cloudinary',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
