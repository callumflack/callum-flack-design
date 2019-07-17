<template>
  <div>
    <HeaderNav />
    <header>
      <HeaderTitleWrap>
        <h1 class="Display s-h">404 page not found</h1>
        <p class="Link Text--sm text-gray s-2xh">
          Sorry, I couldn't find the page you were after. Instead, here's a randomly
          generated insight about good interface design:
        </p>
        <p class="Quote Title">
          {{ selectedQuote.line }}
          <em class="Quote-author">
            <a :href="selectedQuote.link" target="_blank" rel="noopener noreferrer">{{
              selectedQuote.author
            }}</a>
          </em>
        </p>
      </HeaderTitleWrap>
    </header>
    <!-- <main aria-label="Content">
      <div class="container container--list">
        <slot></slot>
      </div>
    </main> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav";
import HeaderTitleWrap from "../components/HeaderTitleWrap";
// import Footer from '../components/Footer'

export default {
  components: {
    HeaderNav,
    HeaderTitleWrap,
    // Footer
  },
  props: ["page"],
  data() {
    return {
      quotes: [
        {
          line:
            "People care about their problems more than they care about design. Solve their problems, and they’ll learn to care about design.",
          author: "Daniel Burka",
          link: "https://twitter.com/johnmaeda/status/753744840945442816",
        },
        {
          line:
            "Civilization advances by extending the number of important operations which we can perform without thinking about them.",
          author: "Alfred Whitehead",
          link:
            "https://www.goodreads.com/quotes/53970-civilization-advances-by-extending-the-number-of-important-operations-which",
        },
        {
          line:
            "Instead of trying to organize it in full detail, you organize it only somewhat and you then rely on the dynamics of the system to take you in the direction you want to go.",
          author: "Brian Eno",
          link: "https://www.edge.org/conversation/brian_eno-composers-as-gardeners",
        },
        {
          line:
            "Design lets you rehearse the future. And we’re all competing with the future itself.",
          author: "Brian Collins",
          link:
            "https://www.forbes.com/sites/brucerogers/2019/03/04/design-as-change-agent-interview-with-brian-collins/#91043c24e27b",
        },
        {
          line:
            "Simplicity is a luxury item I'm happy to pay quite a lot of money for.",
          author: "Ole Peters",
          link: "https://twitter.com/ole_b_peters/status/1144292246755393536?s=21",
        },
        /* {
          line: "Since the human ability to transform nature is limited only by the laws of physics, none of the endless stream of problems will ever constitute an impassable barrier. So a complementary and equally important truth about people and the physical world is that problems are soluble.",
          author: "David Deutsch",
          link: "https://en.wikipedia.org/wiki/The_Beginning_of_Infinity"
        } */
      ],
      selectedQuote: [],
    };
  },
  created() {
    /* https://stackoverflow.com/questions/45752960/how-to-get-random-element-in-vue-js */
    const idx = Math.floor(Math.random() * this.quotes.length);
    this.selectedQuote = this.quotes[idx];
  },
  head() {
    const pageTitle = this.page && this.page.attributes.title;
    const siteTitle = this.$siteConfig.title;

    return {
      title: pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle,
      meta: [
        {
          name: "description",
          content: this.$siteConfig.description,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.Quote {
  @apply border-l border-gray-500;
  padding-left: calc(theme(spacing.4) * var(--grid-ratio));
}

.Quote em,
.Quote strong,
.Quote-author {
  @apply table mt-2 tracking-wider;
  @apply font-sans font-medium uppercase tracking-wider;
  @apply not-italic;
  font-size: calc(theme(fontSize.xxs) * var(--text-ratio));
}
</style>
