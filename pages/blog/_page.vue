<template lang="pug">
div(:class="projectPageClass")
  Nav

  .b-clearFixedNav.b-pb15
    Post(v-bind="page")

  footer.b-pb4
    .Container
      NewsletterSignupBlock

</template>

<script>
import Nav from "~/components/Nav.vue";
import NewsletterSignupBlock from "~/components/NewsletterSignupBlock.vue";
import Post from "~/components/Post.vue";

export default {
  layout: "blank",
  components: {
    Nav,
    Post,
    NewsletterSignupBlock
  },
  data() {
    return {
      page: {}
    };
  },
  computed: {
    projectPageClass() {
      return this.page.category === "project" && "page-project";
    }
  },
  async asyncData({ app, route }) {
    const page = await app.$content("/posts").get(route.path);

    return {
      page
    };
  },
  head() {
    return {
      title: `${this.page.title}—Callum Flack Design`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.page.title}—${this.page.lede}`
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
/* .page-blog-page >>> .figure {
  border: 1px solid var(--c-rule);
} */

.page-project {
  --c-projectbg: var(--c-neutral);
  background-color: var(--c-projectbg);
}

.page-project {
  & >>> .nuxt-link-active span,
  & >>> p a:not(.Button),
  & >>> .Text a:not(.Button),
  & >>> .Scope-post p a:not(.Button) {
    --underline-bgimg: var(--c-projectbg);
    --underline-hover: currentColor;
    text-shadow: initial;
  }
}

.page-project .open {
  --open-c-bg: var(--c-neutral);
}

.page-project .Block {
  --bg-block: transparent;
}
</style>
