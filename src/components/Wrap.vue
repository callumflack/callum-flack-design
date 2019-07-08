<template>
  <div>
    <Header
      :site-title="siteTitle"
      :title="page.attributes.title"
      :lede="page.attributes.lede"
      :newsletter="page.attributes.newsletter"
      :category="page.attributes.category"
    />
    <main aria-label="Content" :class="mainHomeClass">
      <div
        class="container"
        :class="containerType"
      >
        <slot></slot>
      </div>
    </main>
    <Footer
      :kind="kind"
      :posts="page.posts"
      :nextpost="page.attributes.nextPost"
    />
  </div>
</template>

<script>
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
  computed: {
    siteTitle() {
      return this.$siteConfig.title || "Your Awesome Title";
    },
    containerType() {
      return this.kind === "post" ? "container--text" : "container--list";
    },
    mainHomeClass() {
      // return this.$route.path === "/" && "bg-brand-neutral";
      // return this.page.attributes.type === "page" && "bg-brand-neutral";
      return this.kind === "index" && "bg-brand-neutral";
    }
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
      title: title ? `${title} • ${this.siteTitle}` : this.siteTitle,
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
};
</script>
