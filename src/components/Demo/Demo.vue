<template>
  <div class="demo-container d-grid">
    <Banner v-bind="demoBanner"/>
    <List :list="demoSections">
      <demo-section slot-scope="value" v-bind="value"/>
    </List>
  </div>    
</template>
<script>
import List from '@/components/Demo/List';
import CLDBanner from '@/components/Demo/CLDBanner';
import DemoSection from '@/components/Demo/Section';

export default {
  name: 'Demo',
  components: {
    List,
    Banner: CLDBanner,
    DemoSection,
  },
  data() {
    return {
      demoBanner: {
        banner: {
          publicId: 'VueJS_Amsterdam_2018/how-to-eat-more-fruits-and-veg',
          width: 600,
          height: 300,
          alt: 'How to eat more fruits and veg',
          crop: 'fill',
        },
        title: {
          text: 'VueJS Amsterdam',
          fontSize: '60px',
          textShadow: '2px 2px #00000066',
        },
        bannerEffect: 'whiteOnBlack',
      },
      demoSections: [{
        thumbnail: {
          publicId: 'VueJS_Amsterdam_2018/20-12-2D-pie',
          alt: 'Pie chart',
          crop: 'fill',
          gravity: 'center',
          width: 200,
          aspectRatio: '1:1',
        },
        title: 'Just another color pie chart',
        subtitle: 'As a demo for color blind',
      }, {
        thumbnail: {
          publicId: 'VueJS_Amsterdam_2018/Apple_Single',
          alt: 'Apple of my eye',
          crop: 'fill',
          gravity: 'auto',
          width: 200,
          aspectRatio: '1:1',
          art: 'hokusai',
        },
        title: 'Apple of my eye',
        subtitle: 'As a demo for color blind',
      }],
    };
  },
};
</script>