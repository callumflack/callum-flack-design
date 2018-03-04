<template lang="pug">
  c-nav
</template>

<script>
import Nav from "~/components/Nav.vue";
import PageHeading from "~/components/PageHeading.vue";
import Newsletter from "~/components/FormNewsletter.vue";

export default {
  layout: "index",
  components: {
    "c-nav": Nav,
    "c-pageheading": PageHeading,
    "c-newsletter": Newsletter
  }
};
</script>

<style>
@import "../assets/styles/vars.css";

.work img {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.work:hover img,
.work:focus img {
  opacity: 0.05;
  transition: opacity 0.15s ease;
}

.post {
  & a {
    @media (--medium-viewport) {
      margin-left: auto;
      width: 50%;
    }
  }

  & p {
    @media (--medium-viewport) {
      width: 100%;
    }
  }
}

/* perhaps req'd occassionally */
.post-image {
  background-color: var(--color-text);
  background-image: url("/images/post-bubble.jpg");
  background-size: cover;
  display: none !important;

  @media (--small-viewport) {
    display: flex !important;
  }
}
</style>
