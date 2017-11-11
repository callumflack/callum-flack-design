<template lang="pug">
  figure(:class="classes")
    slot
</template>



<script scoped>
export default {
  name: "EmbedWrap",
  computed: {
    classes() {
      return [
        "Figure",
        {
          "Figure--mobile": this.mobile,
          "Figure--medium": this.medium,
          "Figure--large": this.large
        }
      ];
    }
  },
  props: {
    mobile: Boolean,
    medium: Boolean,
    large: String
  }
};
</script>



<style scoped>
@import "../assets/styles/vars.css";

.Figure {
  margin: var(--s4) 0;
  position: relative;
}

.Figure--paperWrap {
  @media (--small-viewport) {
    padding-left: var(--s5);
  }
}

.Figure--paper {
  /* border-radius: 24px; */
  box-shadow: 0 3pt 19pt rgba(0, 0, 0, 0.1), 0 9pt 38pt rgba(0, 0, 0, 0.1);
  /* filter: grayscale(25%); */
  overflow: hidden;
  transition: all 1s ease;
}

a:hover .Figure--paper {
  /* filter: grayscale(0); */
  transition: all 1s ease;
}

.Figure--portrait {
  border-radius: 24px;
  overflow: hidden;
}

.Figure--medium,
.Figure--large {
  position: relative;
  left: calc(-50vw + 50%);
  /* max-width: var(--container-xl); */
  width: 100vw;

  @media (--small-viewport) {
    left: calc(-40vw + 50%);
    width: 80vw;
  }
}

.Figure--large {
  @media (min-width: 1440px) {
    left: calc(-720px + 50%);
    width: 1440px;
  }
}

.Figure--medium {
  @media (min-width: 1024px) {
    left: calc(-512px + 50%);
    width: 1024px;
  }
}

.Figure--mobile {
  margin-left: auto;
  margin-right: auto;
  max-width: 358px;
  text-align: center;
}
</style>
