<template>
  <div class="Card">
    <div class="Card-figure w-4/12">
      <Aspect ratio="5/4" class="">
        <img src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078339/okok/_DB30312-recut.jpg" alt="Callum Flack">
      </Aspect>
    </div>
    <div class="w-8/12 sm:w-10/12">
      <div class="h-full pl-2 lg:pl-4 flex flex-col justify-between">
        <div>
          <h1 v-if="title" class="Display s-m">
            {{ title }}
          </h1>
          <p v-if="lede" class="Text--base text-gray mb-2px lg:w-4/6">
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
        <div class="w-full lg:w-11/12">
          <FormNewsletter />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aspect from "../components/Aspect";
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
  @apply flex flex-row;
  @apply border-t border-b border-text py-2;
  /* @apply rounded-lg overflow-hidden; */
  /* box-shadow: 4px 4px 16px #cdcdcd; */
  /* @apply border border-text; */
  /* @apply bg-brand-highlight; */
  /* border-radius: 1rem; */
}

@screen lg {
  .Card {
    @apply py-3;
  }
  .Card-figure {
    width: calc(100% * 6 / 24);
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
