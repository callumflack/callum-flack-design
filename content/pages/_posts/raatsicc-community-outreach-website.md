---
category: project
layout: post
title: RAATSICC website
date: 2017-10-15
lede: A content-managed website to help spread positive community outreach news.
note: Completed in collaboration with Barry Phillip Hall.
thumbImage: https://res.cloudinary.com/pw-img-cdn/image/upload/v1516953098/okok/thumb-raatsicc.jpg
thumbInCloudinary: true
assets: 
  cover: https://res.cloudinary.com/pw-img-cdn/image/upload/v1517273310/okok/raatsicc-desktop-hero.jpg
tags: 
  - UI
  - code
---

<!-- heroRatio: 1872/2880 -->

RAATSICC is a grassroots organisation that provides social services for Aboriginal and Torres Strait Island children and families in remote far north Queensland. I helped them rethink what their website could be, and created a performant online resource for their audiences.

> Callum has responded to our needs by listening and helping us through the process so that we've got a website that helps us talk to our communities. We have trust and control in our relationship. **Emma Schuh, Secretary**

<Media ratio="1289/2880" image="https://res.cloudinary.com/pw-img-cdn/image/upload/v1522320481/okok/raatsicc-mobile-screens-dark.png" />

With the majority of their audience in remote locations with reduced internet coverage, the site performance had to be best-in-class. For example, I used an image service to resize images on the fly to match a user's screen size. The resulting Google Web Performance tests [speak for themselves](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://www.raatsicc.org.au).

<MediaVideo ratio="540/779" frame src="287001742" />

We've been working together since rebuilding the RAATSICC website in 2016. Our relationship is fluent, so we're able to talk about their changing needs and update their platform quickly and easily. This helps RAATSICC use their website to help educate and service many remote communities.

<PostButton link="https://raatsicc.org.au" label="Visit RAATSICC" />

<script>
import Media from "../../../src/components/Media";
import MediaVideo from "../../../src/components/MediaVideo";
import PostButton from "../../../src/components/PostButton";
export default {
  components: {
    Media,
    MediaVideo,
    PostButton,
  }
}
</script>
