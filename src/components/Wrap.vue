<template>
  <div>
    <!-- inside `.page-body` for page transitions -->
    <div class="page-body">
      <!-- <nav
        v-if="$route.path !== '/'"
        class="Nav Text-lg w-full flex justify-between z-50"
        :class="{ 'text-white opacity-75': invert }"
      >
        <saber-link to="/">&#8592; CFd</saber-link>
        <saber-link to="/">
          <icon name="close" height="0.75em" width="0.75em" class="mr-1"></icon>
          Menu
        </saber-link>
      </nav> -->
      <slot></slot>

      <footer class="h-screen">
        <div class="frame frame--header Block-t">
          <PageContact class="frame-area-b"></PageContact>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import PageContact from "../components/PageContact";
/*

  The Wrap component is like a default layout in Nuxt

  Note: pageClass in a .md file adds a class to <html>.

*/
export default {
  components: {
    PageContact,
    // ProjectRow,
  },
  props: {
    page: Object,
    invert: Boolean,
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
    /* showProjects() {
      // show the projects list everywhere except:
      // return this.$route.path != "/projects" || "/blog";
      if (this.$route.path === "/projects") {
        return false;
      }
      return true;
    }, */
    /* can't recursively `injectAllPosts` into a post */
    /* use static `featuredPosts` data instead */
    /* featuredPosts() {
      return this.page.posts.filter(x => x.tags.includes("featured"));
    }, */
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
.Nav {
  @apply fixed;
  margin-top: var(--spacing5);
  padding-left: var(--gridMarginGap);
  padding-right: var(--gridMarginGap);
}
/* .Footer >>> .frame-area-a {
  @apply relative;
}
.Footer >>> .frame-area-a:after {
  @apply absolute left-0 h-px bg-black;
  content: "";
  top: -1.5em;
  width: 150%;
} */
</style>
