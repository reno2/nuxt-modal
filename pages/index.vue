<template>

    <div>
      <h1 class="title">
        modal
      </h1>
        <button @click="click">Real component</button>
        <button @click="click4">Component string2</button>
        <button @click="click2">Html 2</button>
        <button @click="click3">Html 3</button>
        <ModalWrapper/>
    </div>
  </div>
</template>

<script>
import Reveal from "@/components/Reveal";
import ModalBus from "@/helpers/ModalBus";
//import ModalWrapper from "@/components/ModalWrapper";
export default {
    methods:{
        click(){
            ModalBus.$emit('open', {component: Reveal});
            //this.$modals.$emit('new');
        },
        click4(){
            ModalBus.$emit('open', {component: 'Reveal'});
        },
        click2(){
            ModalBus.$emit('html', {html: '<h1>text by h1</h1>', title: 'Test ttitle'});
            //this.$modals.$emit('new');
        },
        click3(){
            ModalBus.$emit('html', {html: '<h2>Новый текст </h2>', title: 'Новый заголовок'});
            //this.$modals.$emit('new');
        }
    }
};
</script>
isObject
<style>

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
