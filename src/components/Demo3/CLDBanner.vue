<template>
  <div class="section-container">
    <CLDImage v-bind="transformedBanner"
      class="section-banner"
      ref="sectionBanner"/>
    <h1 class="section-text" v-text="title" ref="sectionTitle"></h1>
  </div>
</template>
<script>
export default {
  name: 'BannerWithText',
  props: {
    banner: {
      type: Object,
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
      default: 'white',
    },
    titleShadow: {
      type: String,
      default: '',
    },
    titleFontSize: {
      type: String,
      default: '50px',
    },
    bannerEffect: {
      type: String,
      default: '',
    },
  },
  computed: {
    transformedBanner() {
      switch (this.bannerEffect) {
        case 'whiteOnBlack':
          return {
            ...this.banner,
            effect: 'brightness_hsb:-50',
          };
        case 'blackOnWhite':
          return {
            ...this.banner,
            effect: 'brightness_hsb:0',
          };
        default:
          return this.banner;
      }
    },
  },
  mounted() {
    const title = this.$refs.sectionTitle;
    title.style.setProperty('--titleColor', this.titleColor);
    title.style.setProperty('--titleShadow', this.titleShadow);
    title.style.setProperty('--titleFontSize', this.titleFontSize);
  },
};
</script>
<style lang="scss" scoped>
  .section-container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    .section-text {
        position: absolute;
        margin: auto;
        color: var(--titleColor);
        font-size: var(--titleFontSize);
        z-index: 2;
        text-shadow: var(--titleShadow);
    }
  }
</style>
