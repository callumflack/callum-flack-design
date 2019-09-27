<template>
  <header id="top">
    <!-- about card -->
    <div v-if="$route.path === '/about'" class="Block">
      <div class="container container--text">
        <CardContact :title="title" :lede="lede" />
      </div>
    </div>

    <!-- projects or writing or newsletter -->
    <HeaderTitleWrap
      v-else-if="
        $route.path === '/projects' ||
          $route.path === '/writing' ||
          $route.path.includes('littoral')
      "
    >
      <div class="lg:w-9/12">
        <h1 v-if="title" class="Display s-h">{{ title }}</h1>
        <p v-if="lede" class="Link Text--sm text-gray">
          {{ lede }}
        </p>
        <FormNewsletter v-if="$route.path.includes('littoral')" class="st-h w-full" />
      </div>
    </HeaderTitleWrap>
  </header>
</template>

<script>
/*

  Header component
  …uses Block classes to align layout.

  * imported into `Wrap` component
  * Used on everything *but* `Post` layout

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

@screen lg {
  .Hgroup {
    width: calc(100% * 15 / 24);
  }
}
</style>
