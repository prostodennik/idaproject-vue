<template>
  <ul class="content">
    <contentItem
      v-for="product in products"
      :key="product.id"
      :objectNames="product"
    />
  </ul>
</template>

<script>
import contentItem from "./contentItem.vue";

export default {
  props: {
    products: Array,
  },
  components: {
    contentItem,
  },
};
</script>

<style lang="scss" scoped>
@import '../layout.scss';


.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @include tablets {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @include phones {
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
}
</style>
