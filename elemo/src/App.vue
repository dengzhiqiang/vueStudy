<template>
  <div id="app">
    <!-- 头部 -->
    <v-header></v-header>
    <div class="tab">
      i am tab!
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style>
  body {
    background: #000;
    color: deeppink;
    font-size: 18px;
  }
</style>
