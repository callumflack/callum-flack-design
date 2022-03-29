<template>
  <div class="AspectMedia Grid-extract--pos">
    <Aspect figure :ratio="ratio" :style="aspectStyle" :class="aspectClasses">
      <!-- iphone shape -->
      <div v-show="iphone" class="AspectRatio-object text-text">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 670 1381"
        >
          <path
            d="M670,102C670,45.8,624.35,0,568.15,0H101.67C45.47,0,0,45.8,0,102V1279.91C0,1336.11,45.47,1381,101.67,1381H568.15c56.2,0,101.85-44.89,101.85-101.09Z"
          />
        </svg>
      </div>
      <!-- loading message -->
      <!-- :class="{ 'bg-text': !iphone }" -->
      <div class="absolute inset-0 flex justify-center items-center">
        <div class="Meta flex">
          Video loading…
          <!-- <Loader /> -->
        </div>
      </div>
      <!-- if vimeo -->
      <div v-if="vimeo" class="absolute inset-0 Vimeo" :class="{ Frame: frame }">
        <iframe
          :src="vimeoSrc"
          width="100%"
          height="100%"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <!-- else local video -->
      <div v-else class="absolute inset-0" :class="{ Frame: frame }">
        <video
          ref="videoRef"
          src=""
          class="device-position"
          playsinline
          autoplay
          muted
          loop
          :poster="poster"
        >
          <source :src="src" type="video/mp4" />
          Your browser does not support the video tag. Please upgrade your browser.
        </video>
      </div>
      <!-- <div class="video-button-wrapper" :class="wrapButtonClasses">
        <button :class="playButtonClasses" @click="play">
          <div class="icon icon--play-button">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 80 80" xml:space="preserve"><path d="M40 0C17.9 0 0 17.9 0 40c0 22.1 17.9 40 40 40s40-17.9 40-40C80 17.9 62.1 0 40 0zM40 78C19 78 2 61 2 40S19 2 40 2s38 17 38 38S61 78 40 78z"></path><polygon class="st0" points="33.9 51.4 51.1 39.6 33.9 28 "></polygon></svg>
          </div>
        </button>
      </div> -->
    </Aspect>

    <!-- caption slot -->
    <slot></slot>
  </div>
</template>

<script>
/*

  Autoplay videos need to be muted
  https://developers.google.com/web/updates/2017/09/autoplay-policy-changes

  Embedding background vimeos:
  https://help.vimeo.com/hc/en-us/articles/115011183028-Embedding-background-videos

  If you have more than one video autoplaying on a particular page, you will also need to include autopause=0
  https://help.vimeo.com/hc/en-us/articles/115004485728-Autoplaying-and-looping-embedded-videos

*/
import Aspect from "./Aspect";
// import Loader from "./Loader";

export default {
  components: {
    Aspect,
  },
  props: {
    showControls: Boolean,
    desktop: Boolean,
    frame: Boolean,
    ipad: Boolean,
    ipadLandscape: Boolean,
    iphone: Boolean,
    laptop: Boolean,
    poster: String,
    ratio: String,
    reverseOverlay: Boolean,
    reverseButton: Boolean,
    src: String,
    vimeo: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    vimeoSrc() {
      return `https://player.vimeo.com/video/${this.src}${
        this.showControls ? "" : "?background=1"
      }`;
    },
    aspectClasses() {
      return [
        "device",
        {
          "device--iphone6": this.iphone,
        },
      ];
    },
    /* override `Aspect` ratio if iphone */
    aspectStyle() {
      if (this.iphone) {
        /* return "padding-bottom: 205.81395%"; */ /* if not within .Aspect… */
        return "padding-bottom: 100%";
      }
      return null;
    },
    /* wrapButtonClasses() {
      return [
        {
          "u-hiddenVisually": this.isActive,
          "is-dark": this.reverseOverlay
        }
      ];
    },
    playButtonClasses() {
      return [
        "video-button",
        {
          "c-text": this.reverseButton
        }
      ];
    } */
  },
  /* methods: {
    play: function() {
      this.$refs.videoRef.play();
      this.isActive = !this.isActive;

      if (video.paused) {
      } else {
        this.$refs.videoRef.pause();
      }
    }
  } */
};
</script>

<style lang="postcss" scoped>
.video-button-wrapper {
  @apply absolute inset-0 flex justify-center items-center;
}

.video-button-wrapper.is-dark {
  background-color: rgba(0, 0, 0, 0.7);
}

@screen sm {
  .video-button-wrapper {
    @apply hidden;
  }
}

.video-button {
  @apply text-brand-bg;
}

.icon--play-button {
  @apply text-brand-bg;
  border-radius: 50%;
  height: 74px;
  width: 74px;
}

/* Frame without stuffing up the aspect ratio */
.Frame:after {
  @apply absolute inset-0 border border-gray-400;
  content: "";
  z-index: 11;
}

/*
 * Devices
 */

.device {
  @apply mx-auto text-center;
}

.device-position {
  @apply w-full;
}

.device-style {
  @apply absolute inset-0 m-auto;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.device--iphone6 {
  @apply w-full;
  max-width: 70%;
  /* reset `.figure--textColumnImage` */
  left: initial;
}

.device--iphone6 .device-position,
.device--iphone6 iframe {
  @apply m-auto;
  width: 87.45%;
}

.device--iphone6 .device-position {
  margin-top: 25.2%;
}

/* https://codepen.io/jonitrythall/post/using-svg-stroke-attributes */
/* .device--iphone6 .device-style > svg {
  background-image: url("/images/device-iphone6-outline.svg");
  fill: none;
  stroke: var(--c-text);
  stroke-width: 1;
}*/

@screen sm {
  .device--iphone6 {
    /* max-width: 358px; */ /* if not within Aspect */
    max-width: 341.5px;
  }
}

.device--home {
  @apply w-full m-0;
  left: auto;
}
</style>
