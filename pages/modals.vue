<template>
  <section>
    <h2>Страница модал</h2>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae
      asperiores sequi maiores est. Dolor exercitationem, nostrum vero eaque
      repudiandae, ad quisquam aspernatur commodi at sunt illo culpa, fuga sed.
    </div>
    <button @click="click">open modal</button>
  </section>
</template>

<script>
export default {
  methods: {
    click() {
      this.$modals.$emit("new");
    }
  }
};
</script>

<style></style>
