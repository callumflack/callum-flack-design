
<template lang="pug">
article
  header.b-pb1(role="banner")
    .Container
      .b-pt3.w-sm-9x12
        h1.Supertitle.fw-300.m-b0
          | A selected archive of work since 2001.
        //- h2.Text.fw-400.m-t3
          span.fs-italic The quality of the connections is the key to quality.
          span.Blockquote-author — Charles Eames

  main(role="main")
    .Container

      h2.Heading.fs-normal Twenty Eighteen
      .Projects
        ProjectListItem(
          v-for="item in twentyeighteen"
          :key="item.title"
          :href="item.link"
          :title="item.title"
          :tags="item.tags"
          target="_blank"
        )

      h2.Heading.fs-normal.b-pt1 Twenty Seventeen
      .Projects
        ProjectListItem(
          v-for="item in twentyseventeen"
          :key="item.title"
          :href="item.link"
          :title="item.title"
          :tags="item.tags"
          target="_blank"
        )

      h2.Heading.fs-normal.b-pt1 Twenty Sixteen
      .Projects
        ProjectListItem(
          v-for="item in twentysixteen"
          :key="item.title"
          :href="item.link"
          :title="item.title"
          :tags="item.tags"
          target="_blank"
        )

      h2.Heading.fs-normal.b-pt1 Twenty Fifteen
      .Projects
        ProjectListItem(
          v-for="item in twentyfifteen"
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
    tags: "Design, Frontend development",
    link: "https://thekiline.com/"
  },
  {
    title: "Brandhook",
    client: "Brandhook",
    tags: "Design, Frontend development",
    link: "https://brandhook.com.au/"
  },
  {
    title: "Edge Hill Butchery",
    client: "Edge Hill Butchery",
    tags: "Design, Frontend development",
    link: "https://edgehillbutchery.com.au/"
  }
];

const twentyseventeen = [
  {
    title: "VJ Ray Strata Management",
    client: "",
    tags: "Design, Frontend development",
    link: "https://www.vjray.com.au/"
  },
  {
    title: "RAATSICC",
    client: "",
    tags: "Design, Frontend development",
    link: "https://raatsicc.org.au/"
  },
  {
    title: "Oceanblue Boats",
    client: "",
    tags: "Design, Frontend development",
    link: "https://oceanblueboats.com.au/"
  },
  {
    title: "Album Registry",
    client: "",
    tags: "Design, Frontend development",
    link: "https://albumregistry.com/"
  },
  {
    title: "Lendfirst Financial",
    client: "",
    tags: "Design, Frontend development",
    link: "https://lendfirst.com.au/"
  }
];

const twentysixteen = [
  {
    title: "Album Registry",
    client: "",
    tags: "Design, Frontend development",
    link: "https://albumregistry.com/"
  },
  {
    title: "Primary Healthcare Network NQ",
    client: "",
    tags: "Design, Frontend development"
  },
  {
    title: "The Substation",
    client: "",
    tags: "Design, Frontend development",
    link: "http://www.thesubstation.org.au/"
  },
  {
    title: "Oceanblue Living",
    client: "",
    tags: "Design, Frontend development",
    link: "https://oceanblueliving.com.au/"
  }
];

const twentyfifteen = [
  {
    title: "Ward6",
    client: "",
    tags: "Design, Frontend development",
    link: "http://www.ward6.asia/"
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
      twentyfifteen
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
  border-top: 1px solid var(--c-text);
  padding-left: var(--text-indent);
}

.Project-item {
  border-top: 1px solid var(--c-border);
  padding: var(--s-3) 0;

  &:first-of-type {
    border-top: 0;
    margin-top: -1px;
  }
  &:last-of-type {
    border-bottom: 1px solid var(--c-border);
  }
}

.Project-item + .Project-item {
  margin-top: 0;
}
</style>
