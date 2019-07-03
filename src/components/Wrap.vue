<template>
  <div>
    <Header
      :siteTitle="siteTitle"
      :title="page.attributes.title"
      :lede="page.attributes.lede"
      :category="page.attributes.category"
    />
    <main aria-label="Content" class="Block-lg-b">
      <div
        class="container"
        :class="containerKind"
      >
        <slot></slot>
      </div>
    </main>
    <!-- <Footer :siteTitle="siteTitle"/> -->
  </div>
</template>

<script>
import variables from "saber/variables";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

export default {
  components: {
    Footer,
    Header,
  },

  props: {
    page: Object,
    kind: String
  },

  head() {
    const { excerpt } = this.page;
    const { title, layout } = this.page.attributes;
    let { description } = this.$siteConfig;
    if (layout === "page" || layout === "post") {
      if (excerpt) {
        description = excerpt.replace(/<(?:.|\n)*?>/gm, "");
      }
    }
    return {
      title: title ? `${title} - ${this.siteTitle}` : this.siteTitle,
      meta: [
        description && {
          name: "description",
          content: description
        }
      ].filter(Boolean),
      link: this.$feed
        ? [
            {
              rel: "alternate",
              title: `${this.siteTitle} - Feed`,
              type: `application/${
                this.$feed.type === "atom"
                  ? "atom+xml"
                  : this.$feed.type === "rss"
                  ? "rss+xml"
                  : "json"
              }`,
              href: this.$feed.permalink
            }
          ].filter(Boolean)
        : []
    };
  },

  computed: {
    siteTitle() {
      return this.$siteConfig.title || "Your Awesome Title";
    },
    containerKind() {
      return this.kind === 'post' ? 'container--text' : 'container--list';
    }
  }
};
</script>
