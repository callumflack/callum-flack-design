<template lang="pug">
  figure(:class="figureClasses")
    .FlexEmbed(:class="[{ 'figure--frame': frame }]")
      .FlexEmbed-ratio.device-ratio
      .FlexEmbed-content
        video.device-position(autoplay, loop, :poster="poster", ref="videoref")
          source(
            :src="src",
            type="video/mp4"
          )
          | Your browser does not support the video tag. Please upgrade your browser.
        .pin.color-device(v-if="iphone")
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 1381">
            <path class="cls-1" d="M670,102C670,45.8,624.35,0,568.15,0H101.67C45.47,0,0,45.8,0,102V1279.91C0,1336.11,45.47,1381,101.67,1381H568.15c56.2,0,101.85-44.89,101.85-101.09ZM628.31,1210.53H41.69V168.24H628.31Z"/>
          </svg>
        .video-button-wrapper(:class="wrapButtonClasses")
          button(:class="playButtonClasses", @click="play")
            span.icon.icon--play-button
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 80 80" xml:space="preserve"><path d="M40 0C17.9 0 0 17.9 0 40c0 22.1 17.9 40 40 40s40-17.9 40-40C80 17.9 62.1 0 40 0zM40 78C19 78 2 61 2 40S19 2 40 2s38 17 38 38S61 78 40 78z"></path><polygon class="st0" points="33.9 51.4 51.1 39.6 33.9 28 "></polygon></svg>
</template>

<script scoped>
export default {
  name: "markdown-movie",
  components: {},
  computed: {
    figureClasses() {
      return [
        "figure",
        "device",
        {
          "figure--medium": this.medium,
          "figure--large": this.large,
          "device--iphone6": this.iphone,
          "device--ipad": this.ipad,
          "device--ipadLandscape": this.ipadLandscape,
          "device--laptop": this.laptop,
          "device--desktop": this.desktop
        }
      ];
    },
    wrapButtonClasses() {
      return [
        {
          "u-hiddenVisually": this.isActive,
          "is-dark": this.reverseButton
        }
      ];
    },
    playButtonClasses() {
      return [
        "video-button",
        {
          // "color-text": this.reverseButton
        }
      ];
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    play: function() {
      this.$refs.videoref.play();
      this.isActive = !this.isActive;

      // if (video.paused) {
      // } else {
      //   this.$refs.videoref.pause();
      // }
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
    desktop: Boolean,
    poster: String,
    src: String,
    reverseButton: Boolean
  }
};
</script>



<style scoped>
@import "../assets/styles/vars.css";

.frame {
  border: 1px solid var(--color-border);
}

.video-button-wrapper {
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  @media (--small-viewport) {
    display: none;
  }

  &.is-dark {
    background-color: rgba(0, 0, 0, 0.7);
  }
}

.video-button {
  color: var(--color-bg);
}

.icon--play-button {
  height: 74px;
  width: 74px;
}

/* 
 * Devices
 */

.device {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.device-position {
  width: 100%;
}

.device-style {
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

.device--iphone6 {
  max-width: 70%;

  @media (--small-viewport) {
    max-width: 358px;
  }

  & .device-ratio {
    padding-bottom: 205.81395%;
  }

  & .device-position {
    /* border: 1px solid var(--color-border); */
    margin-top: 25.2%;
    width: 87.45%;
  }

  /* https://codepen.io/jonitrythall/post/using-svg-stroke-attributes */
  /* & .device-style > svg {
    background-image: url("/images/device-iphone6-outline.svg");
    fill: none;
    stroke: var(--color-text);
    stroke-width: 1;
}*/
}

.device--ipadLandscape .device-ratio {
  padding-bottom: 74.75%; /*75.21*/
}

.device--ipad .device-ratio {
  padding-bottom: 126.953125%; /*1024 x 1300 not 1366*/
}

.device--laptop .device-ratio {
  padding-bottom: 69.25%;
}

.device--desktop .device-ratio {
  padding-bottom: 52.0833333%;
}
</style>
