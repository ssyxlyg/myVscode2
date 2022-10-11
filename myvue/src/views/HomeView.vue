<!--
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-09 13:56:53
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-10 14:43:08
 * @FilePath: \vsFile\myvue\src\views\HomeView.vue
 -->
<template>
  <div class="home">
    <h1>首页页面</h1>
    <p>首页</p>
    <img src="../assets/img/nature-6.jpg" alt="" /><br />
    <img v-for="(item, index) in arrimgs" :src="item" :key="index" /><br />
    <img :src="img2" alt="" />
    <swiper :arrimgs="arrimgs"></swiper>
  </div>
</template>

<script>
import img2 from "../assets/img/nature-10.jpg";
import swiper from "../components/Swiper.vue";
export default {
  components: {
    swiper,
  },
  data() {
    return {
      arrimgs: [
        require("../assets/img/nature-6.jpg"),
        require("../assets/img/nature-8.jpg"),
        require("../assets/img/nature-9.jpg"),
        require("../assets/img/nature-10.jpg"),
      ],
      img2,
    };
  },
};
</script>

// 局部引用
<style src='../assets/css/test1.css' scoped></style>
// 样式隔离
<style scoped>
h1 {
  color: orangered;
}
img {
  width: 300px;
  height: 300px;
}
</style>
