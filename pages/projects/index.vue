
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

      //- h2.Heading.m-b2 Twenty Eighteen
      h2.Subtitle.m-b2 2018
      .Projects
        ProjectListItem(
          v-for="item in twentyeighteen"
          :key="item.title"
          :href="item.link"
          :title="item.title"
          :tags="item.tags"
          target="_blank"
        )

      h2.Subtitle.m-b2.b-pt075 2017
      .Projects
        ProjectListItem(
          v-for="item in twentyseventeen"
          :key="item.title"
          :href="item.link"
          :title="item.title"
          :tags="item.tags"
          target="_blank"
        )

      h2.Subtitle.m-b2.b-pt075 2016
      .Projects
        ProjectListItem(
          v-for="item in twentysixteen"
          :key="item.title"
          :href="item.link"
          :title="item.title"
          :tags="item.tags"
          target="_blank"
        )

      h2.Subtitle.m-b2.b-pt075 2015
      .Projects
        ProjectListItem(
          v-for="item in twentyfifteen"
          :key="item.title"
          :href="item.link"
          :title="item.title"
          :tags="item.tags"
          target="_blank"
        )

      h2.Subtitle.m-b2.b-pt075 2013
      .Projects
        ProjectListItem(
          v-for="item in twentythirteen"
          :key="item.title"
          :href="item.link"
          :title="item.title"
          :tags="item.tags"
          target="_blank"
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
    link: "https://thekiline.com/"
  },
  {
    title: "BrandHook",
    client: "BrandHook",
    medium: "Print YO",
    link: "https://brandhook.com.au/"
  },
  {
    title: "Edge Hill Butchery",
    client: "Edge Hill Butchery",
    link: "https://edgehillbutchery.com.au/"
  },
  {
    title: "Evernote Random Note",
    client: "Forte Labs",
    link: "https://evernote-random.glitch.me/"
  }
];

const twentyseventeen = [
  {
    title: "VJ Ray Strata Management",
    client: "",
    link: "https://www.vjray.com.au/"
  },
  {
    title: "AUM.ai",
    client: "",
    link: ""
  },
  {
    title: "RAATSICC",
    client: "",
    link: "https://raatsicc.org.au/"
  },
  {
    title: "Oceanblue Boats",
    client: "",
    link: "https://oceanblueboats.com.au/"
  },
  {
    title: "Album Registry",
    client: "",
    link: "https://albumregistry.com/"
  },
  {
    title: "Lendfirst Financial",
    client: "",
    link: "https://lendfirst.com.au/"
  }
];

const twentysixteen = [
  {
    title: "Gravitas Energy",
    client: "",
    tags: "Design, Frontend"
  },
  {
    title: "Wild Aviation",
    client: "",
    link: "https://wildaviationservices.com.au/"
  },
  {
    title: "Billy's Coffee",
    client: "",
    link: "https://billyscoffeecairns.com.au/"
  },
  {
    title: "Papa Chango",
    medium: "Print YO",
    client: "",
    tags: "Design"
  },
  {
    title: "Primary Healthcare Network NQ",
    client: ""
  },
  {
    title: "The Substation",
    client: "",
    link: "http://www.thesubstation.org.au/"
  },
  {
    title: "Oceanblue Living",
    client: "",
    link: "https://oceanblueliving.com.au/"
  }
];

const twentyfifteen = [
  {
    title: "Ward6",
    client: "",
    link: "http://www.ward6.asia/"
  },
  {
    title: "X",
    client: "",
    link: "http://www.ward6.asia/"
  }
];

const twentythirteen = [
  {
    title: "Ellis Jones Communications",
    client: "",
    link: "https://ellisjones.com.au/"
  }
];

export default {
  components: {
    ImageCld,
    ProjectListItem
  },
  props: {},
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

.Project-item + .Project-item {
  margin-top: 0;
}
</style>
