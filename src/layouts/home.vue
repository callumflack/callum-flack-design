<template>
  <Wrap :page="page" kind="index">
    <IndexHomeBlock :block="page.attributes"></IndexHomeBlock>
    <IndexHomeBlock :block="page.attributes.projects">
      <div class="Grid-extract--slide st-2xh">
        <vue-glide :options="options">
          <vue-glide-slide v-for="(post, index) in projectsPosts" :key="index">
            <CardWithinSlide :key="post.attributes.permalink" :post="post">
            </CardWithinSlide>
          </vue-glide-slide>
          <template slot="control">
            <button data-glide-dir="<">&#8592; prev</button>
            <button data-glide-dir=">">next &#8594;</button>
          </template>
        </vue-glide>
      </div>
    </IndexHomeBlock>
    <IndexHomeBlock :block="page.attributes.writing">
      <div class="Grid-extract--slide st-2xh">
        <vue-glide :options="options">
          <vue-glide-slide v-for="(post, index) in writingPosts" :key="index">
            <CardWithinSlide :key="post.attributes.permalink" :post="post">
            </CardWithinSlide>
          </vue-glide-slide>
          <template slot="control">
            <button data-glide-dir="<">&#8592; prev</button>
            <button data-glide-dir=">">next &#8594;</button>
          </template>
        </vue-glide>
      </div>
    </IndexHomeBlock>
    <IndexHomeBlock :block="page.attributes.newsletter">
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
        autoplay: 5000,
        hoverpause: false,
        gap: 0,
        // perView: 3,
        300: {
          perView: 1,
        },
        600: {
          perView: 2,
        },
        1024: {
          perView: 3,
        },
      },
    };
  },
  computed: {
    /* recentPosts() {
      return this.page.posts.splice(0, 6);
    }, */
    featuredPosts() {
      return this.page.posts.filter(x => x.attributes.tags.includes("featured"));
    },
    projectsPosts() {
      return this.page.posts
        .filter(x => x.attributes.category === "projects")
        .splice(0, 6);
    },
    writingPosts() {
      return this.page.posts
        .filter(x => x.attributes.category === "writing")
        .splice(0, 6);
    },
  },
  head() {
    return {
      htmlAttrs: {
        class: "yo",
      },
    };
  },
};
</script>

<style lang="postcss">
.yo {
  @apply bg-text;
}
</style>

<style lang="postcss" scoped>
.Grid-extract--slide {
  @apply relative;
}
@media only screen and (min-width: 1400px) {
  .Grid-extract--slide {
    width: 1040px;
  }
}

[data-glide-el="controls"] button {
  @apply absolute;
  @apply text-gray-600 tracking-wide;
  font-size: calc(theme(fontSize.sm) * var(--text-ratio));
  right: 5em;
  top: calc(-3.25rem * var(--space-ratio));
}
[data-glide-el="controls"] button:focus {
  @apply outline-none;
}
[data-glide-el="controls"] button + button {
  /* @apply ml-2; */
}
[data-glide-el="controls"] button:last-of-type {
  right: 1.5em;
}
</style>
