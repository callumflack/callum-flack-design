<template lang="pug">
  div
    //- .Slide(style="background-image: url(/images/qesm.jpg)")
    //- .Slide(style="background-image: url(/images/loop-06.gif)")
    //- .Slide.vh-slide(style="background-image: url(/images/papa-chango.jpg)")
    //- header.Hero2.block--matchFixedMenu
    //- img.p-b1(src="/images/hi.svg", alt="")

    header(role="banner")
      c-pageheading(
        projectSpace
        title="change-making digital design"
        lede="<span class='u-block ParagraphSpace'>Hi, I'm Callum Flack. I help owners and creators make websites and apps that resonate with their audience. I work fluidly across both brand and product design. I'm also an accomplished frontend developer.</span><span class='u-block'>Here's 5 ways I design change:</span>"
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

      section.Slide(style="background-color:rgba(236, 223, 194,0.5)")
        .FlexGridWrapper
          .FlexGrid
            .u-sm-size1of2.vh-slide.Slide.Slide--hi.CoverImage
            .u-sm-size1of2.m-t5.sm-m-t0
              .u-flex.u-flexAlignItemsCenter.h-100
                .container.container--sm.m-l0
                  p
                    span.sexy-number 1
                  h2.sexy 
                    | We all respond to beauty
                    //- span.u-lg-lineBreak Aesthetics matter.
                  //- p.m-t0.m-b0 Change happens in moments of sudden delight. We're drawn to pattern-matching, and when we arrive at insight, it's a pleasure. Aesthetics is the language of the heart. To resonate with your audience, I design for the heart. Like any risk, it takes courage. Yet the pay-off is rich, human connection.
                  //- Humans respond to beauty. we know when it feels right, in a sudden unconscious moment
                  //- p.m-t0.m-b0 We all make decisions with our heart and rationalise them with our head. The language of aesthetics works the same way: you'll know in a heartbeat when it's right. These insights are pleasurable because they're beautiful. To resonate deeply with people, I design for the heart.
                  p.m-t0.m-b0 
                    | You'll know in a heartbeat when it's right. To resonate deeply with people, I design first for the heart. 
                    //- nuxt-link(to="/work") See examples.
      
      //- section.Slide(style="background-color:rgba(236, 194, 194, 0.5)")
      section.Slide
        .u-flex.u-flexAlignItemsCenter.vh-slide
          .FlexGridWrapper.w-100
            .FlexGrid.h-100
              .u-sm-size1of2
                .container.m-a0.p-a0
                  .u-flex.u-flexAlignItemsCenter.sm-vh-slide
                    img(src="/images/_glow5.jpg")
              .u-sm-size1of2.m-t5.sm-m-t0.u-sm-flexOrderFirst
                .u-flex.u-flexAlignItemsCenter.u-flexJustifyEnd.h-100
                  .container.container--sm.m-x0.u-textRight
                    p.u-textRight
                      span.sexy-number 2
                    h2.sexy 
                      //- | Design + code
                      //- | Brand + product
                      //- | Online, brand &amp; product are one
                      //- | The brand &amp; product as one
                      | Your digital brand is a product in use
                    p.m-t0.m-b0 
                      //- | Your user's experience is dependent on fast load times as much as it is on visual feel and flow. The brand is inseparable from the product. "Doing" is the surest way of knowing the nuance of within digital products. That's why I'm as  
                      | Your user's experience is dependent on load time as much as it is on visual feel and flow. The digital brand is inseparable from the product. That's why I 
                      nuxt-link(to="/journal") design in code.
      
      //- section.Slide(style="background-color:rgb(231, 243, 245)")
      section.Slide(style="background-color:rgb(229, 232, 232)")
        .u-flex.u-flexAlignItemsCenter.vh-slide
          .FlexGridWrapper.w-100
            .FlexGrid.h-100
              .u-sm-size1of2
                .container.m-r0.p-a0.u-textRight
                  .u-flex.u-flexAlignItemsCenter.u-flexJustifyCenter.u-sm-flexJustifyEnd.vh-slide
                    c-movie(reverseButton iphone home src="/images/phn-video-m.mp4")
              .u-sm-size1of2.m-t5.sm-m-t0
                .u-flex.u-flexAlignItemsCenter.h-100
                  .container.container--sm.m-x0
                    p
                      span.sexy-number 3
                    h2.sexy 
                      //- | In the service of your audience
                      | Good design<br>is good business
                    p.m-t0.m-b0 
                      //- | My job is to help you bridge the gap between you and your audience by understanding your unique context, by designing for emotional connection and by building a digital system that satisfies you and your toughest customers years from now. 
                      | All business is about making bets on human behaviour. My job is to create digital communications and services that anticipate your audience with seamless, trustworthy experiences. Good design creates customers. 
                      //- | Good user experience design is like good manners. It's polite, listens and acknowledges. Good branding is like a wise friend. It anticipates, shows by action and not talk, and never X. My job is to help you bridge the gap between you and your audience by understanding your unique context, by designing for emotional connection and by building a digital system that satisfies you and your toughest customers years from now. 
                      //- | Trust and authenticity only happen when I work with my clients closely to achieve their business goals. It comes about as an outcome of doing the right things, at the right time, in the right way for the right reasons. 
                      nuxt-link(to="/about") See my design services.
      
      //- section.bg-dark.Slide.Slide--reverse.Slide--darken.CoverImage(style="background-image: url(/images/_rain.jpg)")
      //- section.bg-dark.Slide.Slide--reverse.Slide--red
      section.Slide.Slide--reverse.Slide--pattern.CoverImage
        .FlexChildrenCenter.vh-slide
          div
            .container.container--sm
              p
                span.sexy-number 4
              h2.sexy A daily practice since 2000
              p.m-t0.m-b0 The more I practise, the more I realise I didn't know. But I love what I do, so it's easy to keep practising. Here's three career highlights so far:
            .container.container--md.block--pt5
              .FlexGrid
                .u-sm-size1of3.Box
                  .super.super--number.c-bg.u-textCenter Listening
                  p I've worked around the world with great companies and talented people. Yet the place where I've learned the most is sitting with owners and creators, and listening. Great work results from mutual understanding of problem and possibility.
                .u-sm-size1of3.Box
                  .super.super--number.c-bg.u-textCenter Seeing
                  p The turning point in my career was learning to code. I already had a decade of experience as a graphic designer. It was hard! Doing so has allowed me to understand the world differently, like peering behind the curtains and suddenly seeing the gears.
                .u-sm-size1of3.Box
                  .super.super--number.c-bg.u-textCenter Joy
                  //- p Ordinary is dull. There are opportunities lurking everywhere to add wit, warmth and fireworks. We believe design can make the world a livelier place and that beautifully crafted ideas really do solve business problems. Our aim is to generate an outstanding return on your investment in design.
                  p I believe that design is a matter of paying attention. Both to the big picture and the stack of details. The work feeds me, I never tire of it. The joy I get from working allows me to see opportunities to transform dullness into warm, satisfying experiences. 
                  //- p That there's a chance for connection even in the mundane. All these chances are business opportunities if we can help people live better simply by paying attention to the details.
      
      section.Slide
        .FlexChildrenCenter.vh-slide
          div
            .container.container--sm
              p.sexy-number 5
              //- h2.sexy if the solution isn't beautiful, it's wrong
              h2.sexy everyone hungers for delight.
              //- p.m-t0.m-b0 Ideas without execution are merely dreams. When you want ideas realised such they resonate with people, talk to me. I focus on design doing, not design thinking. And I have built a range of skillsets to aoccomodate the SME client. As R. Buckminster Fuller said, "When I am working on a problem, I never think about beauty but when I have finished, if the solution is not beautiful, I know it is wrong."
              //- p.m-t0 Change happens in moments of sudden delight. I create change by designing digital brands and products that help make people's lives easier. Everyone feels reassured when they've been acknowledged by good service. It's delightful when it happens. Everyone hungers for delight.
              p.m-t0 People feel delighted when they've been acknowledged by good service. Change happens suddenly in those moments. You'll be remembered. 
              p I create change by designing digital brands and products that help your audience remember you. Interested? Let's discuss your ideas. 
              p
                a.Button.m-t1(href="mailto:callum@callumflack.design") Please email me

            

      //- section.Slide(style="background-color:rgb(231, 243, 245)")
        .FlexGridWrapper.u-felx.u-flexAlignItemsCenter.vh-slide
          .FlexGrid.w-100.h-100
            .u-sm-size1of2
              .container.m-a0.p-a0
                .u-flex.u-flexAlignItemsCenter.h-100
                  c-image(local, src="/images/_glow.jpg")
            .u-sm-size1of2
              .u-flex.u-flexAlignItemsCenter.u-flexJustifyEnd.h-100
                .container--sm.m-x0
      
      //- thin slides
      //- section.block--py7.Slide.Slide--sudden.Slide--reverse.CoverImage
        .container.container--lg
          .FlexGrid
            .u-sm-size1of2
              .u-flex.u-flexJustifyEnd
                .container.m-a0.p-a0
                  .AspectRatio.AspectRatio--16x9
                    .AspectRatio-object.CoverImage(style="background-image:url(/images/qesm.jpg)")
            .u-sm-size1of2
              .u-flex.u-flexAlignItemsCenter.h-100
                .container.container--sm.m-l0
                  h2.sexy 
                    | Speak to 
                    span.u-lg-lineBreak the heart
                  p.m-t0.m-b0 Change happens in moments of sudden delight. We're drawn to pattern-matching, and when we arrive at insight, it's a pleasure. Aesthetics is the language of the heart. To resonate with your audience, I design for the heart. 
      
      //- section.Slide(style="background-color:rgb(236, 194, 194)")
        .container.container--lg
          .FlexGrid
            .u-sm-size1of2
              .container.m-a0.p-a0
                .AspectRatio
                  .AspectRatio-object.CoverImage.Slide--interface
            .u-sm-size1of2.u-flexOrderFirst
              .u-flex.u-flexAlignItemsCenter.u-flexJustifyEnd.h-100
                .container--sm.m-x0.u-textRight
                  h2.sexy 
                    | Design + code
                    | Brand + product
                  p.m-t0.m-b0 
                    | Your user's experience is dependent on fast load times as much as it is on visual feel and flow. The brand is inseparable from the product. Like riding a bike, "doing" is the surest way of knowing the nuance of these complex processes. That's why I'm as  
                    nuxt-link(to="/journal") comfortable in a code editor
                    | &nbsp;as I am in design programs.
      

      
      //- section.block--py7.Slide.Slide--reverse.Slide--darken.CoverImage.FlexChildrenCenter(style="background-image:url(/images/loop-06.gif)")
        .container.container--sm.p-x0
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
import MarkdownImage from "~/components/MarkdownImage.vue";
import MarkdownMovie from "~/components/MarkdownMovie.vue";

export default {
  layout: "default",
  components: {
    "c-pageheading": PageHeading,
    "c-image": MarkdownImage,
    "c-movie": MarkdownMovie
  }
};
</script>

<style>
@import "../assets/styles/variables.css";

.Hero {
  height: calc(100vh * 2 / 3);
  height: 60vh;
}

.vh-slide,
.Slide {
  min-height: 60vh;

  @media (--sm) {
    min-height: 85vh;
  }
}

.sm-vh-slide {
  @media (--sm) {
    min-height: 85vh;
  }
}

.Slide {
  margin-left: auto;
  margin-right: auto;
  padding-top: var(--s-5);
  padding-bottom: var(--s-5);
  position: relative;

  @media (--sm) {
    padding: 0;
  }
}

.Slide + .Slide {
  /* margin-top: 1rem; */
}

.Slide--darken:after {
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: rgba(0, 0, 0, 0.925);
  background-color: rgba(0, 0, 0, 0.875);
  background-color: rgba(0, 0, 0, 1);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.Slide--red {
  background-color: rgba(0, 0, 0, 1);
  background-color: #271a1a;
}

.Slide--sudden {
  background-blend-mode: multiply;
  background-color: #ecdfc2;
  background-color: rgba(236, 223, 194, 0.5);
  background-image: url(/images/_sudden.jpg);
  background-position-y: 80%;
}

.Slide--lady {
  /* background-blend-mode: multiply; */
  background-color: rgba(236, 223, 194, 0.5);
  background-image: url(/images/_lady.jpg);
  /* background-position-y: 80%; */
}
.Slide--hi {
  /* background-blend-mode: multiply; */
  /* background-color: rgba(236, 223, 194, 0.5); */
  background-image: url(/images/hi.svg);
  /* background-position-y: 80%; */

  @media (--sm) {
    background-position-x: 70%;
  }
}

.Slide--pattern {
  background-blend-mode: multiply;
  background-color: hsl(41, 30%, 23%);
  background-color: #292522;
  background-color: #aaa;
  background-image: url(/images/_sudden.jpg);
  background-image: url(/images/_enticing-as-it-seems.jpg);
  background-image: url(/images/_overcast-night.jpg);
  /* background-position-y: 40%; */
}

.Slide--interface {
  background-blend-mode: multiply;
  background-color: rgb(236, 194, 194);
  background-image: url(/images/_riding.jpg);
  background-image: url(/images/_glow.jpg);
  /* background-position-y: 80%; */
}

.Slide--reverse {
  /* background-color: var(--c-text); */

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

  & .sexy-number {
    background-color: var(--c-bg);
    color: var(--c-text);
  }
}

.multiply {
  background-blend-mode: multiply;
  background-color: inherit;
}

.Box {
  border: 1px solid var(--c-textLight);
  /* background-color: rgba(255, 255, 255, 0.5); */
  padding: var(--s-4);

  & p {
    /* color: var(--c-text); */
  }
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
