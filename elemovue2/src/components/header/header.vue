<template>
  <div class="g-header">
    <div class="item">
      <router-link to="/good">商品</router-link>
    </div>
    <div class="item">
      <router-link to="/seller">卖家</router-link>
    </div>
    <div class="item">
      <router-link to="/star">star</router-link>
    </div>
  </div>
</template>
<script>

</script>


<style>
  .g-header {
    background: darkgoldenrod;
    display: flex;
    height: 40px;
    line-height: 40px;
  }

  .g-header .item {
    flex: 1;
  }
</style>
