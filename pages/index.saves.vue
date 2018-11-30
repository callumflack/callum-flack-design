<template lang="pug">
  //- header.b-pb2
    .Container.Header--animate
      .Extract-hero(role="banner")
        .AspectRatio.AspectRatio--8x5
          .AspectRatio-object(style="opacity:0.5")
            iframe(
              src="https://player.vimeo.com/video/261113972?background=1"
              width="100%"
              height="100%"
              frameborder="0"
              allowTransparency="true"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen>
            )
          .AspectRatio-object.Blend
            .Container
              .f.f-alignItemsCenter.h-100
                .w-lg-11x12.m-xA
                  h1.Supertitle.u-textCenter.c-bg
                    | Make the complex simple#[br]
                    | and the simple unique.
                  h2.Subtitle.u-textCenter.c-bg 
                    //- | Attractive website design + development#[br]
                    //- | for perceptive audiences.
                    | Visual design, ux and code#[br]
                    | for perceptive audiences.
                  p.u-textCenter.m-md-t6
                    button.Button.Button--roundRev.Meta.fs-text-sm.fw-400(@click.prevent="handleModalToggle")
                      | Watch the showreel
                      span.Arrow.Arrow--right.m-l2

    //- article.b-pb2
    //- .Container
      .Scope-post
        .fs-block-lg.u-textCenter
          p.m-b0
            | In the digital age, your branding is tactile—the technology is inseparable from the brand. People only pay attention when they trust that your interface will work. It's not enough to visualise it. You have to be able to build it. So you can 
            em feel 
            | how it works. You'll know in a heartbeat when it's right. And so will your audience. This is where I can help. 
            nuxt-link(to="/about") 
              em.fs-italic I'm a designer who codes.
            | &nbsp`;
  //- .b-pb2
    .Container
      //- .Extract-large
      hr.bg-text.b-mt2
      //- p 
        | Because website involve alot of choices, I write as a means to better understand how the web and people's attention works, and to think through possibilities. Here's the latest post. Or check out 
        nuxt-link(to="/blog") the blog.
      //- p.fs-text-lg.u-textCenter.b-mb1
        nuxt-link.Button.Button--round.Meta.fs-text-sm.fw-400(to="/blog")
          | Peruse the blog
          span.Arrow.Arrow--right.m-l2
      //- .fs-block-l
        p.m-b0.u-textCente
          | Because website involve alot of choices, I write as a means to better understand how the web and people's attention works, and to think through possibilities. Here's the latest post. Or check out 
          nuxt-link(to="/blog") the blog.
  //- .b-pb2
    PostExcerpt(
      v-for="post in homePagePost"
      :category="post.category"
      :date="post.date"
      :heroImage="post.heroImage"
      :heroImageNoShadow="post.heroImageNoShadow"
      :heroRatio="post.heroRatio"
      :key="post.permalink"
      :lede="post.lede"
      :permalink="post.permalink"
      :readingTime="post.readingTime"
      :showOnHomePage="post.showOnHomePage"
      :thumbImage="post.thumbImage"
      :tags="post.tags"
      :title="post.title"
    )
</template>
