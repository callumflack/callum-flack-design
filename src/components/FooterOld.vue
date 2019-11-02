<template>
  <footer class="flex relative">
    <!-- up -->
    <template v-if="$route.path === '/'">
      <a
        v-smooth-scroll="{ duration: 1000 }"
        href="#top"
        :class="[linkTypography, spacerClasses]"
        class="h-full w-full"
      >
        <span class="Logo-arrow mr-1">&#8593;</span>
        <span>Up</span>
      </a>
    </template>
    <!-- next post -->
    <template v-else-if="$route.path.includes('blog') && nextpost && nextpost.link">
      <saber-link
        :to="link"
        :class="[linkTypography, spacerClasses]"
        class="h-full w-full"
      >
        <div class="container container--text">
          <hr v-if="nextpost && !nextpost.hero" class="border-b border-text m-0" />
          <!-- <p class="Text--base s-2h">Next post:</p> -->
          <div class="Grid-extract--post">
            <div class="relative">
              <Aspect ratio="1/2" :class="heroImageBlend">
                <ImageDynamic
                  v-if="nextpost && nextpost.hero"
                  :src="nextpost.hero"
                  :alt="nextpost.title"
                />
              </Aspect>
              <div class="absolute inset-0">
                <div class="relative h-full flex items-center justify-center">
                  <div class="container container--text" :class="heroTitleColor">
                    <!-- post title -->
                    <p class="Text--base font-medium s-m">Next post:</p>
                    <h2 class="Display s-2h" itemprop="name headline">
                      {{ nextpost.title }}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </saber-link>
    </template>
    <!-- CFd -->
    <template v-else>
      <saber-link to="/" :class="[linkTypography, spacerClasses]" class="h-full w-full">
        <span class="Logo-arrow mr-1">&#8592;</span>
        <span style="text-transform:initial">Home</span>
      </saber-link>
    </template>
  </footer>
</template>

<script>
import Aspect from "./Aspect";
import ImageDynamic from "./ImageDynamic";
import Vue from "vue";
import vueSmoothScroll from "vue-smooth-scroll";
Vue.use(vueSmoothScroll);

export default {
  components: {
    Aspect,
    ImageDynamic,
  },
  props: {
    kind: String,
    /* posts: {
      type: Array,
      default: undefined
    }, */
    nextpost: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    spacerClasses() {
      return this.nextpost ? "Block-t" : "Block-lg";
    },
    /* blockColorClass() {
      return this.kind === "index" && "bg-brand-neutral";
    }, */
    linkTypography() {
      return !this.nextpost && "Nav-link justify-center";
    },
    link() {
      /* if (this.$route.path === "/") {
        return  "#top";
      }
      else if (this.nextpost && this.nextpost.link) {
        return this.nextpost.link;
      }
      return "/"; */
      return this.nextpost && this.nextpost.link;
    },
    heroImageBlend() {
      return (
        this.nextpost &&
        this.nextpost.hero &&
        this.nextpost.hero.imageBlend &&
        "BlendImage"
      );
    },
    heroTitleColor() {
      return this.nextpost && this.nextpost.hero && "text-white";
    },
    // currentPost() {
    //   return this.posts
    //     .find(x => x.attributes.permalink === this.$route.path)
    //   // if (this.$route.path.includes('blog')) {

    //   // }
    //   // return null;
    // }
  },
};
</script>

<style lang="postcss" scoped>
.BlendImage {
  @apply bg-text
  /* background-color: rgba(0, 0, 0, 0.2); */;
}
.BlendImage >>> img {
  opacity: 0.8;
}
</style>
