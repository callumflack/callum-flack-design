<template>
  <Wrap :page="page" kind="index">
    <IndexHomeBlock :block="page" class="bg-one">
      <FormNewsletter class="st-2xh lg:w-9/12"></FormNewsletter>
    </IndexHomeBlock>
  </Wrap>
</template>

<script>
import FormNewsletter from "../components/FormNewsletter";
import IndexHomeBlock from "../components/IndexHomeBlock.vue";
import Wrap from "../components/Wrap.vue";

export default {
  components: {
    FormNewsletter,
    IndexHomeBlock,
    Wrap,
  },
  props: ["page"],
};
</script>
