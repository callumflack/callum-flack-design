<template lang="pug">
div(:class="currentPageClass")
  table.w-100
    tbody
      tr
        nuxt

  table.nl-footer
    tbody
      tr
        td.Container.nl-container
          .nl-content
            table
              tbody
                tr
                  td(align="center")
                    .nl-spacer
                      // p.Text--sm.c-textLight.u-textCenter ———
                      hr
                      p.Text.Text--sm.Text--footer.c-textLight.u-textCenter
                        | ❏ Interesting
                        br
                        | An infrequent electronic letter from 
                        a(href="http://twitter.com/callumflack/") Callum Flack
                        | .
                        br
                        | Subscribe here.

</template>

<script>
export default {
  computed: {
    currentPageClass: function() {
      return `page-${this.$store.state.currentPage}`;
    }
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

.nl-footer {
  width: 100%;
  clear: both !important;
}
</style>
