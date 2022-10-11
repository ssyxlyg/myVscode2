<!--
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-10 15:38:32
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-10 15:50:04
 * @FilePath: \vsFile\myvue\src\views\Admin\index.vue
-->
<template>
  <div>
    <h1>管理页面</h1>
    <div class="wrapper">
      <div class="left">
        <router-link to="/admin/order">订单列表</router-link> <br />
        <router-link to="/admin/ucenter">用户中心</router-link>
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
}
.wrapper .left {
  width: 25%;
  height: 100vh;
  background-color: skyblue;
}
.wrapper .right {
  width: 75%;
  height: 100vh;
  background-color: lightgray;
}
</style>