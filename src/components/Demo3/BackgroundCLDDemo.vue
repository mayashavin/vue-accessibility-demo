<template>
  <div class="demo-container">
    <h1>Demo: Text ➕ Background</h1>
    <h3>Image Manipulation in CLDImage</h3>
    <div class="constrast-list-container">
      <CLDBanner
        v-for="(value, index) in cases"
        v-bind="value"
        :key="index"
      />
    </div>
  </div>
</template>
<script>
import CLDBanner from '@/components/Demo3/CLDBanner';

export default {
  components: { CLDBanner },
  name: 'BackgroundCLDDemo',
  data() {
    return {
      cases: [{
        banner: {
          publicId: 'VueJS_Amsterdam_2018/vectorstock_845035',
          width: 500,
          height: 295,
          effect: 'brightness_hsb:0',
          crop: 'fill',
        },
        title: 'Heading 1',
        // titleColor: 'black',
      // }, {
      //   banner: {
      //     publicId: 'VueJS_Amsterdam_2018/how-to-eat-more-fruits-and-veg',
      //     width: 500,
      //     height: 295,
      //     effect: 'brightness_hsb:-50',
      //   },
      //   title: 'Heading 2',
      //   titleColor: 'white',
      //   titleFontSize: '60px',
      }, {
        banner: {
          publicId: 'VueJS_Amsterdam_2018/vectorstock_1359778',
          width: 500,
          height: 295,
          crop: 'fill',
        },
        title: 'Heading 3',
        titleShadow: '2px 2px #00000066',
        bannerEffect: 'whiteOnBlack',
        titleFontSize: '40px',
      // }, {
      //   banner: {
      //     publicId: 'VueJS_Amsterdam_2018/vectorstock_845035',
      //     width: 500,
      //     height: 295,
      //     effect: 'brightness_hsb:-30',
      //     crop: 'fill',
      //   },
      //   title: 'Heading 4',
      //   titleShadow: '1px 2px #00000040',
      }],
    };
  },
};
</script>
<style scoped>
  .constrast-list-container {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    justify-content: center;
  }
</style>