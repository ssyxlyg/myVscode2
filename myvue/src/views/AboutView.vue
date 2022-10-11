<!--
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-09 13:56:53
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-11 14:57:05
 * @FilePath: \vsFile\myvue\src\views\AboutView.vue
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>关于页面</p>
    <ul>
      <li v-for="item in jok" :key="item.itemId">{{ item.summary }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jok: [],
    };
  },
  methods: {
    getJok() {
      this.$http
        .get("http://www.520mg.com/mi/list.php")
        .then((res) => {
          console.log(res.data);
          this.jok = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getJok();
  },
};
</script>

<style scoped>
ul li {
  text-align: left;
}
</style>



