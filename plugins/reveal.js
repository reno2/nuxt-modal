import Vue from "vue";

const Bus = new Vue();

const ReModal = {};
ReModal.install = Vue => {
  Vue.prototype.$modals = new Vue({
    name: "$modals",

    created() {
      Bus.$on("opened", data => {
        this.$emit("modals:opened", data);
      });

      Bus.$on("closed", data => {
        this.$emit("modals:closed", data);
      });

      Bus.$on("destroyed", data => {
        this.$emit("modals:destroyed", data);
      });

      this.$on("new", options => {
        this.open(options);
      });

      this.$on("close", data => {
        this.close(data);
      });

      this.$on("dismiss", index => {
        this.dismiss(index || null);
      });
    },

    methods: {
      open(options = null) {
        Bus.$emit("new", options);
      },

      close(data = null) {
        Bus.$emit("close", data);
      },

      dismiss(index = null) {
        Bus.$emit("dismiss", index);
      }
    }
  });

  Vue.mixin({
    created() {
      this.$on("modals:new", options => {
        Bus.$emit("new", options);
      });

      this.$on("modals:close", data => {
        Bus.$emit("close", data);
      });

      this.$on("modals:dismiss", index => {
        Bus.$emit("dismiss", index);
      });
    }
  });
};
