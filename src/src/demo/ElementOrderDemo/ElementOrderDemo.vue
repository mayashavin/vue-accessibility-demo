<template>
  <div class="demo-container">
    <h1>Demo: Elements Order & Usage 🤓</h1>
    <div class="toggle-wrapper">
      <h3 :class="{ inactive: cssEnabled }">CSS Disabled</h3>
      <label class="switch">
        <input type="checkbox" v-model="cssEnabled"
role="switch"
:data-aria-selected="cssEnabled"  
        >
        <span class="slider round"></span>
      </label>
      <h3 :class="{ inactive: !cssEnabled }">CSS Enabled</h3>
    </div>    
    <ElementsOrder :cssEnabled="cssEnabled"/>
  </div>
</template>
<script>
import ElementsOrder from '@/components/ElementOrderDemo/ElementsOrder';

//  aria-label="heading"
//  :data-aria-selected="cssEnabled"
export default {
  name: 'ElementOrderDemo',
  components: { ElementsOrder },
  data() {
    return {
      cssEnabled: true,
    };
  },
  methods: {
    toggleCSS() {
      this.cssEnabled = !this.cssEnabled;
    },
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
  .toggle-wrapper {
    justify-content: center;
    align-items: center;
    display: flex;

    .inactive {
      color: lightgray;
      font-weight: normal;  
    }
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin: 0 1rem;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>

