<template>
    <CLDImage v-bind="tranformedImg"/>
</template>
<script>
import store from '@/store/store';

export default {
  name: 'ImageWrapper',
  props: {
    img: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sharedState: store,
    };
  },
  computed: {
    tranformedImg() {
      const transformed = {
        ...this.img,
        transformation: this.img.transformation ? [...this.img.transformation] : [],
      };

      if (this.sharedState.colorBlind) {
        transformed.transformation.push({
          effect: 'assist_colorblind',
        });
      }

      if (this.sharedState.nightMode) {
        transformed.transformation.push({
          effect: 'negate',
        });
      }

      return transformed;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
