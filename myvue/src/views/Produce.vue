<!--
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-09 15:39:48
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-10 14:57:46
 * @FilePath: \vsFile\myvue\src\views\Produce.vue
-->
<template>
  <div>
    <h1>产品页面</h1>
    <p>params:{{ $route.params.id }}</p>
    <p>query:{{ $route.query.str }}</p>
    <p>name:{{ $route.name }}</p>
    <p>hash:{{ $route.hash }}</p>
    <p>fullPath:{{ $route.fullPath }}</p>
    <p>path:{{ $route.path }}</p>
    <p>meta:{{ $route.meta }}</p>
  </div>
</template>

<style scoped>
</style>