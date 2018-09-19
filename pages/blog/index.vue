<template lang="pug">
div.b-pt4
  //- nav.Container.b-nav
    h3.Nav-locator.Meta
      span.m-r2 01
      span Blog
    //- .Extract-large
      hr
  //- article
    Post.rp-t2(
      v-for="post in mostRecentPost"
      :body="post.body"
      :category="post.category"
      :date="post.date"
      :heroImage="post.heroImage"
      :heroImageNoShadow="post.heroImageNoShadow"
      :heroRatio="post.heroRatio"
      :link="post.permalink"
      :note="post.note"
      :readingTime="post.readingTime"
      :tags="post.tags"
      :title="post.title"
      :updated="post.updated"
    )
    hr.bg-text.b-my3
  main.Container.rp-t2(role="main")
    post-excerpt(
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
import Post from "~/components/Post.vue";

export default {
  name: "blog",
  components: {
    PostExcerpt,
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
