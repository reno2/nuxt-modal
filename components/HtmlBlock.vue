<template>
  <transition name="slide-fade">
    <div class="modal">
      <div class="modal_header">
        {{ title }}
        <span @click="close">X</span>
      </div>
      <div class="modal_inner">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import ModalBus from "@/helpers/ModalBus";
export default {
  name: "HtmlBlock",
  props: {
    title: "",
    html: ""
  },
  methods: {
    close() {
      ModalBus.$emit("close");
    }
  }
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.modal {
  z-index: 999;
  background: #fff;
  width: 500px;
  height: fit-content;
}
</style>
