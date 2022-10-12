<!--
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-12 11:04:42
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-12 15:25:28
 * @FilePath: \vsFile\mymi\src\views\user\User.vue
-->
<template>
  <div>
    <p v-if="isLog"><span @click="logout">退出</span></p>
    <p v-else><router-link to="/login?from=/user">登录</router-link></p>
  </div>
</template>

<script>
export default {
  //   beforeRouteEnter(to, from, next) {
  //     console.log(from);
  //     console.log(to);
  //     if (localStorage.token) {
  //       next(true);
  //     } else {
  //       next("/login?from=/user");
  //     }
  //   },
  //   beforeRouteLeave(to, from, next) {
  //     if (confirm("确认要离开吗")) {
  //       next(true);
  //     }
  //   },
  data() {
    return {
      isLog: localStorage.token == undefined ? false : true,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.isLog = false;
    },
  },
  watch: {
    isLog() {
      return localStorage.token == undefined ? false : true;
    },
  },
};
</script>
