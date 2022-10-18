<!--
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-17 14:50:03
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-17 17:25:29
 * @FilePath: \vsFile\mymi\src\views\Mock.vue
 -->
<template>
  <div>
    <h1>测试mock</h1>
    <div v-for="(item, index) in list" :key="index">
      <img :src="item.img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getUser() {
      this.$http
        .post("/api/user", {
          str: "你好",
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRandom() {
      this.$http
        .post("/api/random")
        .then((res) => {
          console.log(res.data);
          this.list = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getZdd() {
      this.$http
        .post("/api/app/v3/home?timeStamp=1665998677&sign=24c603ae0b593a13ad35f59b747c2f9e")
        .then((res) => {
          console.log(res.data);
          this.list = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    this.getUser();
    this.getRandom();
  },
};
</script>
