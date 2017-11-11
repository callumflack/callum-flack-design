<template lang="pug">
  figure(:class="figureClasses")
    .FlexEmbed(:class="[{ 'frame': frame }]")
      div(:class="ratioClasses")
      .FlexEmbed-content
        video(:class="screenClasses", autoplay="", loop="")
          source(
            :src="src",
            type="video/mp4"
          )
          | Your browser does not support the video tag. Please upgrade your browser.
        .u-posPin.u-colorBorder(v-if="iphone")
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 1381">
            <path class="cls-1" d="M670,102C670,45.8,624.35,0,568.15,0H101.67C45.47,0,0,45.8,0,102V1279.91C0,1336.11,45.47,1381,101.67,1381H568.15c56.2,0,101.85-44.89,101.85-101.09ZM628.31,1210.53H41.69V168.24H628.31Z"/>
          </svg>
</template>



<script scoped>
export default {
  name: 'movie-in-figure',
  components: {
  },
  computed: {
    figureClasses () {
      return ['Figure', {
        'Figure--mobile': this.iphone,
        'Figure--medium': this.medium,
        'Figure--large': this.large
      }]
    },
    ratioClasses () {
      return ['FlexEmbed-ratio', {
        'iphone': this.iphone,
        'ipad': this.ipad,
        'ipadLandscape': this.ipadLandscape,
        'laptop': this.laptop
      }]
    },
    screenClasses () {
      return ['screen', {
        'screen--iphone': this.iphone
      }]
    }
  },
  props: {
    medium: Boolean,
    large: Boolean,
    frame: Boolean,
    iphone: Boolean,
    ipad: Boolean,
    ipadLandscape: Boolean,
    laptop: Boolean,
    src: String
  }
}
</script>



<style scoped>
@import "../assets/styles/vars.css";

.iphone { padding-bottom: 205.81395%; }
.ipad { padding-bottom: 126.953125%; } /*1024 x 1300 not 1366*/
.ipadLandscape { padding-bottom: 74.75%; } /*75.21*/
.laptop { padding-bottom: 69.25%; }

.frame {
  border: 1px solid var(--color-border);
}

.screen {
  width: 100%;
}

.screen--iphone {
  margin-top: 25.25%;
  width: 87.6%;
}
</style>
