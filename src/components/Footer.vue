<template>
  <footer class="frame Block2">
    <p
      v-if="$route.path === '/about'"
      class="col-span-6 xl:col-span-8"
      v-html="about"
    ></p>
    <p v-else class="col-span-6 xl:col-span-8" v-html="about"></p>
    <div class="Block2-sm-t col-span-12">
      <p class="Input--pseudo Text">
        <a :href="`mailto:${contact.email}`" class="flex justify-between">
          <span>Email</span>
          <span>{{ contact.email }}</span>
        </a>
      </p>
      <p class="Input--pseudo Text">
        <a
          :href="`tel:0${contact.phone.replace(' ', '-')}`"
          class="flex justify-between"
        >
          <span>Phone</span>
          <span>+61(0) {{ contact.phone }}</span>
        </a>
      </p>
      <FormNewsletter class></FormNewsletter>
    </div>
  </footer>
</template>

<script>
import FormNewsletter from "../components/FormNewsletter";

export default {
  components: {
    FormNewsletter,
  },
  props: {
    kind: String,
    nextpost: {
      type: Object,
      default: undefined,
    },
  },
  data: () => ({
    about: "Contact Callum to discuss new projects:",
    lede:
      "CF/BPH is a co-op between Callum Flack and Barry Phillip Hall. We work remotely from Cairns, Australia and Christchurch, New Zealand respectively. Good work starts with knowing you and your imagined tomorrow <span class='tracking-hyphen'>——</span> contact Callum to discuss new projects:",
    contact: {
      email: "callum@callumflack.design",
      phone: "408 767 540",
    },
  }),
  computed: {
    spacerClasses() {
      return this.nextpost ? "Block-t" : "Block-lg";
    },
    /* blockColorClass() {
      return this.kind === "index" && "bg-brand-neutral";
    }, */
    linkTypography() {
      return !this.nextpost && "Nav-link justify-center";
    },
    link() {
      return this.nextpost && this.nextpost.link;
    },
    heroImageBlend() {
      return (
        this.nextpost &&
        this.nextpost.hero &&
        this.nextpost.hero.imageBlend &&
        "BlendImage"
      );
    },
    heroTitleColor() {
      return this.nextpost && this.nextpost.hero && "text-white";
    },
    // currentPost() {
    //   return this.posts
    //     .find(x => x.attributes.permalink === this.$route.path)
    //   // if (this.$route.path.includes('blog')) {

    //   // }
    //   // return null;
    // }
  },
};
</script>

<style lang="postcss" scoped>
/* .BlendImage {
  @apply bg-text;
}
.BlendImage >>> img {
  opacity: 0.8;
} */
.Lede {
  grid-column: 2 / span 7;
}
</style>
