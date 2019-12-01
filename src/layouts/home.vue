<template>
  <Wrap :page="page">
    <header class="frame frame--lede Block2">
      <!-- <h1 class="Text-sm frame-area-a">{{ page.title }}</h1> -->
      <h1 class="Heading Heading-4xl font-medium frame-area-a">{{ page.title }}</h1>
      <p class="frame-area-b">
        {{ page.lede }}
        <saber-link to="/about" class="Link text-brand-red">
          Learn more &#8594;
          <!-- <icon name="add-circle-outline" class="Text-button"></icon> -->
          <!-- <icon name="arrow_forward_ios" class="Text-butto"></icon> -->
        </saber-link>
      </p>
    </header>
    <SliderFrame class="">
      <main slot-scope="{ activeIndex, goToIndex }">
        <div class="frame">
          <ul class="Tab-controls col-start-2">
            <li>
              <button
                :class="{ 'is-active': activeIndex === 0 }"
                class="Heading-4xl"
                @click="goToIndex(0)"
              >
                <!-- Grid -->
                <icon name="grid"></icon>
              </button>
            </li>
            <li>
              <button
                :class="{ 'is-active': activeIndex === 1 }"
                class="Heading-4xl"
                @click="goToIndex(1)"
              >
                <!-- List -->
                <icon name="sort"></icon>
              </button>
            </li>
          </ul>
        </div>

        <div class="Block2-sm-t">
          <SliderSlides class="">
            <SliderSlide
              v-if="page.posts && page.posts.length > 0"
              class="frame frame--projectCards"
            >
              <ProjectCard
                v-for="(item, index) in page.posts"
                :key="index"
                :post="item"
              ></ProjectCard>
            </SliderSlide>
            <SliderSlide v-if="page.posts && page.posts.length > 0" class="frame">
              <ProjectRow
                v-for="(item, index) in page.posts"
                :key="index"
                :post="item"
              ></ProjectRow>
            </SliderSlide>
          </SliderSlides>
        </div>
      </main>
    </SliderFrame>
  </Wrap>
</template>

<script>
import ProjectCard from "../components/ProjectCard";
import ProjectRow from "../components/ProjectRow";
import SliderFrame from "../components/SliderFrame";
import SliderSlides from "../components/SliderSlides";
import SliderSlide from "../components/SliderSlide";
import Wrap from "../components/Wrap2.vue";

export default {
  components: {
    ProjectRow,
    ProjectCard,
    SliderFrame,
    SliderSlides,
    SliderSlide,
    Wrap,
  },
  props: ["page"],
  // transition: "intro"
  /* transition(to, from) {
    // return a string or object
    if (!from) {
      return "slide-left";
    }
    if (to === "/about") {
      return "slide-right";
    }
    // return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  }, */
};
</script>
