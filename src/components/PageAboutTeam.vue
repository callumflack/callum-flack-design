<template>
  <div class="AboutTeam frame frame--columns Block-sm-t">
    <div class="grid-area-a">
      <div class="md:w-1/2 lg:w-6/12 Space">
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
            <a :href="`tel:0${callum.contacts.phone.replace(/ /g, '-')}`">
              Call: +61(0) {{ callum.contacts.phone }}
            </a>
          </li>
          <li>
            <a
              :href="`www.linkedin.com/in/${callum.contacts.linkedin}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              Callum on Linkedin
            </a>
          </li>
          <li>
            <a
              :href="`https://github.com/${callum.contacts.github}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              Callum on Github
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="grid-area-b">
      <div class="md:w-1/2 lg:w-6/12 Space">
        <ImageDynamic ratio="12/10" :src="barry.portrait" />
      </div>
      <div class="text-gray-dark">
        <h2>{{ barry.name }}</h2>
        <h3>{{ barry.title }}</h3>
        <p v-html="barry.lede"></p>
        <ul class="Text-sm">
          <li class="mb-0">
            <a :href="`mailto:${barry.contacts.email}`">
              Email: {{ barry.contacts.email }}
            </a>
          </li>
          <li>
            <a
              :href="`https://github.com/${barry.contacts.github}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              Barry on Github
            </a>
          </li>
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
      title: "Design, Frontend, Project Management",
      portrait: "/images/cf-dwts-DB30312-recut.jpg",
      lede:
        "Since starting out in 2000, Callum has worked in London, Melbourne, Sydney and Brisbane, for design studios, advertising agencies and tech startups. Since 2015, Callum and his family have lived in <a href='https://www.instagram.com/p/B6NQntepU-c' target='_blank' rel='noopener noreferrer'>Cairns, Australia</a>. Before teaching himself to code websites starting in 2010, his career highlight was working as a brand designer at Saatchi & Saatchi Design, London in 2006. Callum has also run <a href='https://www.discogs.com/artist/2452856-Callum-Flack' target='_blank' rel='noopener noreferrer'>a few vinyl record labels in past years.</a>",
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
        "Curious from the outset, continually learning to keep apace with the ongoing web tech revolutions, Barry is proficient with Vue.js, React.js and Node.js. He recently singlehandedly engineered a custom portal for handling large scale product distribution at Rachio Inc, proving his capacity for diligent problem-solving. As expected, he's a dab hand with other technologies like PHP, Wordpress, SQL and Python. Barry is also a drummer.",
      contacts: {
        email: "barryph@protonmail.com",
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
