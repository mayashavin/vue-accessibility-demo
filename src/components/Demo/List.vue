<template>
  <div class="demo-container">
    <h1 v-text="title" v-if="title"></h1>
    <div v-for="(value, index) in list" :key="index">
      <slot v-bind="value"/>
    </div>
  </div>    
</template>
<script>
export default {
  name: 'List',
  props: {
    title: String,
    list: Array,
  },
  data() {
    return {};
  },
};
</script>


