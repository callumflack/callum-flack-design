<template lang="pug">
  section(:class="['Banner', { '--withImage': imageUrl, '--withFigure': figureUrl }]")
    .Banner-image.u-posFit(:class="[{ hi }]", v-if="imageUrl")
      img(:src="`/images/${imageUrl}`", alt="")
    .Banner-image.u-posFit.u-flex.u-flexAlignItemsCenter(v-if="figureUrl")
      .container
        figure.figure--large
          img(:src="`/images/${figureUrl}`", alt="")
      //- lazy-image(
        v-if="backgroundImage",
        class="hero-background-image",
        :src="backgroundImage")
      //- div(
        class='filter',
        :style='filterStyle')
    .Banner-text
      .container--tuck(v-if="imageUrl")
        div(:class="['Container', { 'is-right': alignRight, 'is-reset': hi }]", )
          h1.title.color-bg {{ heading }}
            span(v-html="text")
          div(v-if="link")
            a.Button.Button--outline.Meta.--medium(:href="link") {{ linkLabel }}
          .u-marginT4(v-if="newsletter")
            c-formnews
      .container(v-else)
        h1.title {{ heading }}
          span(v-html="text")
        div(v-if="link")
          a.Button.Button--outline.Meta.--medium(:href="link") {{ linkLabel }}
</template>

<script>
import FormNews from "~/components/FormNewsletter.vue";

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
@import "../assets/styles/vars.pcss";

.Banner {
  background-color: var(--color-bg);
  position: relative;
  /* min-height: calc(100vh - 60px);
  max-height: calc((100vh - 370px)/1.5); */
  min-height: 90vh;
  max-height: 90vh;

  display: flex;
  align-items: center;
}

.Banner-image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.hi {
  background-color: rgba(110, 0, 255, 0.7);
  background-color: rgba(31, 31, 31, 1);
  background-color: rgba(10, 10, 10, 0.96);

  & img {
    opacity: 0.15;
    opacity: 1;
  }
}

.Banner-text {
  position: relative;
  width: 100%;
}

.Banner-text .title {
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

.--withImage .container {
  margin-left: 0;
  padding: 0;
}

.--withImage .container.is-right {
  margin-left: auto;
  margin-right: 0;
}

.--withImage .container.is-reset {
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

.--withFigure .Banner-text .container {
  /* background-color: var(--color-neutral);
  padding-top: var(--grid-gutter);
  padding-bottom: var(--grid-gutter); */
}

.--withFigure .title {
  color: var(--color-border);
  color: white;
}
</style>
