import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import TextBackgroundDemo from '@/components/TextBackgroundDemo/TextBackgroundDemo';
import ImageManipulationDemo from '@/components/ImageManipulationDemo/ImageManipulationDemo';
import ElementOrderDemo from '@/components/ElementOrderDemo/ElementOrderDemo';
import Demo from '@/components/MainDemo/MainDemo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
    },
    {
      path: '/demo1',
      name: 'ElementOrderDemo',
      component: ElementOrderDemo,
    },
    {
      path: '/demo2',
      name: 'TextBackgroundDemo',
      component: TextBackgroundDemo,
    },
    {
      path: '/demo3',
      name: 'ImageManipulation',
      component: ImageManipulationDemo,
    },
    {
      path: '*',
      component: Home,
    },
  ],
});
