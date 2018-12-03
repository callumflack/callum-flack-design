
<template lang="pug">
article
  header.b-pb1(role="banner")
    .Container
      .b-ptTitle.w-sm-10x12
        h1.Supertitle.fw-300.m-b0
          | A selected archive of graphic design since 1999, and web development since 2010.
        //- h2.Text.fw-400.m-t3
          span.fs-italic The quality of the connections is the key to quality.
          span.Blockquote-author — Charles Eames

  main(role="main")
    .Container

      h2.Subtitle.m-b2 2018
      .Projects
        ProjectListItem(
          v-for="item in twentyeighteen"
          v-bind="item"
          :key="item.title"
        )

      h2.Subtitle.m-b2.b-pt075 2017
      .Projects
        ProjectListItem(
          v-for="item in twentyseventeen"
          v-bind="item"
          :key="item.title"
        )

      h2.Subtitle.m-b2.b-pt075 2016
      .Projects
        ProjectListItem(
          v-for="item in twentysixteen"
          v-bind="item"
          :key="item.title"
        )

      h2.Subtitle.m-b2.b-pt075 2015
      .Projects
        ProjectListItem(
          v-for="item in twentyfifteen"
          v-bind="item"
          :key="item.title"
        )

      h2.Subtitle.m-b2.b-pt075 2013
      .Projects
        ProjectListItem(
          v-for="item in twentythirteen"
          v-bind="item"
          :key="item.title"
        )

</template>

<script>
import ImageCld from "~/components/ImageLazyCldOrig.vue";
import ProjectListItem from "~/components/ProjectListItem.vue";

/* src-placeholder="https://res.cloudinary.com/pw-img-cdn/image/fetch/w_50,e_blur:300/https://res.cloudinary.com/pw-img-cdn/image/upload/v1533123284/okok/cf-dwts-01-16x9.jpg" */

const twentyeighteen = [
  {
    title: "The Ki Line",
    client: "Ki",
    link: "https://thekiline.com/",
    disabled: true
  },
  {
    title: "BrandHook",
    link: "https://brandhook.com.au/"
  },
  {
    title: "Edge Hill Butchery",
    link: "https://edgehillbutchery.com.au/"
  },
  {
    title: "Evernote Random Note",
    client: "Forte Labs",
    link: "https://evernote-random.glitch.me/"
  },
  {
    title: "Xeljanz Australia",
    client: "Sudler & Hennessey",
    tags: "Design",
    link: ""
  }
];

const twentyseventeen = [
  {
    title: "VJ Ray Strata Management",
    link: "https://www.vjray.com.au/"
  },
  {
    title: "AUM.ai",
    link: ""
  },
  {
    title: "RAATSICC",
    link: "/blog/raatsicc-community-outreach-website",
    external: false
  },
  {
    title: "Oceanblue Boats",
    link: "https://oceanblueboats.com.au/"
  },
  {
    title: "Album Registry",
    link: "https://albumregistry.com/"
  },
  {
    title: "Lendfirst Financial",
    link: "https://lendfirst.com.au/"
  }
];

const twentysixteen = [
  {
    title: "Gravitas Energy",
    tags: "Design, Frontend",
    disabled: true
  },
  {
    title: "Wild Aviation",
    link: "https://wildaviationservices.com.au/"
  },
  {
    title: "Billy's Coffee",
    link: "https://billyscoffeecairns.com.au/"
  },
  {
    title: "Papa Chango",
    medium: "Packaging",
    tags: "Design",
    link: "/blog/raatsicc-community-outreach-website",
    external: false
  },
  {
    title: "Primary Healthcare Network NQ",
    link: "/blog/primary-healthcare-network-patient-survey-app",
    external: false
  },
  {
    title: "The Substation",
    link: "http://www.thesubstation.org.au/"
  },
  {
    title: "Oceanblue Living",
    link: "https://oceanblueliving.com.au/"
  }
];

const twentyfifteen = [
  {
    title: "Ward6",
    link: "http://www.ward6.asia/"
  },
  {
    title: "X",
    link: "http://www.ward6.asia/"
  }
];

const twentythirteen = [
  {
    title: "Ellis Jones Communications",
    link: "https://ellisjones.com.au/"
  }
];

export default {
  components: {
    ImageCld,
    ProjectListItem
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    external: {
      type: Boolean,
      default: true
    },
    link: String,
    medium: {
      type: String,
      default: "Website"
    },
    tags: {
      type: String,
      default: "Design, Frontend"
    },
    title: String
  },
  data() {
    return {
      twentyeighteen,
      twentyseventeen,
      twentysixteen,
      twentyfifteen,
      twentythirteen
    };
  },
  head() {
    return {
      title: `Projects—Callum Flack Design`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Projects—`
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
.Projects {
  /* border-top: 1px solid var(--c-text); */
  padding-left: var(--text-indent);
}

.Project-item {
  border-bottom: 1px solid var(--c-border);
  padding: var(--s-3) 0;
  transition: all 150ms ease;

  &:hover {
    border-color: var(--c-text);
    transition: all 150ms ease;
  }

  &:first-of-type {
    /* border-top: 0; */
    /* margin-top: -1px; */
  }
  &:last-of-type {
    /* border-bottom: 1px solid var(--c-border); */
  }
}

/* .Project-item + .Project-item {
  margin-top: 0;
} */
</style>
