<template>
  <div>
    <HeaderNav />
    <Header
      :title="page.attributes.title"
      :lede="page.attributes.lede"
      :newsletter="page.attributes.newsletter"
    />
    <main aria-label="Content">
      <div
        class="container"
        :class="containerType"
      >
        <slot></slot>
      </div>
    </main>
    <Footer
      :kind="kind"
      :nextpost="page.attributes.nextPost"
    />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import HeaderNav from "../components/HeaderNav";

export default {
  components: {
    Footer,
    Header,
    HeaderNav
  },
  props: {
    page: Object,
    kind: String
  },
  computed: {
    siteTitle() {
      return this.$siteConfig.title;
    },
    containerType() {
      return this.kind === "post" ? "container--text" : "container--list";
    },
    /* mainHomeClass() {
      // return this.$route.path === "/" && "bg-brand-neutral";
      // return this.page.attributes.type === "page" && "bg-brand-neutral";
      return this.kind === "index" && "bg-brand-neutral";
    } */
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
      title: pageTitle ?
        `${this.siteTitle} • ${pageTitle}`
        : `${title} • ${this.siteTitle}`,
      meta: [
        title ? {
          name: "twitter:title",
          content: `${title} • ${this.siteTitle}`
        } : {
          name: "twitter:title",
          content: this.siteTitle
        },
        description && {
          name: "description",
          content: description
        },
        description && {
          name: "twitter:description",
          content: description
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
              href: this.$feed.permalink
            }
          ].filter(Boolean)
        : []
    };
  },
};
</script>
