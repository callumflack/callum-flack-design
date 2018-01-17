<template lang="pug">
  div(:class="cellClass")
    nuxt-link.project.block--half(:to="link")
      figure.project-image
        c-lazyimage(project, :src="image", v-if="cloudinary")
        img(:src="image", v-else)
      .project-text
        h2.title
          span.project-visualLink {{ title }}
        p.project-subtext.text.text--meta
          span.u-marginR1(v-if="year") {{ year }}
          span(v-if="tags") {{ tags }}
          span.project-divider &nbsp;——&nbsp;
          | {{ headline }}

</template>


<script>
import LazyImage from "~/components/LazyImage.vue";

export default {
  name: "project",
  components: {
    "c-lazyimage": LazyImage
  },
  computed: {
    cellClass() {
      return ["Grid-cell u-sm-size1of2 u-lg-size1of2"];
    }
  },
  props: {
    featured: Boolean,
    casestudy: Boolean,
    archive: Boolean,
    center: Boolean,
    cloudinary: Boolean,
    link: String,
    image: String,
    title: String,
    headline: String,
    lede: String,
    tags: String,
    year: Number
  }
};
</script>


<style scoped>
@import "../assets/styles/vars.pcss";

/* .Grid-cell:nth-child(7), */
/* .Grid-cell:nth-child(8), */
.Grid-cell:nth-child(9) {
  & .project {
    margin-bottom: 0 !important;
  }
}

.project {
  display: block;
}

/* use the SVG filter that's secreted on work/index */
/* reused & scoped in LazyImage */
.project:hover img {
  filter: url("#gray");
}

.project-text h2 {
  margin: var(--s2) 0;

  @media (--small-viewport) {
    margin: calc(1.6 * var(--s3)) 0 calc(0.8 * var(--s3));
  }
}

.project-subtext {
  color: var(--color-text);
  width: 80%;

  @media (--small-viewport) {
    width: 75%;
  }

  @media (--large-viewport) {
    /* width: 50%; */
  }
}

.project-divider {
  letter-spacing: -0.2em;
  /* margin-left: -0.1em; */
  margin-right: 0.2em;
}
</style>
