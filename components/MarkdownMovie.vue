<template lang="pug">
  figure(:class="figureClasses")
    .FlexEmbed(:class="[{ 'Figure--frame': frame }]")
      .FlexEmbed-ratio.Device-ratio
      .FlexEmbed-content
        video.Device-position(autoplay="", loop="")
          source(
            :src="src",
            type="video/mp4"
          )
          | Your browser does not support the video tag. Please upgrade your browser.
        .u-posPin.u-colorWhite(v-if="iphone")
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 1381">
            <path class="cls-1" d="M670,102C670,45.8,624.35,0,568.15,0H101.67C45.47,0,0,45.8,0,102V1279.91C0,1336.11,45.47,1381,101.67,1381H568.15c56.2,0,101.85-44.89,101.85-101.09ZM628.31,1210.53H41.69V168.24H628.31Z"/>
          </svg>
</template>

<script scoped>
export default {
  name: "markdown-movie",
  components: {},
  computed: {
    figureClasses() {
      return [
        "Figure",
        "Block--halfSandwich",
        "Device",
        {
          "Figure--medium": this.medium,
          "Figure--large": this.large,
          "Device--iphone6": this.iphone,
          "Device--ipad": this.ipad,
          "Device--ipadLandscape": this.ipadLandscape,
          "Device--laptop": this.laptop
        }
      ];
    }
  },
  props: {
    medium: Boolean,
    large: Boolean,
    frame: Boolean,
    iphone: Boolean,
    ipadLandscape: Boolean,
    ipad: Boolean,
    laptop: Boolean,
    src: String
  }
};
</script>



<style scoped>
@import "../assets/styles/vars.css";

.frame {
  border: 1px solid var(--color-border);
}

/* 
 * Devices
 */

.Device {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.Device-position {
  width: 100%;
}

.Device-style {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 0;
}

.Device--iphone6 {
  max-width: 358px;

  & .Device-ratio {
    padding-bottom: 205.81395%;
  }

  & .Device-position {
    border: 1px solid var(--color-border);
    margin-top: 25.2%;
    width: 87.45%;
  }

  /* https://codepen.io/jonitrythall/post/using-svg-stroke-attributes */
  & .Device-style > svg {
    /* background-image: url("/images/device-iphone6-outline.svg"); */
    /* fill: none;
    stroke: var(--color-text);
    stroke-width: 1; */
  }
}

.Device--ipadLandscape .Device-ratio {
  padding-bottom: 74.75%; /*75.21*/
}

.Device--ipad .Device-ratio {
  padding-bottom: 126.953125%; /*1024 x 1300 not 1366*/
}

.Device--laptop .Device-ratio {
  padding-bottom: 69.25%;
}
</style>
