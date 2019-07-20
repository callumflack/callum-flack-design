<template>
  <div>
    <Nav :category="page.attributes.category" />
    <Header
      v-if="!$route.path.includes('blog')"
      :title="page.attributes.title"
      :lede="page.attributes.lede"
    />
    <main aria-label="Content">
      <div class="" :class="containerType">
        <slot></slot>
      </div>
    </main>
    <Footer :kind="kind" :nextpost="page.attributes.nextPost" />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Nav from "../components/Nav";

export default {
  components: {
    Footer,
    Header,
    Nav,
  },
  props: {
    page: Object,
    kind: String,
  },
  computed: {
    siteTitle() {
      return this.$siteConfig.title;
    },
    containerType() {
      if (this.$route.path === "/") {
        return;
      } else if (this.kind === "post") {
        return "container container--text";
      }
      return "container container--list";
    },
  },
  head() {
    const { excerpt } = this.page;
    const { title, pageTitle, layout } = this.page.attributes;
    let { description } = this.$siteConfig;
    if (layout === "page" || layout === "post") {
      if (excerpt) {
        description = excerpt.replace(/<(?:.|\n)*?>/gm, "");
      }
    }
    return {
      // title: title ? `${title} • ${this.siteTitle}` : this.siteTitle,
      title: pageTitle
        ? `${this.siteTitle} • ${pageTitle}`
        : `${title} • ${this.siteTitle}`,
      meta: [
        title
          ? {
              name: "twitter:title",
              content: `${title} • ${this.siteTitle}`,
            }
          : {
              name: "twitter:title",
              content: this.siteTitle,
            },
        description && {
          name: "description",
          content: description,
        },
        description && {
          name: "twitter:description",
          content: description,
        },
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
              href: this.$feed.permalink,
            },
          ].filter(Boolean)
        : [],
    };
  },
};
</script>

<style lang="postcss" scoped>
.design-hack {
  transform: translateY(-64px);
}
</style>
