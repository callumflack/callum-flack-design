---
layout: post
category: projects
date: 2019-06-15
title: RAATSICC
lede: A content-managed website to help spread community outreach news and education.
link: https://www.raatsicc.org.au/
assets: 
  cover: /images/raatsicc-hero-job-1440.jpg
tags: 
  - design
  - frontend
  - featured
---

<!-- heroRatio: 1872/2880 -->

RAATSICC is a grassroots organisation that provides social services for Aboriginal and Torres Strait Island children and families in remote far north Queensland. I helped them rethink what their website could be, and created a performant online resource for their audiences.

<Media ratio="1289/2880" image="/images/raatsicc-mobile-screens-dark.png" />

With the majority of their audience in remote locations on reduced internet coverage, the site performance had to be best-in-class. For example, I used an image service to resize images on the fly to match a user's screen size, cutting down page load sizes. The resulting Google Web Performance results [speak for themselves](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://www.raatsicc.org.au).

<MediaVideo ratio="540/779" frame src="287001742" />

RAATSICC and I have been working together since rebuilding their website in 2016. Our relationship is fluent, so we're able to talk about their changing needs and update their platform quickly and easily. This helps RAATSICC contually improve their website to better educate and service their remote communities.

> Callum has responded to our needs by listening and helping us through the process so that we've got a website that helps us talk to our communities. We have trust and control in our relationship. **Emma Schuh, Secretary**

<PostButton link="https://raatsicc.org.au" label="Visit RAATSICC" />

<script>
import Media from "../../src/components/Media";
import MediaVideo from "../../src/components/MediaVideo";
import PostButton from "../../src/components/PostButton";
export default {
  components: {
    Media,
    MediaVideo,
    PostButton,
  }
}
</script>
