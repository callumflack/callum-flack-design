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
        "Most importantly, we make things that work. Our team is extremely well versed in product and interface design for screens of all kinds.",
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
        "Our focus is the web. We use modern frontend tools to build performant, secure faster, more efficient and without error. We integrate development with design to prototype how products feel.",
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
