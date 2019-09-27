<template>
  <Wrap :page="page" kind="index">
    <!-- home -->
    <SliderFrame>
      <div slot-scope="{ activeIndex, goToIndex }">
        <div class="Grid-extract--edge bg-brand-bg ">
          <div class="container container--list">
            <ul class="Tab-controls">
              <li>
                <button
                  :class="{ 'is-active': activeIndex === 0 }"
                  class="Tab-controls--button Meta"
                  @click="goToIndex(0)"
                >
                  Start here
                </button>
              </li>
              <li>
                <button
                  :class="{ 'is-active': activeIndex === 1 }"
                  class="Tab-controls--button Meta"
                  @click="goToIndex(1)"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  :class="{ 'is-active': activeIndex === 2 }"
                  class="Tab-controls--button Meta"
                  @click="goToIndex(2)"
                >
                  Writing
                </button>
              </li>
              <li>
                <saber-link
                  to="/the-littoral-line"
                  class="Tab-controls--button Meta flex self-center"
                >
                  Newsletter
                  <!-- <span class="Link--blank">&#8599;</span> -->
                  <span class="Logo-arrow ml-1">&#8594;</span>
                </saber-link>
              </li>
            </ul>
          </div>
          <hr class="border-b border-tex m-0" />
        </div>

        <div class="st-m">
          <SliderSlides class="">
            <SliderSlide
              v-if="featuredPosts && featuredPosts.length > 0"
              class="st-2xh"
            >
              <div class="Grid">
                <Card
                  v-for="post in featuredPosts"
                  :key="post.permalink"
                  :post="post"
                  class="Grid-item"
                />
              </div>
            </SliderSlide>
            <SliderSlide v-if="projectsPosts && projectsPosts.length > 0">
              <div class="container container--list">
                <CardRow
                  v-for="post in projectsPosts"
                  :key="post.permalink"
                  :post="post"
                />
              </div>
            </SliderSlide>
            <SliderSlide v-if="writingPosts && writingPosts.length > 0">
              <div class="container container--list">
                <CardRow
                  v-for="post in writingPosts"
                  :key="post.permalink"
                  :post="post"
                />
              </div>
            </SliderSlide>
          </SliderSlides>
        </div>
      </div>
    </SliderFrame>

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
        <a :href="$feed.permalink">Subscribe</a>
      </p>-->
  </Wrap>
</template>

<script>
import Card from "../components/Card.vue";
import CardRow from "../components/CardRow.vue";
import SliderFrame from "../components/SliderFrame.vue";
import SliderSlides from "../components/SliderSlides.vue";
import SliderSlide from "../components/SliderSlide.vue";
import Wrap from "../components/Wrap.vue";

export default {
  components: {
    Card,
    CardRow,
    SliderFrame,
    SliderSlides,
    SliderSlide,
    Wrap,
  },

  props: ["page"],

  computed: {
    /* recentPosts() {
      return this.page.posts.splice(0, 6);
    }, */
    featuredPosts() {
      return this.page.posts.filter(x => x.tags.includes("featured"));
    },
    projectsPosts() {
      return this.page.posts.filter(x => x.category === "projects");
    },
    writingPosts() {
      return this.page.posts.filter(x => x.category === "writing");
    },
  },
};
</script>

<style lang="postcss" scoped>
.Space {
  padding-top: calc(theme(spacing.8) * var(--space-ratio));
}

.SliderSlide .container {
  padding: 0 !important;
}
</style>
