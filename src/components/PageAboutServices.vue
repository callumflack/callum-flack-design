<template>
  <div class="AboutServices frame frame--columns text-gray-dark">
    <div class="grid-area-a">
      <h2>{{ design.title }}</h2>
      <p>{{ design.lede }}</p>
      <ul>
        <li v-for="(item, index) in design.items" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="grid-area-b">
      <h2>{{ dev.title }}</h2>
      <p>{{ dev.lede }}</p>
      <ul>
        <li v-for="(item, index) in dev.items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    design: {
      title: "Design",
      lede:
        "We design with the grain of the web. We're well versed in the constraints, and the opportunities. We make the complex simple, and the simple unique.",
      /* Designed to work, without losing the sense of ease that good craft delivers. */
      items: [
        "User experience",
        "Interface design",
        "Graphic design",
        "Identity design",
      ],
    },
    dev: {
      title: "Development",
      lede:
        "Our focus is the web. We use modern tools to build performant, secure sites that are easy to iterate. We design in code to prototype how products feel.",
      items: [
        "Frontend web development",
        "API creation and integration",
        "Serverless functions",
        "Backend managment",
      ],
    },
  }),
};
</script>

<style lang="postcss">
.AboutServices h2 {
  @apply mt-0 !important;
}
</style>
