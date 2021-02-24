<template>
  <div>
    <div class="wraper">
      <div class="header">
        <ul class="header__menu">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/modals">Modals</NuxtLink></li>
          <li><NuxtLink to="/">Text</NuxtLink></li>
        </ul>
      </div>
      <div class="container">
        <nuxt />
        <!-- <modal-wrapper /> -->
      </div>
    </div>
  </div>
</template>
<script>
import ModalBus from "@/helpers/ModalBus";
export default {};
</script>
<style>
.header__menu {
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
}
.container {
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  display: flex;
  text-align: left;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
