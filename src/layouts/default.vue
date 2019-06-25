<template>
  <Wrap :page="page">
    <div class="home">

      <!-- <IndexTitle :title="page.attributes.title"/> -->
      <!-- <saber-link to="/about.html">Learn more</saber-link> -->
      <!-- <slot name="default"></slot> -->

      <SliderFrame>
        <div slot-scope="{ activeIndex, goToIndex }">
          <div class="Grid-extract--edge bg-brand-header">
            <div class="container container--text">
              <ul class="Tab-controls s-2xh">
                <li>
                  <button
                    @click="goToIndex(0)"
                    :class="{ 'is-active': activeIndex === 0 }"
                    class="Tab-controls--button Meta"
                  >Notable</button>
                </li>
                <li>
                  <button
                    @click="goToIndex(1)"
                    :class="{ 'is-active': activeIndex === 1 }"
                    class="Tab-controls--button Meta"
                  >Recent</button>
                </li>
              </ul>
            </div>
          </div>

          <SliderSlides class="Grid-extract--posts">
            <SliderSlide v-if="featuredPosts && featuredPosts.length > 0">
              <Card v-for="post in featuredPosts" :post="post" :key="post.attributes.permalink"></Card>
            </SliderSlide>
            <SliderSlide v-if="recentPosts && recentPosts.length > 0">
              <Card v-for="post in recentPosts" :post="post" :key="post.attributes.permalink"></Card>
            </SliderSlide>
          </SliderSlides>
        </div>
      </SliderFrame>

      <!-- <ul class="post-list" v-if="page.posts && page.posts.length > 0">
        <li v-for="post in page.posts" :key="post.attributes.permalink">
          <span class="post-meta">{{ formatDate(post.attributes.createdAt) }}</span>
          <h3>
            <saber-link
              class="post-link"
              :to="post.attributes.permalink"
            >{{ post.attributes.title }}</saber-link>
          </h3>
        </li>
      </ul>-->

      <!-- <div
        class="pagination"
        v-if="page.pagination && (page.pagination.hasNext || page.pagination.hasPrev)"
      >
        <router-link
          class="prev-link"
          :to="page.pagination.prevLink"
          v-if="page.pagination.hasPrev"
        >← Previous</router-link>
        <router-link
          class="next-link"
          :to="page.pagination.nextLink"
          v-if="page.pagination.hasNext"
        >Next →</router-link>
      </div>-->

      <!-- <p class="feed-subscribe" v-if="$feed">
        <svg class="svg-icon orange">
          <use :xlink:href="getSvg('rss')"></use>
        </svg>
        <a :href="$feed.permalink">Subscribe</a>
      </p>-->
    </div>
  </Wrap>
</template>

<script>
import formatDate from "../utils/formatDate";
import getSvg from "../utils/getSvg";
import Card from "../components/Card.vue";
import SliderFrame from "../components/SliderFrame.vue";
import SliderSlides from "../components/SliderSlides.vue";
import SliderSlide from "../components/SliderSlide.vue";
import Wrap from "../components/Wrap.vue";

export default {
  components: {
    Card,
    SliderFrame,
    SliderSlides,
    SliderSlide,
    Wrap
  },

  props: ["page"],

  computed: {
    recentPosts() {
      return this.page.posts.splice(0, 6);
    },
    featuredPosts() {
      return this.page.posts
        .filter(x => x.attributes.category === "writing")
        // .filter(x => x.attributes.tags.includes("featured"))

    }
  },

  methods: {
    formatDate,
    getSvg
  }
};
</script>
