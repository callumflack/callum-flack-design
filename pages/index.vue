<template lang="pug">
  div
    .Container
      .Block--hero
        h1 How do you build the future? By design.
      .Block--half
        p Do you want more control/fingerspritzenfughl with your digital service and marketing to reach more valuable customer markets without spending enormous amounts on agencies that may or may not deliver anyway? increasing your costs and or outsourcing to cheap? Want to increase conversion rate, AOV, and reorder rate? 
        p Callum Flack is a solo design + development specialist who draws upon 16 years of uses research-driven A/B tests to capture lost revenue for online stores. Unlike other optimization-focused agencies, Draft uses design research to quadruple our clients’ overall success rate over the industry average.&nbsp;
          a(href="") This is a link. 
        blockquote 
          p This is a quoted testimonial from someone good.
        p Join thousands of awesome designers &amp; smart business owners in receiving our weekly letter. Every Monday since 2012, we’ve written about research-driven A/B testing, value-based design, the world’s only sandwich, and how to make a significant economic impact in your business:
        .Grid-cell--center.u-size5of6.u-marginT5
          c-formnewsletter
    
    .Block
      .Container.Container--hero
        h1 Watch a showreel
        .Block--half
          .FlexEmbed
            .FlexEmbed-ratio.FlexEmbed-ratio--16by9
            .FlexEmbed-content
              .Showreel.u-posPin
                .Showreel-start.Sans--large(@click.native="play")
                  | Play #[span.u-arrowEast]
              video.Showreel-video(poster="videos/selfie@1x.png", autoplay, loop)
                //- source(src="videos/selfie.mp4", type="video/mp4")
                img(src="videos/selfie@1x.png", alt="")
        //- .Block--half
          h1 #[a(href="/work") view work]

</template>

<script>
import FormNewsletter from "~/components/form-newsletter.vue";

export default {
  components: {
    "c-formnewsletter": FormNewsletter
  },
  data() {
    return {
      projects: []
    };
  },
  async asyncData({ app, route, payload }) {
    const projects = await app.$content("/projects").getAll();

    // get featured projects
    const featuredProjects = projects.filter(project => project.featured);
    // console.log(featuredProjects);

    return {
      projects: featuredProjects
    };
  },

  methods: {
    play: function() {
      const video = document.getElementsByTagName("video")[0];
      video.autoplay = false;
      video.loop = false;
      video.controls = true;

      const source = video.getElementsByTagName("source");
      source.src = "videos/showreel.mp4";

      // console.log(source.src);

      video.load();

      // document.getElementsByTagName('body')[0].className = 'fade-black';
      // document.getElementsByClassName('start')[0].style.display = 'none';

      setTimeout(function() {
        video.play();
      }, 500);
    }
  }
};
</script>

<style>
@import "../assets/styles/vars.css";

.Highlight {
  background-color: rgba(255, 227, 0, 0.1);
  background-color: #98f8ba;
  background-color: rgba(152, 248, 186, 1);
}

.Yellow {
  background-color: rgba(152, 248, 186, 0.5);
  background-color: rgba(255, 245, 128, 0.7);
}

.Border {
  border: 2px solid var(--color-text);
}

.Border + .Border {
  margin-top: -1px;
}

.Border-inset {
  padding: 0 0 0 36px;
  padding: 30px 24px 30px 36px;
}

.Showreel {
  align-items: center;
  display: flex;
  justify-content: center;
}

.Showreel-start {
  align-items: center;
  border-radius: 999px;
  background: white;
  cursor: pointer;
  display: flex;
  height: 140px;
  justify-content: center;
  width: 140px;
  z-index: 1;
}

.Showreel-start:hover {
}

.Showreel-video {
  display: block;
  height: auto;
  position: relative;
  width: 100%;
}

.fade-black {
  transition: background-color 0.25s ease-in-out;
  background-color: black;
  color: white;
}

.fade-black a {
  color: white;
  border-color: white;
}
</style>
