<template lang="pug">
//- div.b-pt4
div
  //- nav.Container.b-nav
    h3.Nav-locator.Meta
      span.m-r2 01
      span Blog
    //- .Extract-large
      hr
  PostExcerptMostRecent(
    v-for="post in mostRecentPost"
    :blockColor="post.blockColor"
    :category="post.category"
    :date="post.date"
    :heroImage="post.heroImage"
    :heroImageNoShadow="post.heroImageNoShadow"
    :heroImageMultiply="post.heroImageMultiply"
    :heroRatio="post.heroRatio"
    :key="post.permalink"
    :lede="post.lede"
    :link="post.permalink"
    :mostRecentPost = "post.mostRecentPost"
    :permalink="post.permalink"
    :readingTime="post.readingTime"
    :tags="post.tags"
    :title="post.title"
  )
  //- hr.bg-text.b-my3
  main.Container.b-py3(role="main")
    //- .rp-t2
    PostExcerpt(
      v-if="post.published"
      v-for="post in everyOtherPost"
      :body="post.body"
      :category="post.category"
      :date="post.date"
      :heroImage="post.heroImage"
      :heroImageNoShadow="post.heroImageNoShadow"
      :key="post.permalink"
      :lede="post.lede"
      :permalink="post.permalink"
      :readingTime="post.readingTime"
      :thumbImage="post.thumbImage"
      :showFullArticle="post.showFullArticle"
      :tags="post.tags"
      :title="post.title"
    )
</template>

<script>
import PostExcerpt from "~/components/PostExcerpt.vue";
import PostExcerptMostRecent from "~/components/PostExcerptMostRecent.vue";
import Post from "~/components/Post.vue";

export default {
  name: "blog",
  components: {
    PostExcerpt,
    PostExcerptMostRecent,
    Post
  },
  data() {
    return {
      posts: []
    };
  },
  computed: {
    mostRecentPost() {
      return this.posts.filter(post => post.mostRecentPost === true);
    },
    everyOtherPost() {
      return this.posts.filter(post => post.mostRecentPost !== true);
    }
  },
  async asyncData({ app }) {
    const posts = await app.$content("/posts").getAll();

    return {
      posts
    };
  },
  head() {
    return {
      title: "Blog—Callum Flack Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Posts by Callum Flack about design, user experience, code and the 'things inbetween' that inform their success"
        }
      ]
    };
  }
};
</script>
