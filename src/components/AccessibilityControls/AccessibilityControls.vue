<template>
  <div class="access-ctrls-wrapper">
    <v-btn :color="accessBtnColor" round @click="toggleAccessibilityCtrlsSection" class="white--text">
      {{accessBtn}}
      <v-icon right medium>{{accessBtn}}</v-icon>
    </v-btn>
    <transition name="component-fade" mode="out-in">
      <div class="section-container pa1 d-grid" v-show="this.openAccessControlSection">
        <v-slider
          :label="sharedState.nightMode ? 'Darkness' : 'Brightness'"
          v-model="sharedState.brightness"
          max="200"
          @change="modifyBrightness"
        />
        <v-slider
          label="Contrast  "
          @change="modifyContrast"
          v-model="sharedState.contrast"
          max="200"
        />
        <v-switch
          label="Dark Mode"
          @change="switchScreenMode"
          color="primary"
          v-model="sharedState.nightMode"
        />
        <v-switch
          label="Color Blind Mode"
          @change="supportColorblind"
          color="primary"
          v-model="sharedState.colorBlind"
        />
        <v-switch
          label="Grayscale Mode"
          @change="supportGrayscale"
          color="primary"
          v-model="sharedState.grayscale"
        />
        <v-btn @click="reset" dark color="teal darken-1" class="justify-self-center">
          Reset
          <v-icon right medium>format_color_reset</v-icon>
        </v-btn>
      </div>
    </transition>
  </div>  
</template>
<script>
import store from '@/store/store';

export default {
  name: 'AccessibilityControls',
  props: {},
  data() {
    return {
      openAccessControlSection: false,
      sharedState: store,
    };
  },
  mounted() {},
  methods: {
    toggleAccessibilityCtrlsSection() {
      this.openAccessControlSection = !this.openAccessControlSection;
    },
    modifyBrightness() {
      this.$emit('brightness', `${this.sharedState.brightness}%`);
    },
    modifyContrast() {
      this.$emit('contrast', `${this.sharedState.contrast}%`);
    },
    supportColorblind() {
      this.$emit('colorBlind', this.sharedState.colorBlind);
    },
    switchScreenMode() {
      this.$emit('screenMode', this.sharedState.nightMode);
    },
    supportGrayscale() {
      this.$emit('grayscale', this.sharedState.grayscale);
    },
    reset() {
      this.sharedState.brightness = 100;
      this.sharedState.contrast = 100;
      this.sharedState.colorBlind = false;
      this.sharedState.nightMode = false;
      this.sharedState.grayscale = false;
      this.modifyBrightness();
      this.modifyContrast();
      this.supportColorblind();
      this.switchScreenMode();
      this.supportGrayscale();
    },
  },
  computed: {
    accessBtn() {
      return this.openAccessControlSection ? 'close' : 'accessibility';
    },
    accessBtnColor() {
      return this.openAccessControlSection ? 'grey darken-1' : 'primary';
    },
  },
};
</script>
<style scoped lang="scss">
  .access-ctrls-wrapper{
    display: grid;
    justify-items: end;
    position: absolute;
    right: 0;
    z-index: 2;
    background: white;
  }

  .section-container {
    border: 1px solid #E0E0E0;
    margin-right: 1rem;
    width: 300px;
    box-shadow: 2px 2px 5px -2px #E0E0E0;
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>


