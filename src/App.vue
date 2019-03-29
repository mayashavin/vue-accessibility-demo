<template>
  <v-app v-m16y-ctrls>
    <div ref="app" id="app-1">
      <header class="white"></header>
      <main>
        <div class="demo-container d--grid">
          <div class="banner--container">
            <!-- <img v-if="banner && banner.src"
              :width="banner.width"
              :height="banner.height"
              class="align-self-center banner--img"
              :src="banner.src"
            /> -->
            <image-wrapper
              class="section-banner"
              :img="banner"
              optimizedWhiteText
              />
            <h1
              class="banner--title"
              v-text="title"
              ref="sectionTitle"></h1>
          </div>
          <div class="content-wrapper ma-3">
            <!-- normal way of render img -->
            <!-- <img v-if="articleThumbnail && articleThumbnail.src"
              :width="width"
              :height="height"
              class="align-self-center"
              :src="articleThumbnail.src"/> -->
              <!-- @error="getImagePlaceholder"/> -->
              <!-- alt="articleThumbnail.alt" -->
            <!-- new way -->
            <image-wrapper
              :img="articleThumbnail"
              class="align-self-center"
              v-if="articleThumbnail"/>
            <div class="flex text-sm-justify">
              <h2 class="deep-orange--text text--darken-4" v-text="title"/>
              <h3 class="subtitle" v-text="articleSubtitle"/>
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
        </div>
      </main>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      banner: {
        publicId: 'VueJS_Amsterdam_2018/how-to-eat-more-fruits-and-veg',
        width: 600,
        height: 300,
        alt: 'How to eat more fruits and veg',
        crop: 'fill',
      },
      title: 'VueJS Amsterdam',
      articleThumbnail: {
        publicId: 'VueJS_Amsterdam_2018/20-12-2D-pie',
        alt: 'Pie chart',
        crop: 'fill',
        gravity: 'center',
        width: 200,
        aspectRatio: '1:1',
      },
      articleTitle: 'Just another color pie chart',
      articleSubtitle: 'As a demo for color blind',
    };
  },
  computed: {
    fontColor() {
      return this.$m16y.nightMode ? 'black' : 'white';
    },
  },
  mounted() {
    const title = this.$refs.sectionTitle;
    title.style.setProperty('--title-fontColor', this.fontColor);

    title.style.setProperty('--title-textShadow', '2px 2px #00000066');
    title.style.setProperty('--title-fontSize', '60px');
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

<style lang="scss">
body {
  margin: 0;
  font-size: var(--fontSize);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
}

.m-access-ctrls-btn {
  .m-access-ctrls-btn__content {
    line-height: inherit;
  }

  .material-icons {
    max-width:25px;
  }
}

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

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #0e2f5a;
  color: #ffffff;
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

.demo-container {
  grid-gap: 3rem;
}

.content-wrapper {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1rem;
}
</style>
