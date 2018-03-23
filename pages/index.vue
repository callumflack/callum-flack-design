<template lang="pug">
  div
    //- .Slide(style="background-image: url(/images/qesm.jpg)")
    //- .Slide(style="background-image: url(/images/loop-06.gif)")
    //- .Slide.vh-100(style="background-image: url(/images/papa-chango.jpg)")
    //- header.Hero2.block--matchFixedMenu
    //- img.p-b1(src="/images/hi.svg", alt="")

    header(role="banner")
      c-pageheading(
        projectSpace
        title="Designed to <span class='u-sm-lineBreak'>find a spark</span>"
        lede="Hi, I'm Callum Flack. I'm a digital designer who works fluidly across both brand and product. I'm also an accomplished frontend developer. Here's 5 things you should know about me:"
      )
    //- header.Hero.Slide(style="background-image: url(/images/hi.jpg)")
      //- .block--py7.z-1.u-posRelative(role="banner")
      .h-100.z-1.u-posRelative(role="banner")
        .container
          //- .figure--large.u-posRelative.m-t0
          //- .u-size7of12.m-aAuto.u-flex.u-flexAlignItemsCenter.h-100
          .m-aAuto.u-flex.u-flexAlignItemsCenter.h-100
            .bg-black.p-a4
              //- h1.text.u-textCenter.c-white.p-b1 
                | Change happens in moments 
                span.u-lg-lineBreakCenter of sudden delight.
              h1.sexy.u-textCenter.c-white.p-b1 
                | Change happens in moments 
                span.u-lg-lineBreakCenter of sudden delight.
    
    //- main.block--pt6.block--pb7(role="content")
    main(role="content")

      section.block--py7.Slide(style="background-color:#ecdfc2")
        .container.container--lg
          .FlexGrid
            .u-sm-size1of2
              .u-flex.u-flexJustifyEnd
                .container.m-a0.p-a0
                  .AspectRatio.AspectRatio--16x9
                    .AspectRatio-object.CoverImage(style="background-image: url(/images/qesm.jpg)")
            .u-sm-size1of2
              .u-flex.u-flexAlignItemsCenter.h-100
                .container.container--sm.m-l0
                  h2.sexy 
                    | Speak to 
                    span.u-lg-lineBreak the heart
                  p.m-t0.m-b0 Change happens in moments of sudden delight. We're drawn to pattern-matching, and when we arrive at insight, it's a pleasure. Aesthetics is the language of the heart. To resonate with your audience, I design for the heart. 
      
      section.Slide(style="background-color:rgb(236, 194, 194)")
        .container.container--lg
          .FlexGrid
            .u-sm-size1of2
              .container.m-a0.p-a0
                .AspectRatio
                  .AspectRatio-object.CoverImage.multiply(
                    style="background-image: url(/images/_riding.jpg);background-color:rgb(236, 194, 194)"
                  )
            .u-sm-size1of2.u-flexOrderFirst
              .u-flex.u-flexAlignItemsCenter.u-flexJustifyEnd.h-100
                .container--sm.m-x0.u-textRight
                  h2.sexy 
                    | Design &amp; code
                    | Brand &amp; product
                  p.m-t0.m-b0 
                    | Your user's experience is dependent on fast load times as much as it is on visual feel and flow. The brand is inseparable from the product. Like riding a bike, "doing" is the surest way of knowing the nuance of these complex processes. That's why I'm as  
                    nuxt-link(to="/journal") comfortable in a code editor
                    | &nbsp;as I am in design programs.
      
      //- section.block--py7.Slide.Slide--reverse.Slide--darken.CoverImage.FlexChildrenCenter(style="background-image:url(/images/loop-06.gif)")
        .container.container--sm.p-x0
          h2.sexy speak to<br>the heart
          p.m-t0.m-b0 I think that change happens in sudden moments of delightful insight. As human beings we're drawn to aesthetics, to pattern-matching. When we find matching patterns, it's a delight. To make an impact with people
            nuxt-link(to="/journal") makes me a better designer.
      
      section.block--py7.bg-dark.Slide.Slide--reverse.Slide--darken.CoverImage(style="background-image: url(/images/_practise.jpg)")
        .container.container--sm
          h2.sexy Practising daily since 2000
          p.m-t0.m-b0 The more I practise, the more I realise I didn't know. But I love what I do, so it's easy to keep practising. Here's three career highlights so far:
        .container.container--md.block--pt5
          .FlexGrid
            .u-sm-size1of3.Box
              .super.super--number.c-bg.u-textCenter 1
              p I've worked around the world, with great companies and talented people. But the place where I've learned the most is running my own business, sitting with owners and creators, and listening. Great work can only be the result of thoughtful dialogue.
            .u-sm-size1of3.Box
              .super.super--number.c-bg.u-textCenter 2
              p The turning point in my career was learning to code. I already had a decade of experience as a graphic designer. It was hard! but doing so allowed me to see the world differently, like peering behind the curtains and suddenly being able to see the gears.
            .u-sm-size1of3.Box
              .super.super--number.c-bg.u-textCenter 3
              p X

      
      section.block--py7.Shade(style="background-color:#171515")
        .container.container--lg
          .FlexGrid
            .u-sm-size1of2
              .u-flex.u-flexJustifyEnd
                .container.m-a0.p-a0
                  .AspectRatio.AspectRatio--16x9
                    .AspectRatio-object.CoverImage(style="background-image: url(/images/papa-chango.jpg)")
            .u-sm-size1of2
              .u-flex.u-flexAlignItemsCenter.h-100
                .container--sm.m-x0
                  h2.sexy speak to<br>the heart
                  p.m-t0.m-b0 I think that change happens in sudden moments of delightful insight. As human beings we're drawn to aesthetics, to pattern-matching. When we find matching patterns, it's a delight. To make an impact with people
                    nuxt-link(to="/journal") makes me a better designer.
      

      //- section.block--pb6
        .u-flex.u-flexJustifyCenter.u-flexAlignItemsStretch
          .FlexChildrenCenter.container.container--sm.m-x0.Box
            h2.sexy.u-textCenter design<br>&amp; code
          .container.container--sm.m-x0.u-flexOrderFirst
            p.u-textRight I'm as comfortable in a code editor as I am in design programs. I think that hands-on "doing" is the best way to design. And the closest you get to that in digital is the code itself. Designing in code 
              nuxt-link(to="/journal") makes me a better designer.
      //- section.block--pb6
        .u-flex.u-flexJustifyCenter.u-flexAlignItemsStretch
          .FlexChildrenCenter.container.container--sm.m-x0.Box
            h2.sexy.u-textCenter design is listening
          .container.container--sm.m-x0
            p Design isn't about what it looks like, it's how it sparks a message within or enables a service for your audience. To do that, I have to listen to you, to your audience. 
              nuxt-link(to="/work") makes me a better designer.
      //- section.block--pb6
        .u-flex.u-flexJustifyCenter.u-flexAlignItemsStretch
          .FlexChildrenCenter.container.container--sm.m-x0.Box
            h2.sexy.u-textCenter brand &amp; product
          .container.container--sm.m-x0.u-flexOrderFirst
            p In digital products, like websites and apps, the brand is inseperable from the product. But if you know the industry… Yet why do most agencies Because it's hard. 
              nuxt-link(to="/work") Link
      //- section.block--pb6
        .u-flex.u-flexJustifyCenter.u-flexAlignItemsStretch
          .FlexChildrenCenter.container.container--sm.m-x0.Box
            h2.sexy.u-textCenter you cannot not communicate
          .container.container--sm.m-x0
            p Branding is misunderstood because you can make a lot of money doing it. If you ignore it, you're branding anyway.  
              nuxt-link(to="/work") makes me a better designer.
      //- section.block--pb6
        .u-flex.u-flexJustifyCenter.u-flexAlignItemsStretch
          .FlexChildrenCenter.container.container--sm.m-x0.Box
            h2.sexy.u-textCenter plan, design &amp; build
            h2.sexy.u-textCenter the dance
          .container.container--sm.m-x0.u-flexOrderFirst
            p Blah 
              nuxt-link(to="/work") Link



</template>

<script>
import PageHeading from "~/components/PageHeading2.vue";

export default {
  layout: "default",
  components: {
    "c-pageheading": PageHeading
  }
};
</script>

<style>
@import "../assets/styles/variables.css";

.Hero {
  height: calc(100vh * 2 / 3);
  height: 60vh;
}

.Slide {
  margin-left: auto;
  margin-right: auto;
  min-height: 50vh;
  position: relative;
}

.Slide--reverse {
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
}

.Slide--darken:after {
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: rgba(0, 0, 0, 0.7);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.multiply {
  background-color: inherit;
  background-blend-mode: multiply;
}

.Box {
  border: 1px solid var(--c-gray);
  padding: var(--s-4);
}

.Box + .Box {
  border-left-width: 0;
}

.Caption {
  border-left: 1px solid var(--c-text);
  /* padding-left: var(--s-5); */
}
.Caption--right {
  border-right: 1px solid var(--c-text);
}

.Reverse {
  background-color: var(--c-dark);

  & h2 {
    color: var(--c-white);
  }

  & p {
    color: var(--c-gray);
  }
}
</style>
