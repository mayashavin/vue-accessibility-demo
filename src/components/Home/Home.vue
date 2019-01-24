<template>
  <div class="home">
    <div class="option d-flex">
      <h3>🤓 Demo: Element Order & Usage</h3>
      <button class="btn" @click="goTo('demo1')" to="/demo1">Show me</button>
    </div>
    <div class="option d-flex">
      <h3>👩🏻‍💻 Demo: Text ➕ Background (CSS Filter)</h3>
      <button class="btn" @click="goTo('demo2')">Show me</button>
    </div>
    <div class="option d-flex">
      <h3>👑 Demo: Text ➕ Background (CLDImage)</h3>
      <button class="btn" @click="goTo('demo3')">Show me</button>
    </div>
    <div class="option d-flex">
      <h3>🎯 Demo: Image Manipulation (Color blind)</h3>
      <button class="btn" @click="goTo('demo4')">Show me</button>
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
    padding: 1rem;
    border: 1px solid #0a3464;
    border-radius: 5px;
  }

  .option {
    justify-content: space-between;
    width: inherit;
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


