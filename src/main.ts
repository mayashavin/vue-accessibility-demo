import Vue from 'vue';
import M16yPlugin from 'vue-accessibility-widget';
import './plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;
Vue.use(M16yPlugin, {
  plugins: {
    Cloudinary: {
      configuration: {
        cloudName: 'cloudinary',
      },
    },
  },
});

Vue.use(M16yPlugin);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
