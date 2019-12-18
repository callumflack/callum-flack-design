<template>
  <header class="relative">
    <!-- hero image slot -->
    <slot name="image"></slot>
    <!-- title block -->
    <div class="frame frame--lede relative" :class="headerLayoutStyle">
      <nav
        class="frame-area-a Heading Heading-4xl font-medium fixed z-50 Logo"
        :class="[headingInvertStyle, scrollInvertStyle]"
      >
        <a v-if="$route.path === '/'" v-smooth-scroll="{ duration: 1000 }" href="#top">
          CFd
        </a>
        <saber-link v-else to="/">
          <!-- &#8592; -->
          CFd
        </saber-link>
      </nav>
      <div class="frame-area-b">
        <h1 class="Heading Heading-4xl font-medium" :class="headingInvertStyle">
          {{ page.title }}
        </h1>
        <PageTitleMeta
          v-if="showMeta"
          :page="page"
          :invert="invert"
          :class="[textInvertStyle, { 'opacity-75': invert }]"
          class="Space-sm-t"
        ></PageTitleMeta>
        <p v-if="page.lede" class="Text-xl Block-xs-t" :class="textInvertStyle">
          {{ page.lede }}
          <template v-if="$route.path === '/'">
            <saber-link to="/about" class="Link text-brand-red">
              Learn more &#8594;
            </saber-link>
          </template>
        </p>
        <!-- default slot -->
        <slot></slot>
      </div>
      <!-- intersection-observer target -->
      <div ref="observe" class="io-target"></div>
    </div>
  </header>
</template>

<script>
import Vue from "vue";
import PageTitleMeta from "../components/PageTitleMeta";
import vueSmoothScroll from "vue-smooth-scroll";
Vue.use(vueSmoothScroll);

export default {
  components: {
    PageTitleMeta,
  },
  props: {
    page: Object,
    invert: {
      type: Boolean,
      default: false,
    },
    showMeta: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    visible: false,
  }),
  computed: {
    headerLayoutStyle() {
      if (this.$route.path === "/about") {
        return "Block-t Block-sm-b";
      }
      return "Block";
    },
    headingInvertStyle() {
      return this.invert && "text-white";
    },
    scrollInvertStyle() {
      return this.$route.path !== "/about" && !this.visible && "text-black-important";
    },
    textInvertStyle() {
      return this.invert ? "text-white" : "text-gray-dark";
      /* if (this.$route.path === "/about") {
        return "text-white";
      } else if (this.invert) {
        return "text-white opacity-100";
      }
      return "text-gray-dark"; */
    },
  },
  mounted() {
    if (this.$route.path !== "/" || this.$route.path !== "/about") {
      // use i-o to toggle CFd logo in <PageTitle> when it leaves the viewport
      // https://www.notion.so/callum/Intersection-observer-use-in-Vue-ff50d8e8e79647b7bccfbe861b2eaf5b
      const io = new IntersectionObserver(entries => {
        // Log available data when an intersection happens
        // console.log(entries);
        // Element enters the viewport
        if (entries[0].intersectionRatio !== 0) {
          this.visible = true;
          // Element leaves the viewport
        } else {
          this.visible = false;
        }
      });

      // Elements to be observed
      const box = this.$refs.observe;

      // Start observing box
      io.observe(box);
    }
  },
};
</script>

<style lang="postcss">
/* IO thinga */
.io-target {
  @apply absolute;
  bottom: 9vh;
  /* height: 2px;
  width: 2px;
  background-color: salmon; */
}
.text-black-important {
  @apply text-black !important;
  /* filter: invert(1); */
}
/* .Logo {
  background-clip: text;
  color: transparent;
  filter: invert(1) grayscale(1) contrast(9);
} */
</style>
