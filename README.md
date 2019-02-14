# vue-accessibility-demo
Demo for Vue plugin for m16y - media accessibility for visually impaired user support.

It will inject a small widget with basic settings to for helping visually impaired user, including:
1. Low visions (contrast sensitivy, brightness sensitivity, etc)
2. Color blindness (texture support)

## Functionalities
![screenshot of plugin UI](https://res.cloudinary.com/mayashavin/image/upload/w_250/v1550135241/Screen_Shot_2019-02-14_at_10.05.40.png)

### Brightness control
Allow user to change the brightness of the whole app.
Default: `100%`

# Contrast control
Allow user to change the contrsat of the whole app.
Default: `100%`

### Dark mode (Night mode)
Allow user to switch the app to dark theme, which is easier to read.

### Color blind mode
* Allow user to enable color blind mode for images throughout the app. It will add texture to differentiate similar colors (red-green).

* Currently only works when image is rendered using `image-wrapper` component.

### Grayscale mode
Allow user to switch the app to grayscale color theme.

## Technologies used
[Vue](https://vuejs.com)

UI Components currently using [Vuetify](https://vuetifyjs.com) 

![UI Library](https://res.cloudinary.com/mayashavin/image/upload/w_100/v1550136562/vuetify_icon.png)

Image manipulation support for color blind and night mode using [Cloudinary Vue SDK - Beta](https://cloudinary.com)

![Image manipulation](https://cloudinary-res.cloudinary.com/image/upload/w_250/v1538583988/cloudinary_logo_for_white_bg.png)

And of course a bunch of other automation tools and JavaScript, CSS 👩‍💻

## Version
0.0.1

#####_Coming soon_
- Auto modify all image tags when plugin is enabled.
- Warm lighting mode


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
