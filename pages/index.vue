<template lang="pug">
.block--pageEnd
  header(role="banner")
    c-pageheading(
      heading="Design for the experience of delight."
      link="/"
      lede="Callum Flack is a code-based designer who obsesses over the user experience. He helps individuals, groups and businesses to connect with and service their audience."
    )
  main(role="main")
    .container
      figure.figure.figure--large
        nuxt-link.work.linkSignal.noVisualLink(to="/work")
          .FlexEmbed
            .FlexEmbed-ratio.FlexEmbed-ratio--16by9
            .FlexEmbed-content
              .pin.bgcolor-white.u-flex.u-flexAlignItemsCenter.u-flexJustifyCenter
                .title.u-textCenter
                  | View the work #[span.linkSignal-target →]
              img.w100.u-posRelative(src="/images/loop-05.gif")
      .text-scope
        p
          nuxt-link(to="/about") Hi, I’m Callum.
          |  I'm interested to know about you, what you do and who your market is. I can help you create authentic, seamless experiences that connect your ideas with your audience. Together we can build something that your customers are proud of.
          
        h2 Systems thinking. Technical fluidity. Human outcomes.
        p Work with me and you work directly with a multi-skilled, self-sufficient creative technologist, designer and developer who can take your idea from zero to reality—no middlemen, nothing lost in translation. 
          nuxt-link(to="/work") Here's some examples. 

        h2.title.title--ruled 
          nuxt-link(to="/journal") Journal
        p I write about designing and building human interfaces in the 
          nuxt-link(to="/journal") Journal.
          |  Here's the most recent:
        .post.no-quote
          nuxt-link.u-block.noVisualLink.linkSignal(to="/journal/designers-should-code")
            h1.title.w100.u-marginT0.u-marginB3 Designers should code #[span.linkSignal-target →]
            p If you want to know how to make software for real people, there's no substitute for shaking hands with the invisible demons programmers wrestle with&#58; lessons learned by an ex-graphic designer.
        c-newsletter
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import Newsletter from "~/components/FormNewsletter.vue";

export default {
  components: {
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
