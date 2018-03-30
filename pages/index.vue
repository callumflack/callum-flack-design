<template lang="pug">
  div
    header(role="banner")
      c-pageheading(
        projectSpace
        title="change-making digital design"
        lede="<span class='u-block ParagraphSpace'>Hi, I'm Callum Flack. I help owners and creators make websites and apps that attract, motivate and retain their audience. I work fluidly across both brand and product design. I'm also an accomplished frontend developer.</span><span class='u-block'>Here's 5 ways I design for audience change:</span>"
      )
    main(role="content")
      section.Slide(style="background-color:rgba(236, 223, 194,0.5)")
        .FlexGridWrapper
          .FlexGrid
            .u-md-size1of2.vh-Slide.Slide-texture--hi.CoverImage
            .u-md-size1of2.m-t5.sm-m-t0
              .u-flex.u-flexAlignItemsCenter.h-100
                .container.container--sm.m-l0
                  p
                    span.Super-number 1
                  h2.Super 
                    | We all respond<br>to beauty
                  p.m-t0.m-b0 
                    | You'll know in a heartbeat when it's right. To resonate deeply with people, I design for the heart first. 
      
      section.Slide
        .FlexGridWrapper
          .FlexGrid
            .u-md-size1of2
              .container.m-l0.p-a0
                .u-flex.u-flexAlignItemsCenter.sm-vh-Slide
                  c-lazyimage(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1522317578/okok/_glow5.jpg")
            .u-md-size1of2.m-t5.sm-m-t0.u-sm-flexOrderFirst
              .u-flex.u-flexAlignItemsCenter.u-flexJustifyEnd.h-100
                .container.container--sm.m-x0.u-md-textRight
                  p.u-md-textRight
                    span.Super-number 2
                  h2.Super 
                    | Your digital brand is a product 
                    span.u-table.u-sm-inlineBlock in use
                  p.m-t0.m-b0 
                    | Your user's experience is as dependent on load time as it is on visual feel and flow. The digital brand is inseparable from the product. That's why I can 
                    nuxt-link(to="/blog/designers-should-code") design in code
                    | &nbsp;— it gives the most immediate UX feedback.
      
      section.Slide(style="background-color:rgb(229, 232, 232)")
        .FlexGridWrapper
          .FlexGrid
            .u-md-size1of2
              .container.m-r0.p-a0.u-textRight
                .u-flex.u-flexAlignItemsCenter.u-flexJustifyCenter.u-sm-flexJustifyEnd.vh-Slide
                  c-movie(reverseButton iphone home src="/images/phn-video-m.mp4")
            .u-md-size1of2.m-t5.sm-m-t0
              .u-flex.u-flexAlignItemsCenter.h-100
                .container.container--sm.m-x0
                  p
                    span.Super-number 3
                  h2.Super 
                    | Good design<br>is good business
                  p.m-t0.m-b0 
                    | All business is about making bets on human behaviour. My job is to create digital communications and services that anticipate your audience with seamless experiences they'll trust intuitively. Good design creates customers. 
                    nuxt-link(to="/work") See project case studies.
      
      section.Slide.Slide-texture--reverse.Slide-texture--pattern.CoverImage
        .FlexChildrenCenter.vh-Slide
          div
            .container
              .container.container--sm.m-x0
                p
                  span.Super-number 4
                h2.Super A daily practice<br>since 2000
                p.m-t0.m-b0 Here's a few things I've learned on the journey so far:
            .container.container--md.block--pt5
              .FlexGridWrapper
                .FlexGrid
                  .u-md-size1of3.Box
                    .Box-heading.Title
                      span.Box-icon
                        img(src="/images/_listen.png", alt="")
                      span Listening
                    p I've worked around the world with great companies and talented people. Yet the place where I've learned the most is sitting with owners and creators, and listening. Great work results from a mutual understanding of problem and possibility.
                  .u-md-size1of3.Box
                    .Box-heading.Title
                      span.Box-icon
                        img(src="/images/_look.png", alt="")
                      span Seeing
                    p The turning point in my career was learning to code. I already had a decade of experience as a graphic designer. It was hard! Doing so has allowed me to understand the world differently, like peering behind the curtains and suddenly seeing the gears.
                  .u-md-size1of3.Box
                    .Box-heading.Title
                      span.Box-icon
                        img(src="/images/_joy.png", alt="")
                      span Fun
                    p I think design is a matter of paying attention. Both to the big picture and the stack of details. I find this process fun—it feeds me, I never tire of it. Having fun allows me to see opportunities to transform the ordinary into an energising experience. 
                      nuxt-link(to="/about") Read about me.
      
      section.Slide
        .FlexChildrenCenter.vh-Slide
          .container
            .container.container--sm.m-x0
              p.Super-number 5
              h2.Super everyone hungers for delight.
              p.m-t0 People feel delighted when they've been acknowledged by good service. Change happens suddenly in those moments. You'll be remembered and trusted. 
              p I create change by designing digital brands and products that help your audience remember you. Interested? Let's discuss your ideas. 
              p
                a.Button.m-t1(href="mailto:callum@callumflack.design") Please email me

</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import MarkdownImage from "~/components/MarkdownImage.vue";
import LazyImage from "~/components/LazyImage.vue";
import MarkdownMovie from "~/components/MarkdownMovie.vue";

export default {
  layout: "default",
  components: {
    "c-pageheading": PageHeading,
    "c-image": MarkdownImage,
    "c-lazyimage": LazyImage,
    "c-movie": MarkdownMovie
  }
};
</script>

<style>
@import "../assets/styles/variables.css";

.vh-Slide,
.Slide {
  min-height: 60vh;

  @media (--md) {
    min-height: 85vh;
  }
}

.sm-vh-Slide {
  @media (--md) {
    min-height: 85vh;
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
  background-blend-mode: multiply;
  /* background-color: hsl(41, 30%, 23%);
  background-color: #292522;
  background-color: #aaa;
  background-color: #886262; */
  background-color: #626c88;
  /* background-image: url(/images/_sudden.jpg); */
  /* background-image: url(/images/_enticing-as-it-seems.jpg); */
  /* background-image: url(/images/_overcast-night.jpg); */
  background-image: url("http://res.cloudinary.com/pw-img-cdn/image/upload/v1522321387/okok/_overcast-night.jpg");
}

.Slide-texture--interface {
  background-blend-mode: multiply;
  background-color: rgb(236, 194, 194);
  background-image: url(/images/_riding.jpg);
  background-image: url(/images/_glow.jpg);
  /* background-position-y: 80%; */
}

.Slide-texture--reverse {
  & .container {
    position: relative;
    z-index: 1;
  }

  & h2,
  & h3,
  & p {
    border-color: var(--c-bg);
    color: var(--c-bg);
  }

  & .Super-number {
    background-color: var(--c-bg);
    color: var(--c-text);
  }
}

.Box {
  border: 1px solid var(--c-textLight);
  border-color: #777;
  margin: 0 var(--s-4);
  padding: var(--s-3b);
  padding-top: var(--s-3);

  @media (--sm) {
    margin: 0;
  }

  @media (--lg) {
    padding: var(--s-4);
  }
}

.Box + .Box {
  margin-top: -1px;

  @media (--sm) {
    margin-left: -1px;
    margin-top: 0;
  }
}

.Box-heading {
  border-bottom: 1px solid currentColor;
  border-color: transparent;
  color: var(--c-bg);
  padding-bottom: 0;
  position: relative;

  & span {
    display: inline-block;
  }

  @media (--sm) {
    padding-bottom: 0.75rem;
  }
}

.Box-icon {
  display: inline-block;
  height: 32px;
  margin-right: var(--s-2);
  transform: translateY(4px);
  width: 32px;

  @media (--md) {
    height: 48px;
    transform: translateY(12px);
    width: 48px;
  }

  @media (--md) {
    transform: translateY(9px);
  }

  & img {
    display: block;
  }
}
</style>
