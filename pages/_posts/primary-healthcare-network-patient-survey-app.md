---
layout: post
category: projects
title: Primary Healthcare Network NQ
date: 2016-08-12
lede: A mobile-first responsive web app to survey patient well-being in North Queensland.
assets:
  cover: /images/phn-card.jpg
tags:
  - design
  - frontend
---

Primary Healthcare Network North Queensland wanted to digitise the World Health Organisation's Quality of Life survey to rapidly and economically build a map of patient well-being in their service areas. We built a maintainable, easy to use responsive website that worked on any screen size, and which securely stored patient responses.

All data collected was anonymous. At survey completion, users were presented with a quality of life score, which they could share by email or SMS.

<MediaVideo iphone src="286998126" />

<!-- We built the app using React.js to allow flexible iteration as feedback required it. For example, we can now add offline capability into the app without rewritting it. This may become useful in remote parts of Queensland with intermittent internet coverage. -->

Close collaboration was essential: I had to understand the use cases for the survey for PHN staff, service providers and patients. The better the experience, the more people will complete the survey, and the greater benefit for PHN.

<Media frame ratio="2304/3072" image="/images/phn-survey-score.png" />

A well-defined series of workflows with clear interface design means the app can be used with no more than general smartphone knowledge. However, I also provided guides and screencasts for staff and their patients to encourage their use.

<!-- > Client quote here” _CEO dude_ -->

<Media ratio="1500/1376" image="/images/phn-guide.png" />

<!-- And the app is easily adaptable as we discover further use cases over time.  -->

The resulting survey app immediately created value for PHN. It's an experience that patients and staff find fast, simple and easy. This helps PHN to collect quality data they can use to improve their services.

This app is not publicly available. Please get in touch for a demo. {.Note}

<script>
import Media from "../../src/components/Media";
import MediaVideo from "../../src/components/MediaVideo";
export default {
  components: { 
    Media,
    MediaVideo,
  }
}
</script>
