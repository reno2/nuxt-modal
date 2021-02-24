import ModalBus from "@/helpers/ModalBus.js";

export default {
  install(Vue, options) {
    Vue.prototype.$modals = new Vue({
      created() {
        this.$on("new", () => {
          this.open();
        });
      },

      methods: {
        open(options = null) {
          console.log("test");
          // ModalBus.$emit("new");
        }
      }
    });
  }
};
