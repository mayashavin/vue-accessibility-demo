// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './plugins/vuetify';
import M16yPlugin from './plugins/m16y-plugin/m16y-plugin';
import Cloudinary from '../cloudinary_vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Cloudinary, {
  cloudName: 'cloudinary',
});

Vue.use(M16yPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
