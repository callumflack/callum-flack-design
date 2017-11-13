<template lang="pug">
  .Container
    nav.Nav.Meta.u-flexJustifyBetween
      div
        nuxt-link(to='/') Page title
      div
        a(href="#") Menu
        //- button.icon-wrap.-btn
          span.icon
            //- svg(xmlns="http://www.w3.org/2000/svg", version="1.1", x="0", y="0", width="30", height="16", viewbox="0 0 30 16", xml:space="preserve")
            //-   rect(width="30", height="1.5")
            //-   rect(y="7", width="30", height="1.5")
            //-   rect(y="14", width="30", height="1.5")
            svg(xmlns="http://www.w3.org/2000/svg", version="1.1", x="0", y="0", width="30", height="10", viewbox="0 0 30 10", xml:space="preserve")
              rect(width="30", height="1.5")
              rect(y="8", width="30", height="1.5")

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
  border-bottom: 1px solid var(--color-text);
  display: flex;
  opacity: 1;
  padding-top: 3rem;
  padding-bottom: 6px;
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

  &:focus {
    outline: none;
  }
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
  height: 10px;
  line-height: 1;
  position: relative;
  text-align: center;
  transform: translateY(2px);
  width: 30px;
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
