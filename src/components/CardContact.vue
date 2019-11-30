<template>
  <div class="Card">
    <div class="Card-figure w-4/12 sm:w-3/12 s-h sm:mb-0">
      <ImageDynamic cover src="/images/cf-dwts-DB30312-recut.jpg" alt="Callum Flack" />
    </div>
    <div class="Card-body sm:w-8/12">
      <div class="sm:-mt-1">
        <h1 v-if="title" class="Display s-m">{{ title }}</h1>
        <p v-if="lede" class="Text-base text-gray s-m lg:w-11/12">{{ lede }}</p>
        <ul class="Text-base text-gray">
          <li>
            <a :href="`mailto:${this.$siteConfig.email}`" target="_blank" rel="noopener noreferrer">
              <icon name="email" class="mr-1"></icon>
              {{ this.$siteConfig.email }}
            </a>
          </li>
          <li>
            <a
              :href="`tel:${this.$siteConfig.phone.replace(' ', '-')}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon name="phone" class="mr-1"></icon>
              {{ this.$siteConfig.phone }}
            </a>
          </li>
          <li>
            <a
              :href="`https://twitter.com/${this.$siteConfig.social.twitter}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon name="twitter" class="mr-1"></icon>
              @{{ this.$siteConfig.social.twitter }}
            </a>
          </li>
        </ul>
      </div>

      <!-- <FormNewsletter class="lg:w-11/12" /> -->
    </div>
  </div>
</template>

<script>
import ImageDynamic from "../components/ImageDynamic";
import FormNewsletter from "../components/FormNewsletter";
import "../components/icons";

export default {
  components: {
    ImageDynamic,
    FormNewsletter,
  },
  props: {
    title: String,
    lede: String,
  },
};
</script>

<style lang="postcss" scoped>
.Card {
  /* @apply border-t border-b border-text py-3; */
  /* @apply pl-6 pr-6; */
}

.Card-figure {
  @apply relative;
  height: 100px;
}
.Card-figure >>> figure {
  @apply pr-3;
}

.Card-body {
  /* @apply flex flex-1; */
}

@screen sm {
  .Card {
    @apply flex flex-row;
    /* @apply p-0; */
  }
  .Card-figure {
    @apply h-auto;
  }
  .Card-figure >>> figure {
    @apply pr-0;
  }
  .Card-body {
    /* @apply h-full flex flex-col justify-between; */
    @apply pl-4;
  }
}

@screen lg {
  .Card {
    /* @apply py-3; */
  }
  .Card-figure {
    width: calc(100% * 5 / 24);
  }
  .Card-body {
    width: calc(100% * 19 / 24);
  }
}

.Card img {
  /* filter: grayscale(1); */
  /* mix-blend-mode: multiply; */
}

a {
  line-height: 1.5;
}
</style>
