<template>
  <header class="frame frame--lede" :class="blockStyle">
    <div class="frame-area-a">
      <h1 class="Heading Heading-4xl font-medium" :class="headingColorStyle">
        {{ page.title }}
      </h1>
      <PageTitleMeta
        v-if="showMeta"
        :page="page"
        :invert="invert"
        :class="textColorStyle"
        class="Space-t"
      ></PageTitleMeta>
    </div>
    <p class="frame-area-b" :class="textColorStyle">
      {{ page.lede }}
      <template v-if="$route.path === '/'">
        <saber-link to="/about" class="Link text-brand-red">
          Learn more &#8594;
        </saber-link>
      </template>
    </p>
  </header>
</template>

<script>
import PageTitleMeta from "../components/PageTitleMeta";

export default {
  components: {
    PageTitleMeta,
  },
  props: ["page", "invert", "showMeta"],
  computed: {
    blockStyle() {
      // return this.$route.path === "/" ? "Block2" : "Block2-t Block2-md-b";
      if (this.$route.path === "/") {
        return "Block2";
      }
      if (this.$route.path === "/about") {
        return "Block2-t Block2-md-b";
      }
      return "";
    },
    headingColorStyle() {
      return this.invert && "text-white";
    },
    textColorStyle() {
      return this.invert ? "text-white opacity-75" : "text-gray-600";
    },
  },
};
</script>
