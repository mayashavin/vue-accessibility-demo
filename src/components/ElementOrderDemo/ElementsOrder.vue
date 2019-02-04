<template>  
  <div class="sectionsWrapper">
    <div class="section" :class="sectionClass">
      <span class="headline">Headline</span>
      <div class="subtitle">Subtitle</div>
      <div class="content">Content here</div>
      <a class="button">Click me</a>
      <button class="link">I'm a link</button>
    </div>
    <div class="section" :class="sectionClass">
      <h1 class="headline">Headline</h1>
      <h3 class="subtitle">Subtitle</h3>
      <p class="content">Content here</p>
      <button class="button">Click me</button>
      <a class="link" href="">I'm a link</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ElementsOrder',
  props: {
    cssEnabled: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    sectionClass() {
      return {
        cssenabled: this.cssEnabled,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
  .sectionsWrapper {
    display: grid;
    grid-template-columns:repeat(2, 0.5fr);
    grid-gap: 1rem;
    justify-content: center;
    margin: 1rem;
  }

  .cssenabled {
    .headline {
      font-size: 32px;
      text-align: center;
      margin: 2rem auto;
      font-weight: 700;
      display: block;
    }

    .subtitle {
      font-size: 20px;
      text-align: center;
      margin: 1rem auto;
      font-weight: 500;
    }

    .button {
      background: #0909cebf;
      color: white;
      padding: 1rem;
      font-size: 14px;
      cursor: pointer;
      border: none;
      width: 120px;
      display: block;
      box-sizing: border-box;
      text-align: center;
      margin: auto;
      font-family: inherit;
      font-weight: 500;
      
      &:hover {
        background: #0909a59c;
      }
      
      &:active, &:focus {
        outline: none;
        background: #0909a5d9;
      }
    }

    .link {
      text-decoration: underline;
      color: #0909a59c;
      font-size: 14px;
      box-sizing: border-box;
      display: block;
      margin: 1rem auto;
      font-family: inherit;
      border: none;
      cursor: pointer;

      &:active, &:focus {
        outline: none;
      }
    }

    .content {
      margin: 1rem auto;
    }
  }
</style>

