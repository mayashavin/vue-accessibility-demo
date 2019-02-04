<template>
  <div class="section-container">
    <img :src="banner" class="section-banner" ref="sectionBanner"/>
    <h1 class="section-text" v-text="title" ref="sectionTitle"></h1>
  </div>
</template>
<script>
export default {
  name: 'BannerWithText',
  props: {
    banner: {
      type: String,
    },
    title: {
      type: String,
    },
    bannerBrightness: {
      type: String,
      default: '50%',
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
  },
  mounted() {
    const banner = this.$refs.sectionBanner;
    const title = this.$refs.sectionTitle;
    banner.style.setProperty('--bannerBrightness', this.bannerBrightness);
    title.style.setProperty('--titleColor', this.titleColor);
    title.style.setProperty('--titleShadow', this.titleShadow);
    title.style.setProperty('--titleFontSize', this.titleFontSize);
  },
};
</script>
<style scoped lang="scss">
  .section-container {
    // width: 500px;
    // height: 295px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    .section-banner {
        filter: brightness(var(--bannerBrightness));
    }

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


