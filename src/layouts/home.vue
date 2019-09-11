<template>
  <Wrap :page="page" kind="index">
    <IndexHomeBlock :block="page.attributes" class="bg-one"></IndexHomeBlock>
    <IndexHomeBlock :block="page.attributes.projects" class="bg-two">
      <div class="Grid-extract--slide st-2xh">
        <vue-glide :options="options">
          <vue-glide-slide v-for="(post, index) in projectPosts" :key="index">
            <CardWithinSlide :key="post.attributes.permalink" :post="post">
            </CardWithinSlide>
          </vue-glide-slide>
          <!-- <template slot="control">
            <button data-glide-dir="<">&#8592; prev</button>
            <button data-glide-dir=">">next &#8594;</button>
          </template> -->
        </vue-glide>
      </div>
    </IndexHomeBlock>
    <IndexHomeBlock :block="page.attributes.writing" class="bg-three">
      <div class="Grid-extract--slide st-2xh">
        <vue-glide :options="options">
          <vue-glide-slide v-for="(post, index) in writingPosts" :key="index">
            <CardWithinSlide :key="post.attributes.permalink" :post="post">
            </CardWithinSlide>
          </vue-glide-slide>
          <!-- <template slot="control">
            <button data-glide-dir="<">&#8592; prev</button>
            <button data-glide-dir=">">next &#8594;</button>
          </template> -->
        </vue-glide>
      </div>
    </IndexHomeBlock>
    <IndexHomeBlock :block="page.attributes.newsletter" class="bg-four">
      <FormNewsletter class="st-2xh lg:w-9/12"></FormNewsletter>
    </IndexHomeBlock>
  </Wrap>
</template>

<script>
import CardWithinSlide from "../components/CardWithinSlide.vue";
import FormNewsletter from "../components/FormNewsletter";
import IndexHomeBlock from "../components/IndexHomeBlock.vue";
import Wrap from "../components/Wrap.vue";
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  components: {
    CardWithinSlide,
    FormNewsletter,
    IndexHomeBlock,
    Wrap,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
  props: ["page"],
  data() {
    return {
      options: {
        type: "carousel",
        autoplay: 6000,
        hoverpause: false,
        gap: 0,
        perView: 1,
        // this does NOT work…
        // https://antonreshetov.github.io/vue-glide/props/#breakpoints
        // 768: {
        //   perView: 1,
        // },
      },
    };
  },
  computed: {
    projectPosts() {
      return this.page.posts
        .filter(
          x =>
            x.attributes.category === "projects" &&
            x.attributes.tags.includes("featured")
        )
        .splice(0, 9);
    },
    writingPosts() {
      return this.page.posts
        .filter(x => x.attributes.category === "writing")
        .splice(0, 6);
    },
  },
  /* head() {
    return {
      htmlAttrs: {
        class: "bg-text",
      },
    };
  }, */
};
</script>

<style lang="postcss" scoped>
.Grid-extract--slide {
  @apply relative;
}
@media only screen and (min-width: 1400px) {
  .Grid-extract--slide {
    width: 840px;
  }
}
[data-glide-el="controls"] button {
  @apply absolute;
  @apply text-gray-600 tracking-wide;
  font-size: calc(theme(fontSize.sm) * var(--text-ratio));
  right: 3.5em;
  bottom: -1.5rem;
}
[data-glide-el="controls"] button:focus {
  @apply outline-none;
}
[data-glide-el="controls"] button + button {
  /* @apply ml-2; */
}
[data-glide-el="controls"] button:last-of-type {
  right: 0;
}
@screen lg {
  [data-glide-el="controls"] button {
    right: 3.5em;
    bottom: auto;
    top: calc(-3.25rem * var(--space-ratio));
  }
}
/*

  Block bgs

 */
/* .bg-one {
  background-color: rgba(152, 140, 118, 0.6);
  background-color: rgba(0, 0, 0, 0.1);
}
.bg-two {
  background-color: rgba(152, 140, 118, 0.5);
  background-color: transparent;
}
.bg-three {
  background-color: rgba(152, 140, 118, 0.4);
  background-color: rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 150, 136, 0.2);
}
.bg-four {
  background-color: rgba(152, 140, 118, 0.3);
  background-color: rgba(0, 0, 0, 0.05);
} */
/* .bg-one,
.bg-two,
.bg-three,
.bg-four {
  background: linear-gradient(0, transparent, rgba(0, 0, 0, 0.025));
  background: linear-gradient(22.5deg, rgba(0, 0, 0, 0.05), transparent);
} */
/*

  Fade hack
  https://github.com/glidejs/glide/issues/279#issuecomment-468204570

 */
>>> .glide__slides {
  transform: none !important;
  width: auto !important;
  display: block;
}
>>> .glide__slide {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity 1s;
}
>>> .glide__slide:first-child {
  position: relative;
}
>>> .glide__slide--active {
  z-index: 1;
  opacity: 1;
}
</style>
