<template>
  <header :class="headerLayoutStyle">
    <nav
      class="frame-area-a Heading Heading-4xl font-medium fixed z-50"
      :class="headingInvertStyle"
    >
      <saber-link to="/">
        <template v-if="$route.path !== '/'">
          &#8592;
        </template>
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
      /* if (this.$route.path === "/") {
        return "frame frame--intro Block";
      } */
      /* if (this.$route.path === "/about") {
        return "frame frame--lede Block-t Block-md-b";
      } */
      return "frame frame--lede Block";
    },
    headingInvertStyle() {
      return this.invert && "text-white";
    },
    textColorStyle() {
      return this.invert ? "text-white opacity-75" : "text-gray-dark";
    },
  },
};
</script>
