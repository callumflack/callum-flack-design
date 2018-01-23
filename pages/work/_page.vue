<template lang="pug">
  article
    header(role="banner")
      c-pagetitle(
        :title="page.title"
        link="/work"
        :lede="page.lede"
      )
      .container
        c-movie(
          frame, 
          large, 
          :laptop="page.heroVideoLaptop"
          :desktop="page.heroVideoDesktop"
          :poster="page.heroVideoPoster"
          :src="page.heroVideo"
          v-if="page.heroVideo"
        )
        figure.figure.figure--large(v-else)
          c-lazyimage(
            :src="page.heroImage", 
            :ratio="page.heroRatio",
            v-if="page.heroInCloudinary"
          )
          img(:src="page.heroImage", v-else)
    main(role="main")
      .container
        nuxtent-body.textscope(:body="page.body")
    nuxt-link.next-project(:to="page.nextProject")
      .container.u-flex.u-flexAlignItemsCenter
        hgroup
          .text.text--small Next project
          .text {{ page.nextProjectTitle }}
        
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import MarkdownMovie from "~/components/MarkdownMovie.vue";
import LazyImage from "~/components/LazyImage.vue";

export default {
  components: {
    "c-pagetitle": PageTitle,
    "c-movie": MarkdownMovie,
    "c-lazyimage": LazyImage
  },
  props: {
    title: String,
    massive: String,
    lede: String,
    heroImage: String,
    heroRatio: String,
    heroVideo: String,
    heroVideoLaptop: Boolean,
    heroVideoDesktoptop: Boolean,
    heroVideoPoster: String,
    heroInCloudinary: Boolean,
    nextProject: String,
    nextProjectTitle: String
  },
  async asyncData({ app, route }) {
    const page = await app.$content("/projects").get(route.path);

    return {
      page
    };
  }
};
</script>

<style>
@import "../../assets/styles/vars.css";

.next-project {
  display: block;
  height: 33.333333vh;
  height: 50vh;
}
</style>
