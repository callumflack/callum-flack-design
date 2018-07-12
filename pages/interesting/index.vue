<template lang="pug">
div
  c-interesting
  
  // main.block--pb7.block--matchFixedMenuTop(role="main")
    .container.container--newsletter
      c-postexcerpt(
        v-if="post.published"
        v-for="post in posts"
        :key="post.permalink"
        :link="post.permalink"
        :title="post.title"
        :date="post.date"
        :summary="post.summary"
      )
      
      //- .InterludeSpace
        hr
        .block--my7
          p.Meta.Meta--isParagraph.c-textLight.u-textCenter.m-xAuto.u-size3of4
            span.u-block
              nuxt-link.u-linkClean(to="/about") Callum Flack
              | &nbsp;is writing about the things inbetween. Here's the most recent posts:
        hr
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import NewsletterSignup from "~/components/NewsletterSignup.vue";

export default {
  name: "newsletter-index",
  components: {
    "c-pageheading": PageHeading,
    "c-postexcerpt": PostExcerpt,
    "c-interesting": NewsletterSignup
  },
  head() {
    return {
      title: "Blog – Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Selected writing by Callum Flack about digital design, user experience & code"
        }
      ]
    };
  },
  data() {
    return {
      posts: []
    };
  },
  async asyncData({ app }) {
    const posts = await app.$content("/newsletter").getAll();

    return {
      posts
    };
  }
};
</script>

<style scope>
@import "../../assets/styles/variables.css";

.Hero:before {
  background-color: rgba(0, 0, 0, 0.7);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.Hero {
  background-color: var(--c-text);
  background-image: url(/images/_slump.jpg);
  background-image: url(/images/_overcast-night.jpg);
  background-image: url(/images/_spys.jpg);
  background-position-y: 80%;
  position: relative;
}

.Hero p,
.Hero {
  color: var(--c-bg);
}
</style>
