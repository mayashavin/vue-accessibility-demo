<template>
  <div class="demo-container">
    <h1>Demo: Text ➕ Background</h1>
    <h2>CSS Filter, Variables and scoped</h2>
    <div class="constrast-list-container">
      <Banner
        v-for="(value, index) in cases"
        v-bind="value"
        :key="index"
      />
    </div>
  </div>
</template>
<script>
import BannerWithText from '@/components/Demo2/BannerWithText';

export default {
  components: { Banner: BannerWithText },
  name: 'TextBackgroundDemo',
  data() {
    return {
      cases: [{
        banner: 'https://cloudinary-res.cloudinary.com/image/upload/w_500,h_295,c_fill/v1547735375/VueJS_Amsterdam_2018/vectorstock_845035.jpg',
        title: 'Heading 1',
        titleColor: 'black',
        bannerBrightness: '100%',
      // }, {
      //   banner: 'https://cloudinary-res.cloudinary.com/image/upload/w_500,h_295/v1547740693/VueJS_Amsterdam_2018/how-to-eat-more-fruits-and-veg.jpg',
      //   title: 'Heading 2',
      //   titleFontSize: '60px',
      // }, {
      //   banner: 'https://cloudinary-res.cloudinary.com/image/upload/w_500,h_295,c_fill/v1547735371/VueJS_Amsterdam_2018/vectorstock_1359778.jpg',
      //   title: 'Heading 3',
      //   titleShadow: '2px 2px #00000066',
      //   titleFontSize: '40px',
      // }, {
      //   banner: 'https://cloudinary-res.cloudinary.com/image/upload/w_500,h_295,c_fill/v1547735375/VueJS_Amsterdam_2018/vectorstock_845035.jpg',
      //   title: 'Heading 4',
      //   bannerBrightness: '70%',
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

