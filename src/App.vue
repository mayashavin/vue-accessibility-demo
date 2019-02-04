<template>
  <v-app>
    <access-ctrls
      @brightness="changeBrightness"
      @contrast="changeContrast"
      @grayscale="toogleGrayscaleMode"
      @screenMode="switchScreenMode"
    />      
    <div ref="app" id="app-1">
      <header class="white"></header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </v-app>
</template>

<script>
import AccessibilityControls from '@/components/AccessibilityControls/AccessibilityControls';
import store from '@/store/store';

export default {
  name: 'app',
  components: {
    AccessCtrls: AccessibilityControls,
  },
  methods: {
    changeBrightness(percent) {
      this.$el.style.setProperty('--brightness', percent);
    },
    changeContrast(percent) {
      this.$el.style.setProperty('--contrast', percent);
    },
    toogleGrayscaleMode(isGrayscaleOn) {
      this.$el.style.setProperty('--grayscale', isGrayscaleOn ? 1 : 0);
    },
    switchScreenMode(isDarkMode) {
      this.$el.style.setProperty('--invert', isDarkMode ? 1 : 0);
    },
  },
  data() {
    return {
      sharedState: store,
    };
  },
  computed: {
    appRef() {
      return this.$refs.app;
    },
  },
};

</script>

<style lang="scss">
:root{
  --brightness: 100%;
  --contrast: 100%;
  --grayscale: 0;
  --invert: 0;
  --fontSize: 100%;
}

body {
  margin: 0;
  font-size: var(--fontSize);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  filter: contrast(var(--contrast)) brightness(var(--brightness)) #{"grayscale(var(--grayscale))"} #{"invert(var(--invert))"};

  // Double invert for night mode to maintain image color
  // img {
  //   filter: #{"invert(var(--invert))"};
  // }
}

main {
  text-align: center;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #0e2f5a;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.d--flex {
  display: flex;
}

.d--grid {
  display: grid;
}

.pa1 {
  padding: 1rem;
}

.ph1 {
  padding-right: 1rem;
  padding-left: 1rem;
}
</style>
