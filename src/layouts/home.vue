<template>
  <Wrap :page="page">
    <header class="frame frame--lede Block2">
      <h1 class="Text-sm frame-area-a">{{ page.title }}</h1>
      <p class="Block2-sm-t frame-area-b">
        {{ page.lede }}
        <saber-link to="/about" class="text-gray">
          Learn more
          <icon name="add-circle-outline" class="Text-button"></icon>
        </saber-link>
      </p>
    </header>
  </Wrap>
</template>

<script>
import Wrap from "../components/Wrap2.vue";

export default {
  components: {
    Wrap,
  },
  props: ["page"],
  // transition: "intro"
  /* transition(to, from) {
    // return a string or object
    if (!from) {
      return "slide-left";
    }
    if (to === "/about") {
      return "slide-right";
    }
    // return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  }, */
};
</script>
