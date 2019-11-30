<template>
  <!-- <div :class="reverseClass"> -->
  <div class="relative transition-body">
    <slot></slot>
    <component :is="projectBlockElement" class="frame">
      <ProjectRow
        v-for="(item, index) in featuredPosts"
        :key="index"
        :post="item"
      ></ProjectRow>
      <!-- view all -->
      <!-- <ProjectRow></ProjectRow> -->
    </component>
    <Footer :kind="kind" :nextpost="page.nextPost" />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import ProjectRow from "../components/ProjectRow";
/*


  The Wrap component is like a default layout in Nuxt


*/
export default {
  components: {
    Footer,
    ProjectRow,
  },
  props: {
    page: Object,
    kind: String,
  },
  computed: {
    siteTitle() {
      return this.$siteConfig.title;
    },
    projectBlockElement() {
      if (this.$route.path === "/") {
        return "main";
      }
      return "section";
    },
    featuredPosts() {
      return this.page.posts.filter(x => x.tags.includes("featured"));
    },
  },
  head() {
    const { excerpt } = this.page;
    const { title, pageTitle, pageClass, layout } = this.page;
    let { description } = this.$siteConfig;
    if (layout === "page" || layout === "post") {
      if (excerpt) {
        description = excerpt.replace(/<(?:.|\n)*?>/gm, "");
      }
    }
    return {
      htmlAttrs: {
        // add an HTML class using `pageClass` page attrs
        class: pageClass,
      },
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
/* TRANSITION */
/* .page-enter-active .transition-body,
.page-leave-active .transition-body {
  background-color: salmon;
  transition: all 10333ms cubic-bezier(1, 0.5, 0.8, 1);
}

.page-leave-to .transition-body {
  transform: translateX(5px);
  opacity: 0;
} */
</style>
