<template>
  <div class="home">
    <div class="option d--flex">
      <h3>👑 Demo: Accessibility</h3>
      <router-link tag="button" class="btn" to="demo">Show me</router-link>
    </div>
    <div class="option d--flex">
      <h3>🤓 Demo: Element Order & Usage</h3>
      <router-link tag="button" class="btn" to="demo1">Show me</router-link>
    </div>
    <div class="option d--flex">
      <h3>👩🏻‍💻 Demo: Text ➕ Background (CSS Filter)</h3>
      <router-link tag="button" class="btn" to="demo2">Show me</router-link>
    </div>
    <div class="option d--flex">
      <h3>🎯 Demo: Image Manipulation (Color blind)</h3>
      <router-link tag="button" class="btn" to="demo3">Show me</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style lang="scss" scoped>
  .home {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 550px;
    margin: auto;
    padding: 1rem 0;
    border: 1px solid #0a3464;
    border-radius: 5px;
  }

  .option {
    justify-content: space-between;
    width: inherit;
    padding: 0 1rem;
    align-items: center;
  }

  .btn {
    display: block;
    margin: 1rem;
    padding: 0.8rem 1rem;
    font-size: 16px;
    box-shadow: 2px 2px #b5b4b445;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
    background: #00800aa1;
    color: white;
  }
</style>


