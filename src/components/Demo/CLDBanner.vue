<template>
  <div class="section-container">
    <image-wrapper :img="transformedBanner"
      class="section-banner"
      ref="sectionBanner"/>
    <h1 class="section-text" v-text="title.text" ref="sectionTitle"></h1>
  </div>
</template>
<script>
import store from '@/store/store';
import ImageWrapper from './ImageWrapper';

export default {
  name: 'CLDBanner',
  components: {
    ImageWrapper,
  },
  props: {
    banner: {
      type: Object,
      required: true,
    },
    title: {
      type: Object,
    },
    bannerEffect: String,
  },
  data() {
    return {
      sharedState: store,
    };
  },
  computed: {
    transformedBanner() {
      const tBanner = {
        ...this.banner,
        transformation: this.banner.transformation ? [...this.banner.transformation] : [],
      };

      switch (this.bannerEffect) {
        case 'whiteOnBlack': {
          tBanner.transformation.push({
            effect: 'brightness_hsb:-50',
          });
          break;
        }
        case 'blackOnWhite': {
          tBanner.push({
            effect: 'brightness_hsb:0',
          });
          break;
        }
        default:
          break;
      }

      return tBanner;
    },
    fontColor() {
      switch (this.bannerEffect) {
        case 'whiteOnBlack':
          return this.sharedState.nightMode ? 'black' : 'white';
        case 'blackOnWhite':
        default:
          return this.sharedState.nightMode ? 'white' : 'black';
      }
    },
  },
  mounted() {
    const title = this.$refs.sectionTitle;
    title.style.setProperty('--title-fontColor', this.fontColor);
    title.style.setProperty('--title-textShadow', this.title.textShadow);
    title.style.setProperty('--title-fontSize', this.title.fontSize);
  },
  watch: {
    fontColor(newColor, oldColor) {
      if (newColor !== oldColor) {
        const title = this.$refs.sectionTitle;
        title.style.setProperty('--title-fontColor', newColor);
      }
    },
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
        color: var(--title-fontColor);
        font-size: var(--title-fontSize);
        z-index: 1;
        text-shadow: var(--title-textShadow);
    }
  }
</style>
