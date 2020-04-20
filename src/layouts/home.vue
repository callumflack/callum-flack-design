<template>
  <Wrap :page="page">
    <PageTitle :page="page"></PageTitle>
    <SliderFrame class="">
      <main slot-scope="{ activeIndex, goToIndex }">
        <div class="frame">
          <ul class="Tab-controls col-start-1 lg:col-start-3 hu:col-start-4">
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

        <div class="Block-sm-t">
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
            <SliderSlide
              v-if="page.posts && page.posts.length > 0"
              class="frame frame--projectRows"
            >
              <div class="frame-area-a">
                <ProjectRow
                  v-for="(item, index) in page.posts"
                  :key="index"
                  :post="item"
                ></ProjectRow>
              </div>
            </SliderSlide>
          </SliderSlides>
        </div>
      </main>
    </SliderFrame>
  </Wrap>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import ProjectCard from "../components/ProjectCard";
import ProjectRow from "../components/ProjectRow";
import SliderFrame from "../components/SliderFrame";
import SliderSlides from "../components/SliderSlides";
import SliderSlide from "../components/SliderSlide";
import Wrap from "../components/Wrap.vue";
// import "icons";

export default {
  components: {
    PageTitle,
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
