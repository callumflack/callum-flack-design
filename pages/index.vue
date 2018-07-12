<template lang="pug">
  div
    header(role="banner")
      c-pageheading(
        titleXl="Websites that<br>inspire change"
        lede="Callum Flack Design plans, designs and executes website systems for creative leaders who are driven to stir hearts and build communities. Here's 5 ways I help do this:"
      )
    main(role="content")
      section.Slide(style="background-color:rgba(236, 223, 194,0.5)")
        .FlexGridWrapper
          .FlexGrid
            .u-md-size1of2.Slide-inner.Slide-texture--hi.CoverImage
            .u-md-size1of2.m-t5.sm-m-t0
              .u-flex.u-flexAlignItemsCenter.h-100
                .container.container--sm.m-l0
                  p.m-b1
                    span.Title-number 1
                  h2.Title.Title--xl.m-t0 
                    | We all respond<br>to beauty
                  p.Slide-1--link.m-t0.m-b0 
                    | You'll know in a heartbeat when it's right. To create change in people, 
                    nuxt-link(to="/blog/the-instantaneous-language-of-beauty") I design for the heart first.
      
      section.Slide
        .FlexGridWrapper
          .FlexGrid
            .u-md-size1of2
              .container.m-l0.p-a0
                .u-flex.u-flexAlignItemsCenter.md-Slide-height
                  c-lazyimage(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1528294818/okok/_glow-av.jpg")
            .u-md-size1of2.m-t5.sm-m-t0.u-sm-flexOrderFirst
              .u-flex.u-flexAlignItemsCenter.u-flexJustifyEnd.h-100
                .container.container--sm.m-x0.u-md-textRight
                  p.u-md-textRight.m-b1
                    span.Title-number 2
                  h2.Title.Title--xl.m-t0 
                    | Your digital brand is tactile 
                    //- | Your digital brand is a product 
                    //- span.u-table.u-sm-inlineBlock in use
                  p.m-t0.m-b0 
                    | Your user's experience is as dependent on load time as it is on visual feel and flow. The technology is inseparable from the digital brand. 
                    nuxt-link(to="/blog/designers-should-code") That's why I build what I design
                    | . Working iteratively in code is the best design feedback.
      
      section.Slide(style="background-color:rgb(229, 232, 232)")
        .FlexGridWrapper
          .FlexGrid
            .u-md-size1of2
              .container.m-r0.p-a0.u-textRight
                .u-flex.u-flexAlignItemsCenter.u-flexJustifyCenter.u-sm-flexJustifyEnd.Slide-inner
                  c-movie(reverseButton iphone home src="/images/phn-video-m.mp4")
            .u-md-size1of2.m-t5.sm-m-t0
              .u-flex.u-flexAlignItemsCenter.h-100
                .container.container--sm.m-x0
                  p.m-b1
                    span.Title-number 3
                  h2.Title.Title--xl.m-t0 
                    | Good design<br>is good business
                  p.Slide-3--link.m-t0.m-b0
                    // | All business is about making bets on human behaviour. 
                    // | People feel delighted when they've been acknowledged by good service. Change happens suddenly in those moments. 
                    | My job is to create digital communications and services that anticipate your audience with seamless experiences they'll trust intuitively. Change happens suddenly in those moments. Good design creates customers. 
                    nuxt-link(to="/work") See project case studies.
      
      section.Slide.Slide-texture--reverse.Slide-texture--pattern.CoverImage
        .FlexChildrenCenter.Slide-inner
          div
            .container
              .container.container--sm
                p.m-b1
                  span.Title-number 4
                h2.Title.Title--xl.m-t0 A daily practise<br>since 2000
                p.m-t0.m-b0 Here's a few things I've learned on the journey so far:
            .container.container--md.block--pt5
              .FlexGridWrapper
                .FlexGrid
                  .u-md-size1of3.Box
                    .Box-heading.Title.u-textCenter
                      // span.Box-icon
                        img(src="/images/_listen.svg", alt="listen")
                      | Listening
                    p.Box-text I've worked around the world with great companies and talented people. Yet the place where I've learned the most is sitting with my clients, and listening. Great work results from a mutual understanding of problem and possibility.
                  .u-md-size1of3.Box
                    .Box-heading.Title.u-textCenter
                      // span.Box-icon
                        img(src="/images/_look.svg", alt="look")
                      | Seeing
                    p.Box-text The turning point in my career was learning to code. I already had a decade of experience as a graphic designer. It was hard! It taught me that unless I'm approaching my work with an open mind, I'm developing blindspots.
                  .u-md-size1of3.Box
                    .Box-heading.Title.u-textCenter
                      // span.Box-icon
                        img(src="/images/_fun.svg", alt="fun")
                      | Playing
                    p.Box-text I think design is a matter of paying attention. Both to the big picture and the stack of details. I find this process fun—it feeds me, I never tire of it. Having fun allows me to transform the ordinary into something people talk about. 
                      nuxt-link(to="/about") Read more about me.
      
      section.Slide.SlideWithFooter
        .FlexChildrenCenter.SlideWithFooter-inner
          .container
            .container.container--sm
              p.m-b1.Title-number 5
              // h2.Title.Title--xl.m-t0 everyone hungers for interesting
              h2.Title.Title--xl.m-t0 hungry for interesting
              // p.m-t0 People feel delighted when they've been acknowledged by good service. Change happens suddenly in those moments. You'll be remembered and trusted. 
              // p I create change by designing digital brands and products that help your audience remember you. Interested? Let's discuss your ideas. 
              
              c-signup
              // p
                a.Button.m-t1(href="mailto:callum@callumflack.design") Start a conversation

</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import MarkdownImage from "~/components/MarkdownImage.vue";
import LazyImage from "~/components/LazyImage.vue";
import MarkdownMovie from "~/components/MarkdownMovie.vue";
import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";

export default {
  layout: "default",
  components: {
    "c-pageheading": PageHeading,
    "c-image": MarkdownImage,
    "c-lazyimage": LazyImage,
    "c-movie": MarkdownMovie,
    "c-signup": NewsletterSignupForm
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

.Slide,
.Slide-inner {
  min-height: 66vh;

  @media (--md) {
    min-height: 90vh;
  }
}

.SlideWithFooter,
.SlideWithFooter-inner {
  min-height: calc(66vh - 194px);

  @media (--md) {
    min-height: calc(90vh - 194px);
  }
}

.md-Slide-height {
  @media (--md) {
    min-height: 90vh;
  }
}

.Slide {
  margin-left: auto;
  margin-right: auto;
  padding-top: var(--s-5);
  padding-bottom: var(--s-5);
  position: relative;

  @media (--md) {
    padding: 0;
  }

  /* counter .figure & .u-flex */
  & .figure {
    margin: 0;
    width: 100%;
  }
}

.Slide + .Slide {
  /* margin-top: 1rem; */
}

.Slide-1--link a {
  text-shadow: 0.03em 0 #f1ebdd, -0.03em 0 #f1ebdd, 0 0.03em #f1ebdd, 0 -0.03em #f1ebdd,
    0.06em 0 #f1ebdd, -0.06em 0 #f1ebdd, 0.09em 0 #f1ebdd, -0.09em 0 #f1ebdd,
    0.12em 0 #f1ebdd, -0.12em 0 #f1ebdd, 0.15em 0 #f1ebdd, -0.15em 0 #f1ebdd;
}

.Slide-3--link a {
  text-shadow: 0.03em 0 #e5e8e8, -0.03em 0 #e5e8e8, 0 0.03em #e5e8e8, 0 -0.03em #e5e8e8,
    0.06em 0 #e5e8e8, -0.06em 0 #e5e8e8, 0.09em 0 #e5e8e8, -0.09em 0 #e5e8e8,
    0.12em 0 #e5e8e8, -0.12em 0 #e5e8e8, 0.15em 0 #e5e8e8, -0.15em 0 #e5e8e8;
}

.Box-text a {
  background-image: linear-gradient(var(--c-bg), var(--c-bg)),
    linear-gradient(var(--c-bg), var(--c-bg)),
    linear-gradient(currentColor, currentColor);
  text-shadow: none;
}

.Slide-texture--darken:after {
  background-color: rgba(0, 0, 0, 1);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.Slide-texture--sudden {
  background-blend-mode: multiply;
  background-color: #ecdfc2;
  background-color: rgba(236, 223, 194, 0.5);
  background-image: url(/images/_sudden.jpg);
  background-position-y: 80%;
}

.Slide-texture--lady {
  background-color: rgba(236, 223, 194, 0.5);
  background-image: url(/images/_lady.jpg);
}

.Slide-texture--hi {
  background-image: url(/images/hi.svg);

  @media (--sm) {
    background-position-x: 40%;
  }
  @media (--lg) {
    background-position-x: 70%;
  }
}

.Slide-texture--pattern {
  // background-blend-mode: multiply;
  // background-color: hsl(41, 30%, 23%);
  // background-color: #292522;
  // background-color: #aaa;
  // background-color: #886262;
  // background-color: #1e2433;
  // background-color: var(--c-text);
  // background-color: #626c88;
  // background-color: #353535;
  // background-image: url(/images/_sudden.jpg);
  // background-image: url(/images/_enticing-as-it-seems.jpg);
  // background-image: url(/images/_overcast-night.jpg);
  // background-image: url("http://res.cloudinary.com/pw-img-cdn/image/upload/v1522321387/okok/_overcast-night.jpg");
  // background-image: url(/images/_stripes.jpg);
  // background-image: url(/images/_spys.jpg);
  background-image: url(/images/_sagatiba-bw.jpg);

  &:after {
    background-color: rgba(0, 0, 0, 0.875);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
}

.Slide-texture--reverse {
  & .container {
    position: relative;
    z-index: 1;
  }

  & h2,
  & h3,
  & p,
  & .Box-heading {
    border-color: var(--c-highlight);
    color: var(--c-highlight);
  }

  & .Title-number {
    background-color: var(--c-highlight);
    color: var(--c-text);
  }
}

.Box {
  border: 1px solid var(--c-highlight);
  padding: 0;
}

.Box + .Box {
  margin-top: -1px;

  @media (--sm) {
    margin-left: -1px;
    margin-top: 0;
  }
}

.Box-heading,
.Box-text {
  margin: 0;
  padding: calc(0.8 * var(--s-3b)) var(--s-3b);
  position: relative;

  @media (--lg) {
    padding: calc(0.8 * var(--s-4)) var(--s-4);
  }
}

.Box-heading {
  border-bottom: 1px solid currentColor;

  & span {
    display: inline-block;
  }
}

.Box-icon {
  display: inline-block;
  height: 30px;
  margin-right: var(--s-2);
  transform: translateY(4px);
  width: 30px;

  @media (--sm) {
    height: 35px;
    // transform: translateY(5px);
    width: 35px;
  }
  @media (--md) {
    height: 40px;
    // transform: translateY(6px);
    width: 40px;
  }

  @media (--md) {
    // transform: translateY(9px);
  }

  & img {
    display: block;
  }
}
</style>
