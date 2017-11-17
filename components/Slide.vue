<template lang="pug">
  section(:class="['Banner', { '--withImage': imageUrl, '--withFigure': figureUrl }]")
    .Banner-image.u-posFit(:class="[{ hi }]", v-if="imageUrl")
      img(:src="`/images/${imageUrl}`", alt="")
    .Banner-image.u-posFit.u-flex.u-flexAlignItemsCenter(v-if="figureUrl")
      .Container
        figure.Figure--large
          img(:src="`/images/${figureUrl}`", alt="")
      //- lazy-image(
        v-if="backgroundImage",
        class="hero-background-image",
        :src="backgroundImage")
      //- div(
        class='filter',
        :style='filterStyle')
    .Banner-text
      .Container--tuck(v-if="imageUrl")
        div(:class="['Container', { 'is-right': alignRight, 'is-reset': hi }]", )
          h1.Title.u-colorWhite {{ heading }}
            span(v-html="text")
          div(v-if="link")
            a.Button.Button--outline.Meta.--medium(:href="link") {{ linkLabel }}
          .u-marginT4(v-if="newsletter")
            c-formnews
      .Container(v-else)
        h1.Title {{ heading }}
          span(v-html="text")
        div(v-if="link")
          a.Button.Button--outline.Meta.--medium(:href="link") {{ linkLabel }}
</template>

<script>
import FormNews from "~/components/FormNews.vue";

export default {
  components: {
    "c-formnews": FormNews
  },
  computed: {},
  props: {
    imageUrl: String,
    figureUrl: String,
    hi: Boolean,
    heading: String,
    text: String,
    link: String,
    linkLabel: String,
    newsletter: Boolean,
    alignRight: Boolean
  }
};
</script>

<style>
@import "../assets/styles/vars.css";

.Banner {
  background-color: var(--color-neutral);
  position: relative;
  /* min-height: calc(100vh - 60px);
  max-height: calc((100vh - 370px)/1.5); */
  min-height: 80vh;
  max-height: 80vh;

  display: flex;
  align-items: center;
}

.Banner-image {
  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}

.hi {
  background-color: rgba(110, 0, 255, 0.7);
  background-color: rgba(31, 31, 31, 1);
  background-color: #151515;

  & img {
    opacity: 0.15;
    opacity: 1;
  }
}

.Banner-text {
  position: relative;
  width: 100%;
}

.Banner-text .Title {
  transform: translateX(-3px);
}

.Banner-text.is-right {
  text-align: right;
}

.Banner-text span {
  display: table;
  margin-top: var(--s3);
  text-transform: initial;
}

.Banner-text .Button {
  margin-top: var(--s4);
}

/* 
 * with image 
 */

.--withImage .Container {
  margin-left: 0;
  padding: 0;
}

.--withImage .Container.is-right {
  margin-left: auto;
  margin-right: 0;
}

.--withImage .Container.is-reset {
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--grid-gutter);
  padding-right: var(--grid-gutter);
}

/* 
 * with figure 
 */

.--withFigure {
  background-color: rgb(31, 31, 31);
  background-color: rgba(110, 0, 255, 0.7);
}

.--withFigure img {
  opacity: 0.25;
}

.--withFigure .Banner-text .Container {
  /* background-color: var(--color-neutral);
  padding-top: var(--grid-gutter);
  padding-bottom: var(--grid-gutter); */
}

.--withFigure .Title {
  color: var(--color-border);
  color: white;
}
</style>
