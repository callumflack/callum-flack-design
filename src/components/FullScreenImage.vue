<template>
  <div class="absolute inset-0 Image">
    <ImageDynamic :src="selectedImage" cover></ImageDynamic>
    <div class="absolute inset-0 Image-blend"></div>
    <div class="absolute inset-0 Image-shade"></div>
  </div>
</template>

<script>
import ImageDynamic from "../components/ImageDynamic.vue";

export default {
  components: {
    ImageDynamic,
  },
  data() {
    return {
      images: [
        /* "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078960/okok/_sagatiba-bw-2000.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078960/okok/_sky-1500.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078960/okok/_millennius-detail-2000.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078960/okok/_hi-reversed-1500.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544180386/okok/_sagatiba-bw-2000-invert.jpg",
        "https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078960/okok/_decadence-13-reversed-1500.jpg", */
        "/images/_sky-1500.jpg",
        "/images/_decadence-13-reversed.jpg",
        "/images/_millennius-detail-2000.jpg",
        "/images/_sagatiba-bw-2000.jpg",
        "/images/_hi-reversed.jpg",
      ],
      testImage: "/images/_sagatiba-bw-2000.jpg",
      selectedImage: "",
    };
  },
  created() {
    /* https://stackoverflow.com/questions/45752960/how-to-get-random-element-in-vue-js */
    const idx = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[idx];
  },
};
</script>

<style lang="postcss">
/*
  Multiplied, randomised images
  1. inherit from home page class theme
 */
.Image {
  /* animation: bgcolor 2000ms cubic-bezier(0.19, 1, 0.22, 1), bgblur 1000ms cubic-bezier(0.19, 1, 0.22, 1); */
  @apply min-h-screen w-screen;
}

.Image-blend {
  background-color: var(--red); /* 1 */
  mix-blend-mode: multiply;
}
.Image-shade {
  /* background-color: rgba(37, 33, 33, 0.5); */
  background-color: rgba(0, 0, 0, 0.6);
}

@keyframes bgcolor {
  from {
    background-color: var(--c-bg);
  }
  to {
    background-color: var(--c-indexbg);
  }
}

/* only if bgimg on parent div */
@keyframes bgimg {
  from {
    background-image: initial;
  }
  to {
    background-image: url("/images/_sagatiba-bw-181201B.jpg");
  }
}

@keyframes bgblur {
  from {
    /* background-image: initial; */
    filter: url("#blur");
  }
  to {
    /* background-image: url("/images/_sagatiba-bw-181201B.jpg"); */
    filter: initial;
  }
}
</style>
