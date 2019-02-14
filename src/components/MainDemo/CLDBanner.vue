<template>
  <div class="banner--container">
    <!-- <img v-if="banner && banner.src"
      :width="banner.width"
      :height="banner.height"
      class="align-self-center banner--img"
      :src="banner.src"
    /> -->
    <image-wrapper :img="transformedBanner"
      class="section-banner"
      ref="sectionBanner"/>
    <h1 class="banner--title" v-text="title.text" ref="sectionTitle"></h1>
  </div>
</template>
<script>
import store from '@/store/store';

export default {
  name: 'CLDBanner',
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
    // transformedBanner() {
    //   const tBanner = {
    //     ...this.banner,
    //     transformation: this.banner.transformation ? [...this.banner.transformation] : [],
    //   };

    //   if (this.extraTransformation) {
    //     tBanner.transformation.push(this.extraTransformation);
    //   }

    //   return tBanner;
    // },
    fontColor() {
      switch (this.bannerEffect) {
        case 'whiteOnBlack':
          return 'white';
          // return this.sharedState.nightMode ? 'black' : 'white';
        case 'blackOnWhite':
        default:
          return 'black';
          // return this.sharedState.nightMode ? 'white' : 'black';
      }
    },
    // extraTransformation() {
    //   switch (this.bannerEffect) {
    //     case 'whiteOnBlack': {
    //       return {
    //         effect: 'brightness_hsb:-50',
    //       };
    //     }
    //     case 'blackOnWhite': {
    //       return {
    //         effect: 'brightness_hsb:0',
    //       };
    //     }
    //     default:
    //       break;
    //   }

    //   return null;
    // },
  },
  methods: {
    setBannerEffect() {
      switch (this.bannerEffect) {
        case 'whiteOnBlack': {
          this.$el.style.setProperty('--bannerBrightness', '50%');
          break;
        }
        case 'blackOnWhite': {
          this.$el.style.setProperty('--bannerBrightness', '100%');
          break;
        }
        default:
          break;
      }
    },
  },
  mounted() {
    const title = this.$refs.sectionTitle;
    title.style.setProperty('--title-fontColor', this.fontColor);
    title.style.setProperty('--title-textShadow', this.title.textShadow);
    title.style.setProperty('--title-fontSize', this.title.fontSize);

    this.setBannerEffect();
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
  .banner--container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    .banner--img {
      filter: brightness(var(--bannerBrightness)) #{"invert(var(--invert))"};
    }

    .banner--title {
        position: absolute;
        margin: auto;
        color: var(--title-fontColor);
        font-size: var(--title-fontSize);
        z-index: 1;
        text-shadow: var(--title-textShadow);
    }
  }
</style>
