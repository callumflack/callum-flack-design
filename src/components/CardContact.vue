<template>
  <div class="Card">
    <div class="w-4/12 sm:w-3/12">
      <Aspect ratio="5/4" class="">
        <img src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078339/okok/_DB30312-recut.jpg" alt="Callum Flack">
      </Aspect>
    </div>
    <div class="w-8/12 sm:w-9/12">
      <div class="h-full p-4 lg:p-6">
        <h1 v-if="title" class="Display s-m">
          {{ title }}
        </h1>
        <p v-if="lede" class="s-m">
          {{ lede }}
        </p>
        <ul class="Text--base">
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
    </div>
  </div>
</template>

<script>
import Aspect from "../components/Aspect";
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
    Aspect
  },
  props: {
    title: String,
    lede: String,
  }
  // data: () =({})
}
</script>

<style lang="postcss" scoped>
.Card {
  @apply flex flex-row rounded-lg overflow-hidden;
  @apply border border-text;
  @apply bg-brand-highlight;
  /* border-color: rgba(255, 255, 255, 0.5); */
  border-radius: 1rem;
}

.Card img {
  filter: grayscale(1);
  /* mix-blend-mode: multiply; */
}

a {
  line-height: 1.5;
}
</style>
