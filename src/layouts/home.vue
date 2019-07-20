<template>
  <Wrap :page="page" kind="index">
    <IndexHomeBlock :block="page.attributes"> </IndexHomeBlock>
    <IndexHomeBlock :block="page.attributes.projects">
      <vue-glide :options="options" class="st-2xh">
        <vue-glide-slide v-for="(post, index) in projectsPosts" :key="index">
          <CardWithinSlide :key="post.attributes.permalink" :post="post">
          </CardWithinSlide>
        </vue-glide-slide>
        <template slot="control">
          <button data-glide-dir="<">prev</button>
          <button data-glide-dir=">">next</button>
        </template>
      </vue-glide>
    </IndexHomeBlock>
    <IndexHomeBlock :block="page.attributes.writing">
      <vue-glide :options="options" class="st-2xh">
        <vue-glide-slide v-for="(post, index) in writingPosts" :key="index">
          <CardWithinSlide :key="post.attributes.permalink" :post="post">
          </CardWithinSlide>
        </vue-glide-slide>
        <template slot="control">
          <button data-glide-dir="<">prev</button>
          <button data-glide-dir=">">next</button>
        </template>
      </vue-glide>
    </IndexHomeBlock>
    <IndexHomeBlock :block="page.attributes.newsletter">
      <FormNewsletter class="st-2xh lg:w-9/12"></FormNewsletter>
    </IndexHomeBlock>
  </Wrap>
</template>

<script>
import CardWithinSlide from "../components/CardWithinSlide.vue";
import IndexHomeBlock from "../components/IndexHomeBlock.vue";
import Wrap from "../components/Wrap.vue";
import FormNewsletter from "../components/FormNewsletter";
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  components: {
    CardWithinSlide,
    FormNewsletter,
    IndexHomeBlock,
    // SliderGlidePosts,
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
};
</script>
