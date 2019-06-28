<template>
  <div class="Card">
    <div class="w-4/12 sm:w-3/12">
      <Aspect ratio="5/4">
        <img src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1544078339/okok/_DB30312-recut.jpg" alt="Callum Flack">
      </Aspect>
    </div>
    <div class="w-8/12 sm:w-9/12">
      <div class="Contact no-link-block h-full">
        <div class="p-4 lg:p-6">
          <p class="Meta s-m">
            Get in touch:
          </p>
          <ul class="">
            <li>
              <a :href="`mailto:${this.$siteConfig.email}`" target="_blank" rel="noopener noreferrer">{{ this.$siteConfig.email }}</a>
            </li>
            <li>
              <a :href="`tel:${this.$siteConfig.phone.replace(' ', '-')}`" target="_blank" rel="noopener noreferrer">{{ this.$siteConfig.phone }}</a>
            </li>
            <li>
              <a :href="`https://twitter.com/${this.$siteConfig.social.twitter}`" target="_blank" rel="noopener noreferrer">@{{ this.$siteConfig.social.twitter }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aspect from "../components/Aspect";

export default {
  components: {
    Aspect
  },
  // data: () =({})
}
</script>

<style lang="postcss" scoped>
.Card {
  @apply flex flex-row rounded-lg overflow-hidden;
  @apply border-4 border-white;
  /* border-color: rgba(255, 255, 255, 0.5); */
}

.Contact {
  @apply bg-brand-header;
  /* @apply border-l-4 border-white; */
  /* border-color: rgba(255, 255, 255, 0.5); */
}

.Contact ::selection {
  @apply bg-white;
}

.Contact a:hover {
  @apply text-text;
}
</style>
