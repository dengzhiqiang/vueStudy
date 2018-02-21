<template>
  <div class="g-header">

    <div class="item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="item">
      <router-link to="/seller">卖家</router-link>
    </div>
    <div class="item">
      <router-link to="/star">评价</router-link>
    </div>
  </div>
</template>
<script>

</script>
<style>
  .g-header {
    display: flex;
    height: 40px;
    line-height: 40px;
    background: darkcyan;
  }
  .g-header .item{
    text-align: center;
    flex: 1;
  }
</style>

