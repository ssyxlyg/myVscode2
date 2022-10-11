<!--
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-09 13:56:53
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-11 14:18:58
 * @FilePath: \vsFile\myvue\src\App.vue
-->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/produce">Produce</router-link> |
      <router-link to="/produce/111">Produce111</router-link> |
      <router-link :to="{ name: 'produce', params: { id: 222 } }">
        Produce222 </router-link
      >| <router-link to="/produce/333?str=hello">Produce333</router-link> |
      <router-link :to="{ name: 'produce', params: { id: 222 }, hash: '#ref' }"
        >Produce444</router-link
      >
      |
      <router-link to="/Admin">管理页面</router-link> |
      <router-link to="/vant">vant组件</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
