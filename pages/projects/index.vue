
<template lang="pug">
article
  header.b-pb1(role="banner")
    .Container
      .b-ptTitle.w-sm-10x12
        h1.Supertitle.fw-300.m-b0
          | A selected archive of graphic design since 1999, and and web development since 2010.
        //- h2.Text.fw-400.m-t3
          span.fs-italic The quality of the connections is the key to quality.
          span.Blockquote-author — Charles Eames

  main(role="main")
    .Container

      h2.Heading.m-b2 Twenty Eighteen
      .Projects
        ProjectListItem(
          v-for="item in twentyeighteen"
          :key="item.title"
          :href="item.link"
          :title="item.title"
          :tags="item.tags"
          target="_blank"
        )

      h2.Heading.b-pt1 Twenty Seventeen
      .Projects
        ProjectListItem(
          v-for="item in twentyseventeen"
          :key="item.title"
          :href="item.link"
          :title="item.title"
          :tags="item.tags"
          target="_blank"
        )

      h2.Heading.b-pt1 Twenty Sixteen
      .Projects
        ProjectListItem(
          v-for="item in twentysixteen"
          :key="item.title"
          :href="item.link"
          :title="item.title"
          :tags="item.tags"
          target="_blank"
        )

      h2.Heading.b-pt1 Twenty Fifteen
      .Projects
        ProjectListItem(
          v-for="item in twentyfifteen"
          :key="item.title"
          :href="item.link"
          :title="item.title"
          :tags="item.tags"
          target="_blank"
        )

      h2.Heading.b-pt1 Twenty Thirteen
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
    tags: "Design, Frontend",
    link: "https://thekiline.com/"
  },
  {
    title: "Brandhook",
    client: "Brandhook",
    tags: "Design, Frontend",
    link: "https://brandhook.com.au/"
  },
  {
    title: "Edge Hill Butchery",
    client: "Edge Hill Butchery",
    tags: "Design, Frontend",
    link: "https://edgehillbutchery.com.au/"
  },
  {
    title: "Evernote Random Note",
    client: "Forte Labs",
    tags: "Design, Frontend",
    link: "https://evernote-random.glitch.me/"
  }
];

const twentyseventeen = [
  {
    title: "VJ Ray Strata Management",
    client: "",
    tags: "Design, Frontend",
    link: "https://www.vjray.com.au/"
  },
  {
    title: "AUM.ai",
    client: "",
    tags: "Design, Frontend",
    link: ""
  },
  {
    title: "RAATSICC",
    client: "",
    tags: "Design, Frontend",
    link: "https://raatsicc.org.au/"
  },
  {
    title: "Oceanblue Boats",
    client: "",
    tags: "Design, Frontend",
    link: "https://oceanblueboats.com.au/"
  },
  {
    title: "Album Registry",
    client: "",
    tags: "Design, Frontend",
    link: "https://albumregistry.com/"
  },
  {
    title: "Lendfirst Financial",
    client: "",
    tags: "Design, Frontend",
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
    tags: "Design, Frontend",
    link: "https://wildaviationservices.com.au/"
  },
  {
    title: "Billy's Coffee",
    client: "",
    tags: "Design, Frontend",
    link: "https://billyscoffeecairns.com.au/"
  },
  {
    title: "Papa Chango",
    medium: "Print",
    client: "",
    tags: "Design"
  },
  {
    title: "Primary Healthcare Network NQ",
    client: "",
    tags: "Design, Frontend"
  },
  {
    title: "The Substation",
    client: "",
    tags: "Design, Frontend",
    link: "http://www.thesubstation.org.au/"
  },
  {
    title: "Oceanblue Living",
    client: "",
    tags: "Design, Frontend",
    link: "https://oceanblueliving.com.au/"
  }
];

const twentyfifteen = [
  {
    title: "Ward6",
    client: "",
    tags: "Design, Frontend",
    link: "http://www.ward6.asia/"
  },
  {
    title: "X",
    client: "",
    tags: "Design, Frontend",
    link: "http://www.ward6.asia/"
  }
];

const twentythirteen = [
  {
    title: "Ellis Jones Communications",
    client: "",
    tags: "Design, Frontend",
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
