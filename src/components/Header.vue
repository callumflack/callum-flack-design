<template>
  <header id="top">
    <!-- home or newsletter -->
    <HeaderTitleWrap v-if="$route.path === '/' || $route.path.includes('littoral')">
      <h1 v-if="title" class="Display s-h">{{ title }}</h1>
      <p v-if="lede" class="Link Text--sm text-gray">
        {{ lede }}
        <saber-link v-if="$route.path === '/'" to="/about.html" class="text-text">
          Learn more &#8594;
        </saber-link>
      </p>
      <div v-if="$route.path.includes('littoral')" class="st-h w-full">
        <FormNewsletter />
      </div>
    </HeaderTitleWrap>

    <!-- about card -->
    <div v-if="$route.path === '/about.html'" class="Block Block--withNav">
      <div class="container container--text">
        <CardContact :title="title" :lede="lede" />
      </div>
    </div>

    <!-- projects or writing archives -->
    <HeaderTitleWrap
      v-if="$route.path === '/projects.html' || $route.path === '/writing.html'"
    >
      <h1 v-if="title" class="Display s-h">{{ title }}</h1>
      <p v-if="lede" class="Link Text--sm text-gray">
        {{ lede }}
      </p>
    </HeaderTitleWrap>
  </header>
</template>

<script>
/*

  Header component
  …uses Block classes to align layout.

  Used on:
  * Home
  * Newsletter
  * About
  * Writing (not in nav)
  * Projects (not in nav)

*/
import CardContact from "../components/CardContact";
import FormNewsletter from "../components/FormNewsletter";
import HeaderTitleWrap from "../components/HeaderTitleWrap";

export default {
  components: {
    CardContact,
    FormNewsletter,
    HeaderTitleWrap,
  },
  props: {
    /*  siteTitle: {
      type: String,
      required: true
    }, */
    title: {
      type: String,
      required: true,
      default: "Page title",
    },
    lede: {
      type: String,
      required: false,
    },
    /* newsletter: {
      type: Boolean,
      required: false,
    }, */
    /* category: {
      type: String,
      required: false
    }, */
  },
  /* computed: {
    blockClass() {
      return this.$route.path === "/" ? "Block Block--home" : "Block Block--withNav"
    }
  } */
};
</script>

<style lang="postcss" scoped>
.Block--home {
  /* standard Block is spacing.32 (8 rem) */
  /* padding-top: calc(10rem * var(--block-size-ratio)); */
}
.Block--withNav {
  padding-top: calc(theme(spacing.24) * var(--block-size-ratio));
}

.Hgroup {
}

@screen lg {
  .Hgroup {
    width: calc(100% * 15 / 24);
  }
}
</style>
