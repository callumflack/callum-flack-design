<template>
  <header id="top">
    <HeaderNav v-if="$route.path !== '/'" />

    <!-- home or newsletter intro -->
    <div
      v-if="$route.path === '/' || $route.path.includes('littoral')"
      :class="blockClass"
    >
      <div class="container container--list">
        <div class="lg:w-8/12">
          <!-- <h1 v-if="title" class="Display s-m">
            Digital brands, products &amp; thinking by
            <saber-link v-if="$route.path === '/'" to="/about.html" class="text-text">
              CFd
            </saber-link>
          </h1> -->
          <h1 v-if="title" class="Display s-h">{{ title }}</h1>
          <p v-if="lede" class="Link Text--sm text-gray">
            {{ lede }}
            <saber-link v-if="$route.path === '/'" to="/about.html">
              Learn more &rightarrow;
            </saber-link>
          </p>
          <!-- <p v-if="newsletter" class="Link Text--base text-gray s-h">
            {{ newsletter }}
            <saber-link to="/the-littoral-line.html">
              Here's the archive.
            </saber-link>
          </p> -->
          <div v-if="$route.path.includes('littoral')" class="st-h w-full">
            <FormNewsletter />
          </div>
        </div>
      </div>
    </div>

    <!-- about intro card -->
    <div v-if="$route.path === '/about.html'" class="Block Block--withNav">
      <div class="container container--text">
        <CardContact :title="title" :lede="lede" />
      </div>
    </div>
  </header>
</template>

<script>
import CardContact from "../components/CardContact";
import FormNewsletter from "../components/FormNewsletter";
import HeaderNav from "../components/HeaderNav";

export default {
  components: {
    CardContact,
    FormNewsletter,
    HeaderNav
  },
  props: {
    siteTitle: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: "Page title"
    },
    lede: {
      type: String,
      required: false
    },
    newsletter: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: false
    },
  },
  computed: {
    blockClass() {
      return this.$route.path === "/" ? "Block Block--home" : "Block Block--withNav"
    }
  }
}
</script>

<style lang="postcss" scoped>
.Block--home {
  padding-top: calc(theme(spacing.32) * var(--block-size-ratio)); /* 32 = 8 rem */
  padding-top: calc(10rem * var(--block-size-ratio));
}
.Block--withNav {
  padding-top: calc(theme(spacing.24) * var(--block-size-ratio));
}

.Hgroup {
}

@screen lg {
  .Hgroup {
    width: calc(100% * 15/24);
  }
}
</style>
