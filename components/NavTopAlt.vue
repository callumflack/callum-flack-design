<template lang="pug">
  .Container
    nav.Nav.Meta.u-flexJustifyBetween
      div
        nuxt-link(to='/') C.F.
      div
        button.icon-wrap.-btn
          span.icon
            svg(xmlns="http://www.w3.org/2000/svg", version="1.1", x="0", y="0", width="24", height="18", viewbox="0 0 24 18", xml:space="preserve")
              rect(width="24", height="2")
              rect(y="8", width="24", height="2")
              rect(y="16", width="24", height="2")

</template>
  

<script scoped>
import Container from "~/components/Container.vue";
import NavLink from "~/components/NavLink.vue";

export default {
  name: "nav-top-alt",
  components: {
    Container,
    NavLink
  }
};
</script>

<style scoped>
@import "../assets/styles/vars.css";

.Nav {
  background-color: transparent;
  display: flex;
  opacity: 1;
  padding-top: 3rem;
  transform: translateY(0);
  transition: opacity var(--transition-duration),
    transform 250ms var(--transition-duration);
  z-index: 99;

  &.hidden {
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity var(--transition-duration),
      transform 250ms var(--transition-duration);
  }
}

.-btn {
  background: 0 0;
  border: none;
  cursor: pointer;
  -webkit-appearance: none;
  transition: color 400ms ease, background-color 400ms ease,
    border-color 400ms ease;
}

.icon-wrap {
  cursor: pointer;
  display: inline-block;
  margin: -20px;
  padding: 20px;
}

.icon {
  cursor: pointer;
  display: inline-block;
  height: 18px;
  line-height: 1;
  position: relative;
  text-align: center;
  width: 24px;
}

.icon svg {
  fill: #121212;
  transition: fill 400ms ease;
}

.nuxt-link-active {
}

.nuxt-link-exact-active {
}
</style>
