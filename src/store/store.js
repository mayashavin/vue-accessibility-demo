const hiddenStore = Object.freeze({
  state: {
    colorBlind: false,
    nightMode: false,
    grayscale: false,
    brightness: 100,
    contrast: 100,
  },
});

export default {
  get colorBlind() {
    return hiddenStore.state.colorBlind;
  },
  set colorBlind(supportColorBlind) {
    hiddenStore.state.colorBlind = supportColorBlind;
  },
  get nightMode() {
    return hiddenStore.state.nightMode;
  },
  set nightMode(isNightMode) {
    hiddenStore.state.nightMode = isNightMode;
  },
  get grayscale() {
    return hiddenStore.state.grayscale;
  },
  set grayscale(isGrayscaleMode) {
    hiddenStore.state.grayscale = isGrayscaleMode;
  },
  get brightness() {
    return hiddenStore.state.brightness;
  },
  set brightness(brightness) {
    hiddenStore.state.brightness = brightness;
  },
  get contrast() {
    return hiddenStore.state.contrast;
  },
  set contrast(contrast) {
    hiddenStore.state.contrast = contrast;
  },
};
