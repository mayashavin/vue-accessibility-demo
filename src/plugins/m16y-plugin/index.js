import AccessibilityControls from '@/plugins/m16y-plugin/AccessibilityControls/AccessibilityControls';
import ImageWrapper from '@/plugins/m16y-plugin/AccessibilityControls/ImageWrapper';

/* eslint-disable*/
const defaults = {
  data: {
    colorBlind: false,
    nightMode: false,
    grayscale: false,
    brightness: 100,
    contrast: 100,
    changeBrightness(percent) {
      document.body.style.setProperty('--brightness', percent);
    },
    changeContrast(percent) {
      document.body.style.setProperty('--contrast', percent);
    },
    toogleGrayscaleMode(isGrayscaleOn) {
      document.body.style.setProperty('--grayscale', isGrayscaleOn ? 1 : 0);
    },
    switchNightMode(isDarkMode) {
      this.nightMode = isDarkMode;
      document.body.style.setProperty('--invert', isDarkMode ? 1 : 0);
    },
    supportColorBlind(isColorBlind) {
      this.colorBlind = isColorBlind;
    },
  },
}
const M16yPlugin = {
  install: function install(Vue) {
    if (this.installed) return;

    this.installed = true;

    const root = new Vue({
      data: {
        ...defaults.data,
      },
      render: createElement => createElement(AccessibilityControls),
    });

    root.$on('brightness', defaults.data.changeBrightness);
    root.$on('contrast', defaults.data.changeContrast);
    root.$on('grayscale', defaults.data.toogleGrayscaleMode);
    root.$on('nightMode', defaults.data.switchNightMode);
    root.$on('colorBlind', defaults.data.supportColorBlind);

    Vue.component('imageWrapper', ImageWrapper);

    Vue.directive("accessCtrls", {
      bind(el) {
        el.classList.add('accessibility--enabled');
        root.$mount(el.appendChild(document.createElement('div')));
      }
    });

    Vue.prototype.$m16y = root;
  },
  version: '0.0.1',
};

export default M16yPlugin;
