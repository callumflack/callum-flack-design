<template>
  <div class="AboutTeam frame frame--columns Block-sm-t">
    <div class="grid-area-a">
      <div class="md:w-1/2 lg:w-5/12 Space">
        <ImageDynamic ratio="12/10" :src="callum.portrait" />
      </div>
      <div class="text-gray-dark">
        <h2>{{ callum.name }}</h2>
        <h3>{{ callum.title }}</h3>
        <p v-html="callum.lede"></p>
        <ul class="Text-sm">
          <li class="mb-0">
            <a :href="`mailto:${callum.contacts.email}`">
              Email: {{ callum.contacts.email }}
            </a>
          </li>
          <li>
            <a :href="`tel:0${callum.contacts.phone.replace(' ', '-')}`">
              Call: +61(0) {{ callum.contacts.phone }}
            </a>
          </li>
          <li>
            <a
              :href="`www.linkedin.com/in/${callum.contacts.linkedin}`"
              target="_blank"
              rel="noopener noreferrer"
              >Callum on Linkedin</a
            >
          </li>
          <li>
            <a
              :href="`https://github.com/${callum.contacts.github}`"
              target="_blank"
              rel="noopener noreferrer"
              >Callum on Github</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="grid-area-b">
      <div class="md:w-1/2 lg:w-5/12 Space">
        <ImageDynamic ratio="12/10" :src="barry.portrait" />
      </div>
      <div class="text-gray-dark">
        <h2>{{ barry.name }}</h2>
        <h3>{{ barry.title }}</h3>
        <p v-html="barry.lede"></p>
        <ul>
          <li v-for="(item, index) in barry.contacts" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ImageDynamic from "../components/ImageDynamic";

export default {
  components: {
    ImageDynamic,
  },
  data: () => ({
    callum: {
      name: "Callum Flack",
      title: "Design, Frontend and Project Management",
      portrait: "/images/cf-dwts-DB30312-recut.jpg",
      lede:
        "Since starting out in 2000, Callum has worked in London, Melbourne, Sydney and Brisbane, for design studios, advertising agencies and tech startups. Since 2015, Callum and his family have lived in Cairns, Australia. Before teaching himself to code websites starting in 2010, his career highlight was working as a brand designer at Saatchi & Saatchi Design, London in 2006. Callum has also run <a href='https://www.discogs.com/artist/2452856-Callum-Flack' target='_blank' rel='noopener noreferrer'>a few vinyl record labels in past years.</a>",
      contacts: {
        email: "callum@callumflack.design",
        phone: "408 767 540",
        linkedin: "callumflack",
        github: "callumflack",
      },
    },
    barry: {
      name: "Barry Phillip Hall",
      title: "Frontend, Backend",
      portrait: "/images/bph.jpg",
      lede:
        "Barry Hood is web developer with 3 years experience in the industry and 5 years experience writing code. Past work includes numerous branding websites, e-commerce stores, and custom CMS solutions. Independently engineered a custom portal for handling large scale product distribution at Rachio Inc. Curious from the outset, continually learning to keep up with the latest tools and practices. Most proficient with: Javascript, Vue, React and Node. Has also worked with many other technologies when fitting to the challenge at hand including PHP, Wordpress, SQL and python. Enjoys developing complex Single Page applications and gets gratification from solving problems and overcoming barriers.",
      contacts: {
        email: "barry@callumflack.design",
        github: "barryph",
      },
    },
  }),
};
</script>

<style lang="postcss">
.AboutTeam {
  /* margin-bottom: calc(theme(spacing.2) * var(--space-ratio)) !important; */
  grid-row-gap: var(--spacing5);
}
.AboutTeam h2 {
  @apply mt-0 mb-2px !important;
  /* margin-bottom: calc(theme(spacing.2) * var(--space-ratio)) !important; */
}
.AboutTeam h3 {
  @apply mt-0 !important;
  font-size: calc(theme(fontSize.sm) * var(--text-ratio));
}
/* .AboutTeam li:before {
  --markdown-text-indent: 0;
  content: initial;
} */
</style>
