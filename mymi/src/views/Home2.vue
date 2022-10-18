<!--
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-12 16:03:51
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-17 11:43:49
 * @FilePath: \vsFile\mymi\src\views\Home.vue
 -->
<template>
  <div>
    <header>
      <div class="app-header">
        <div class="logo"><i></i></div>
        <div class="search"><i></i><span>搜索商品名称</span></div>
        <div class="home-user"><i></i></div>
      </div>
      <nav>
        <div class="nav">
          <div class="list" v-show="flag">
            <div
              v-for="(tab, index) in tabs"
              :key="tab.page_id"
              :class="{ active: current == index }"
              @click="current = index"
            >
              {{ tab.name }}
            </div>
          </div>
          <div class="iconSz" @click="change()">
            <span>
              <img
                src="../assets/arrow.png"
                :class="!flag ? 'active3' : 'active2'"
            /></span>
          </div>
          <div class="subNav" v-show="!flag">
            <p>全部</p>
            <div class="content">
              <ul>
                <li>推荐</li>
                <li>智能</li>
                <li>电视</li>
                <li>家电</li>
                <li>笔记本</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <Page :tab="tabs[current]"></Page>
      <!-- <Page2></Page2> -->
    </main>
  </div>
</template>
<script>
import Page from "../components/Page.vue";
import Page2 from "../components/Page2.vue";
import { GetHomeData } from "../api/index.js";

export default {
  components: {
    Page,
    Page2,
  },
  data() {
    return {
      style: { color: "red" },
      flag: true,
      tabs: [],
      current: 0,
    };
  },

  created() {
    this.getTabs();
  },
  methods: {
    iconSz() {},
    addCss(e) {
      //   console.log(e.target);
      //   console.log(e.path[2]);
      //   console.log(e.path[2]);
      //   e.path[2].children.style.borderBottom = "1px solid red";
    },
    change() {
      this.flag = !this.flag;
    },
    getTabs() {
      GetHomeData(
        {
          client_id: 180100031051,
          channel_id: "",
          webp: 1,
          page_type: "home",
        },
        {
          loading: {
            message: "加载中...",
            forbidClick: true,
          },
        }
      )
        .then((res) => {
          console.log(res.data);
          this.tabs = res.data.data.tabs;
        })
        .catch((err) => {
          console.log(err);
        });
      //   this.$http
      //     .post(
      //       "/v1/home/page",
      //       `client_id=180100031051&channel_id=&webp=1&page_type=home`
      //     )
      //     .then((res) => {
      //       console.log(res.data);
      //       this.tabs = res.data.data.tabs;
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
    },
  },
};
</script>

<style scoped>
.active3 {
  transform: rotate(180deg);
  transition: all 0.5s linear;
}
.active2 {
  transform: rotate(0deg);
  transition: all 0.5s linear;
}
* {
  margin: 0;
  padding: 0;
}
header {
  /* position: fixed;
  top: -1px;
  left: 0;
  right: 0; */
  z-index: 99;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  background: #f2f2f2;
  margin: 0 auto;
  max-width: 7.2rem;
  /* font-size: 0.22rem; */
}
header .app-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.7rem;
  padding: 0.05rem 0;
}
.app-header .logo i {
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  /* border-radius: 0.05rem; */
  background: url("../assets/icon-header-logo3.ddf2a1c313.png");
  background-size: 0.6rem 0.6rem;
}
.app-header .search {
  width: 4.5rem;
  height: 0.6rem;
  background-color: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  color: rgba(0, 0, 0, 0.3);
}

.app-header .search i {
  display: inline-block;
  margin: 0 0.08rem;
  width: 0.4rem;
  height: 0.4rem;
  background: url("../assets/index.png") no-repeat center center;
  background-size: 0.4rem 0.4rem;
}
.app-header .home-user i {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background: url("../assets/user.png") no-repeat center center;
  background-size: 0.4rem 0.4rem;
}
.active {
  color: rgb(237, 91, 0);
}
.nav {
  display: flex;
  justify-content: left;
  position: relative;
  font-size: 0.25rem;
  width: 90%;
  margin-left: 0.5rem;
}
.nav .list {
  display: flex;
  justify-content: space-around;
  line-height: 0.5rem;
  width: 85%;
}
.nav img {
  width: 0.4rem;
  height: 0.4rem;
}
.nav .iconSz {
  position: absolute;
  top: 0.08rem;
  right: 0.1rem;
  z-index: 99;
}
.subNav {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: #f2f2f2;
}
.subNav p {
  line-height: 0.5rem;
  text-align: left;
  margin-left: 0.3rem;
}
.subNav ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
.subNav ul li {
  width: 20%;
  margin: 0.1rem 0.2rem 0.1rem 0;
  border-radius: 0.1rem;
  border: 1px solid red;
}
</style>