<template>
  <div :class="reverseClass">
    <Nav :category="page.attributes.category" />
    <div class="transition-body">
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
    /* reverse = white on black theme */
    reverseClass() {
      // return this.$route.path === "/" && "reverse";
      if (this.$route.path === "/about.html") {
        return "neutral";
      }
      return null;
    },
    containerType() {
      if (this.$route.path === "/") {
        return;
      } else if (this.kind === "post") {
        return "container container--text";
      }
      return "container container--list";
    },
    siteTitle() {
      return this.$siteConfig.title;
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
/* TRANSITION */
.page-enter-active .transition-body,
.page-leave-active .transition-body {
  transition: all 10333ms cubic-bezier(1, 0.5, 0.8, 1);
}

.page-leave-to .transition-body {
  transform: translateX(5px);
  opacity: 0;
}

/*

  REVERSE THEMES

*/
.neutral {
  background-color: #b3ad9f;
  background-color: rgba(183, 172, 148, 0.7);
  background-color: rgba(214, 173, 121, 0.4);
}
.reverse {
  @apply bg-text;
}
.reverse >>> .Nav {
  @apply bg-text;
  border-bottom-color: rgba(255, 255, 255, 0.1);
}
.reverse >>> .Nav-logo {
  border-right-color: rgba(255, 255, 255, 0.1);
}
.reverse >>> .Nav-link,
.reverse >>> .Signal,
.reverse >>> .Display,
.reverse >>> h1,
.reverse >>> h2,
.reverse >>> h3,
.reverse >>> .text-text {
  @apply text-white;
}
.reverse >>> .Nav-link.is-active span:after,
.reverse >>> .router-link-exact-active span:after {
  @apply bg-white;
}
/* .reverse >>> .Card-body-meta {
  @apply text-white;
} */
.reverse >>> .IndexBlock {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}
.reverse >>> .Card {
  border-color: rgba(255, 255, 255, 0.1);
  min-height: 210px;
}
.reverse >>> .Input {
  --button-invert-color: transparent;
  --button-color: theme(colors.white);
  border-color: rgba(255, 255, 255, 0.1);
}
.reverse >>> .Button--outline {
  --button-invert-color: theme(colors.gray.600);
  --button-color: theme(colors.gray.600);
}
.reverse >>> .Button--outline:hover {
  --button-color: theme(colors.white);
  --button-box-shadow-color: theme(colors.white);
}
.reverse >>> .Link a:not(.Button),
.reverse >>> .Markdown a:not(.Button) {
  @apply text-gray-600;
  box-shadow: inset 0 -1px 0 #555;
}
.reverse >>> .Link a:hover:not(.Button),
.reverse >>> .Markdown a:hover:not(.Button) {
  @apply text-text;
  box-shadow: inset 0 -25px 0 theme(colors.white);
}
.reverse >>> .glide__slide {
  border-color: rgba(255, 255, 255, 0.1);
}
.reverse >>> .glide button {
  @apply text-gray-600;
}
</style>
