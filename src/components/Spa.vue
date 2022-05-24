<template>
  <div class="wrapper">
    <Header/>
    <main class="main-content container">
      <section class="section">
        <Form :prod="products"/>
        <Content :products="products" />
      </section>
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Form from "./Form.vue";
import Content from "./Content";
import { mapState } from "vuex";

export default {
  components: {
    Header,
    Form,
    Content,
  },
  computed: {
    ...mapState({
      products: (state) => state.products.products,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import '../layout.scss';


.section {
  display: flex;
  justify-content: flex-start;

  @include tablets {
    flex-direction: column;
    align-items: center;
  }
}


</style>
