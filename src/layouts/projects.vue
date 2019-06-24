<template>
  <Wrap :page="page">
    <div class="home">
      <h1 class="page-heading" v-if="page.attributes.title">{{ page.title }}</h1>

      <!-- <slot name="default"></slot> -->

      <header class="Block-sm">
        <h1
          class
        >A selected archive since 2013. Design, frontend. listening and advice along the way.
        </h1>
      </header>

      <!-- <div v-if="posts && posts.length > 0">
        <Card v-for="post in posts" :post="post" :key="post.attributes.permalink"></Card>
      </div> -->

      <SliderFrame>
        <div slot-scope="{ activeIndex, goToIndex }">
          <ul class="Tab-controls s-2xh">
            <li>
              <button
                @click="goToIndex(0)"
                :class="{ 'is-active': activeIndex === 0 }"
                class="Tab-controls--button Meta"
              >By date</button>
            </li>
            <li>
              <button
                @click="goToIndex(1)"
                :class="{ 'is-active': activeIndex === 1 }"
                class="Tab-controls--button Meta"
              >Design</button>
            </li>
            <!-- <li>
              <button
                @click="goToIndex(2)"
                :class="{ 'is-active': activeIndex === 2 }"
                class="Tab-controls--button Meta"
              >Development</button>
            </li> -->
          </ul>

          <SliderSlides class="Grid-extract--posts">
            <SliderSlide v-if="allProjects && allProjects.length > 0">
              <Card
                v-for="post in allProjects"
                :post="post"
                :key="post.attributes.permalink"
              ></Card>
            </SliderSlide>
            <SliderSlide v-if="designProjects && designProjects.length > 0">
              <Card
                v-for="post in designProjects"
                :post="post"
                :key="post.attributes.permalink"
              ></Card>
            </SliderSlide>
            <!-- <SliderSlide v-if="devProjects && devProjects.length > 0">
              <Card
                v-for="post in devProjects"
                :post="post"
                :key="post.attributes.permalink"
              ></Card>
            </SliderSlide> -->
          </SliderSlides>
        </div>
      </SliderFrame>


    </div>
  </Wrap>
</template>

<script>
import Card from "../components/Card.vue";
import SliderFrame from "../components/SliderFrame.vue";
import SliderSlides from "../components/SliderSlides.vue";
import SliderSlide from "../components/SliderSlides.vue";
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
    allProjects() {
      return this.page.posts
        .filter(x => x.attributes.category === "project")
    },
    /* featuredProjects() {
      return this.allProjects
        .filter(x => x.attributes.tags.includes("featured"))
    }, */
    devProjects() {
      return this.allProjects
        .filter(x => x.attributes.tags.includes("code"))
    },
    designProjects() {
      return this.allProjects
        .filter(x => x.attributes.tags.includes("UI"))
    },
  },
};
</script>
