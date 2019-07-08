<template>
  <div class="Card">
    <div class="Card-figure w-4/12 sm:w-3/12">
      <ImageDynamic
        cover
        src="/images/cf-dwts-DB30312-recut.jpg"
        alt="Callum Flack"
      />
    </div>
    <div class="Card-body sm:w-8/12">
      <div class="s-h">
        <h1 v-if="title" class="Display s-m">
          {{ title }}
        </h1>
        <p v-if="lede" class="Text--base text-gray mb-2px lg:w-5/6">
          {{ lede }}
        </p>
        <ul class="Text--base text-gray">
          <li>
            <a :href="`mailto:${this.$siteConfig.email}`" target="_blank" rel="noopener noreferrer">
              <icon name="email" class="mr-1"></icon>
              {{ this.$siteConfig.email }}
            </a>
          </li>
          <!-- <li>
          <a :href="`tel:${this.$siteConfig.phone.replace(' ', '-')}`" target="_blank" rel="noopener noreferrer">
            <icon name="phone" class="mr-1"></icon>
            {{ this.$siteConfig.phone }}
          </a>
        </li> -->
          <li>
            <a :href="`https://twitter.com/${this.$siteConfig.social.twitter}`" target="_blank" rel="noopener noreferrer">
              <icon name="twitter" class="mr-1"></icon>
              @{{ this.$siteConfig.social.twitter }}
            </a>
          </li>
        </ul>
      </div>

      <FormNewsletter class="lg:w-11/12" />
    </div>
  </div>
</template>

<script>
import Aspect from "../components/Aspect";
import ImageDynamic from "../components/ImageDynamic";
import FormNewsletter from "../components/FormNewsletter";
import Vue from "vue";
import SvgIcon from 'vue-svgicon';
import '../components/icons';

Vue.use(SvgIcon, {
  tagName: "icon",
  isOriginalDefault: true,
  defaultWidth: "0.9em",
  defaultHeight: "0.9em",
});

export default {
  components: {
    Aspect,
    ImageDynamic,
    FormNewsletter
  },
  props: {
    title: String,
    lede: String,
  }
}
</script>

<style lang="postcss" scoped>
.Card {
  @apply border-t border-b border-text py-3;
  /* @apply pl-6 pr-6; */
}

.Card-figure {
  @apply relative float-left;
  height: 120px;
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
    @apply float-none h-auto;
  }
  .Card-figure >>> figure {
    @apply pr-0;
  }
  .Card-body {
    /* @apply h-full flex flex-col justify-between; */
    @apply pl-3;
  }
}

@screen lg {
  .Card {
    @apply py-3;
  }
  .Card-figure {
    width: calc(100% * 6 / 24);
  }
  .Card-body {
    width: calc(100% * 18 / 24);
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
