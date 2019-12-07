<template>
  <header :class="headerLayoutStyle">
    <div class="frame-area-a">
      <h1 class="Heading Heading-4xl font-medium" :class="headingColorStyle">
        {{ page.title }}
      </h1>
      <PageTitleMeta
        v-if="showMeta"
        :page="page"
        :invert="invert"
        :class="textColorStyle"
        class="Space-sm-t"
      ></PageTitleMeta>
      <p class="Text-xl Block-xs-t lg:w-5/6" :class="textColorStyle">
        {{ page.lede }}
        <template v-if="$route.path === '/'">
          <saber-link to="/about" class="Link text-brand-red">
            Learn more &#8594;
          </saber-link>
        </template>
      </p>
      <!-- slot -->
      <slot></slot>
    </div>
  </header>
</template>

<script>
import PageTitleMeta from "../components/PageTitleMeta";

export default {
  components: {
    PageTitleMeta,
  },
  // props: ["page", "invert", "showMeta"],
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
  computed: {
    headerLayoutStyle() {
      // return this.$route.path === "/" ? "Block" : "Block-t Block-md-b";
      if (this.$route.path === "/") {
        return "frame frame--intro Block";
      }
      if (this.$route.path === "/about") {
        return "frame frame--lede Block-t Block-md-b";
      }
      return "frame frame--article";
    },
    headingColorStyle() {
      return this.invert && "text-white";
    },
    textColorStyle() {
      return this.invert ? "text-white opacity-75" : "text-gray-dark";
    },
  },
};
</script>
