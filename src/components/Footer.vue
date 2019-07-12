<template>
  <footer class="flex relative">
    <saber-link
      :to="link"
      :class="[linkTypography, spacerClasses]"
      class="h-full w-full"
    >
      <!-- next post -->
      <!-- <template v-if="$route.path.includes('blog') && nextpost"> -->
      <template v-if="nextpost && nextpost.link">
        <div class="container container--text">
          <hr v-if="nextpost && !nextpost.hero" class="border-b m-0">
          <!-- <p class="Text--base s-2xh">Next post:</p> -->
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
                <div class="container relative h-full flex items-center justify-center">
                  <div class="w-full container--text" :class="heroTitleColor">
                    <!-- post title -->
                    <p class="Text--base s-m">Next post:</p>
                    <h2 class="Display" itemprop="name headline">
                      {{ nextpost.title }}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- up -->
      <template v-else-if="$route.path === '/'">
        <span class="Logo-arrow mr-1">&#8593;</span>
        <span>Up</span>
      </template>
      <!-- CFd -->
      <template v-else>
        <span class="Logo-arrow mr-1">&#8592;</span>
        <span style="text-transform:initial">CFd</span>
      </template>
    </saber-link>
  </footer>
</template>

<script>
import Aspect from "./Aspect";
import ImageDynamic from "./ImageDynamic";

export default {
  components: {
    Aspect,
    ImageDynamic
  },
  props: {
    kind: String,
    /* posts: {
      type: Array,
      default: undefined
    }, */
    nextpost: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    spacerClasses() {
      return this.nextpost ? "Block-t" : "Block-lg";
    },
    blockColorClass() {
      return this.kind === "index" && "bg-brand-neutral";
    },
    linkTypography() {
      return !this.nextpost && "Nav-link justify-center";
    },
    link() {
      if (this.$route.path === "/") {
        return  "#top";
      }
      else if (this.nextpost && this.nextpost.link) {
        return this.nextpost.link;
      }
      return "/";
    },
    heroImageBlend() {
      return this.nextpost && this.nextpost.hero && this.nextpost.hero.imageBlend
      && "BlendImage"
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
  }
}
</script>

<style lang="postcss" scoped>
.BlendImage {
  @apply bg-text
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.BlendImage >>> img {
  opacity: 0.8;
}
</style>
