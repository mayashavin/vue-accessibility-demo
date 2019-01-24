import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import TextBackgroundDemo from '@/components/Demo2/TextBackgroundDemo';
import ImageManipulationDemo from '@/components/Demo4/ImageManipulationDemo';
import BackgroundCLDDemo from '@/components/Demo3/BackgroundCLDDemo';
import ElementOrderDemo from '@/components/Demo1/ElementOrderDemo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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
      name: 'BackgroundCLDDemo',
      component: BackgroundCLDDemo,
    },
    {
      path: '/demo4',
      name: 'ImageManipulation',
      component: ImageManipulationDemo,
    },
    {
      path: '*',
      component: Home,
    },
  ],
});
