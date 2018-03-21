<template lang="pug">
  div
    header.block--pt7.block--matchFixedMenu(role="banner")
      .container
        
        .figure--large.u-posRelative.m-t0
          h1.super.u-textCenter Change happens in moments<br>of sudden delight.
          //- h1.heading(v-else) Callum Flack is a designer + developer. 
          //- p.nav-space
            | Since 2000, I've helped owners and creators design and build interfaces that merge brand with product. I'll counsel you on the big picture. I'll execute the details that seamless, authentic experiences are made of. I also 
            nuxt-link(to="/journal") blog
            | &nbsp;about this process. Read 
            nuxt-link(to="/about") about
            | &nbsp;me. Interested? Please <a class="icon-targetblank" target="_blank" href="mailto:callum@patternworks.com.au">email</a>.
    
    main.block--pb7(role="content")
      .container
          p.nav-space
            span.italic(v-if="index") Change happens in moments of sudden delight. 
            | Callum Flack is a designer + developer. 
            nuxt-link(to="/journal") blog
            | &nbsp;about this process. Read 
            nuxt-link(to="/about") about
            | &nbsp;me. Interested? Please <a class="icon-targetblank" target="_blank" href="mailto:callum@patternworks.com.au">email</a>.

    //- .Slide(style="background-image: url(/images/qesm.jpg)")
    //- .Slide(style="background-image: url(/images/loop-06.gif)")
    .Slide(style="background-image: url(/images/papa-chango.jpg)")
</template>

<script>
import Nav from "~/components/Nav.vue";

export default {
  layout: "default",
  components: {
    "c-nav": Nav
  }
};
</script>

<style>
@import "../assets/styles/variables.css";

.Slide {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;

  background-color: rgba(0, 0, 0, 0.9);
  height: 100vh;
}

.Slide:after {
  background-color: rgba(0, 0, 0, 0.85);
  background-color: rgba(255, 255, 255, 0.5);
  /* content: ""; */
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
</style>
