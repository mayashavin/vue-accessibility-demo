<template>
  <div class="demo-container">
    <h1>Demo: Image Manipulation 🎯</h1>
    <h2>Color blind support with Cloudinary</h2>
    <div class="imageListWrapper" ref="listWrapper">
      <div class="imageWrapper">
        <CLDImage v-bind="normal" class="ph1" width="defaultWidth"/>
        <h3 v-text="normal.alt"></h3>
      </div>
      <div class="imageWrapper">
        <CLDImage v-bind="colorblind" class="ph1"/>
        <h3 v-text="colorblind.alt"></h3>
      </div>
      <div class="imageWrapper">
        <CLDImage v-bind="highcontrastColorblind" class="ph1"/>
        <h3 v-text="highcontrastColorblind.alt"></h3>
      </div>
      <div class="imageWrapper">
        <CLDImage v-bind="colorblindXray" class="ph1"/>
        <h3 v-text="colorblindXray.alt"></h3>
      </div>
    </div>
  </div>    
</template>
<script>
export default {
  name: 'ImageManipulationDemo',
  data() {
    return {
      defaultWidth: 300,
      normal: {
        publicId: 'VueJS_Amsterdam_2018/p1c09qnt0212k34mp1g4pkrgh0j6',
        alt: 'Normal green and red apples',
      },
      colorblind: {
        publicId: 'VueJS_Amsterdam_2018/p1c09qnt0212k34mp1g4pkrgh0j6',
        alt: 'Color blind support: stripes',
        effect: 'assist_colorblind',
      },
      highcontrastColorblind: {
        publicId: 'VueJS_Amsterdam_2018/p1c09qnt0212k34mp1g4pkrgh0j6',
        alt: 'Color blind support: stripes in high contrast',
        transformation: [{
          effect: 'contrast:80',
        }, {
          effect: 'assist_colorblind',
        }],
      },
      colorblindXray: {
        publicId: 'VueJS_Amsterdam_2018/p1c09qnt0212k34mp1g4pkrgh0j6',
        alt: 'Color blind support: Xray',
        effect: 'assist_colorblind:x_ray',
      },
    };
  },
  mounted() {
    const listWrapper = this.$refs.listWrapper;
    listWrapper.style.setProperty('--columns', 4);
  },
};
</script>
<style lang="scss" scoped>
  .imageListWrapper {
    display: grid;
    grid-template-columns: repeat(var(--columns), auto);
    grid-gap: 1rem;
    justify-content: center;
  }
</style>

