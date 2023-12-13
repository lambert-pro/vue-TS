<!-- App.vue-->
<template>
  <div class="header">
    <h4>Header</h4>
    <h4>Navbar</h4>
  </div>

  <div class="main">
    <h4>Banner轮播</h4>
    <ul>
      <li>商品信息</li>
    </ul>
  </div>

  <div class="footer">
    <h4>Footer</h4>
  </div>
</template>


<script>
  export default {
    name: 'App' //组件名称为App
  }
</script>

<style>
  .header, .main, .footer{
    border: 1px solid #999;
    margin-bottom: 4px;
  }
</style>