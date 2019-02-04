<template>
  <div class="content-wrapper ma-3">
    <!-- normal way of render img -->
    <!-- <img v-if="thumbnail && thumbnail.src"
      :width="width"
      :height="height"
      class="align-self-center"
      :src="thumbnail.src"/> -->
      <!-- @error="getImagePlaceholder"/> -->
      <!-- alt="thumbnail.alt" -->
    <!-- new way -->
    <image-wrapper :img="thumbnail" class="align-self-center" v-if="thumbnail"/>
    <div class="flex text-sm-justify">
      <h2 class="deep-orange--text text--darken-4" v-text="title"/>
      <h3 class="subtitle" v-text="subtitle"/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <v-btn dark>
        More
        <v-icon right>more_horiz</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
import ImageWrapper from '@/components/MainDemo/ImageWrapper';
import store from '@/store/store';

export default {
  components: { ImageWrapper },
  name: 'DemoSection',
  props: {
    thumbnail: Object,
    title: String,
    subtitle: String,
  },
  data() {
    return {
      sharedState: store,
    };
  },
  computed: {
    width() {
      return this.thumbnail.width || '';
    },
    height() {
      return this.thumbnail.height || '';
    },
  },
  // methods: {
  //   getImagePlaceholder() {

  //   }
  // },
};
</script>
<style lang="scss" scoped>
  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 1rem;
  }
</style>
