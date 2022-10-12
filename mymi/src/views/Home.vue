<!--
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-12 16:03:51
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-12 21:49:25
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
        <ul @click="addCss($event)" v-show="flag">
          <li>
            <router-link to="#"><span>推荐</span></router-link>
          </li>
          <li>
            <router-link to="#"><span>智能</span></router-link>
          </li>
          <li>
            <router-link to="#"><span>电视</span></router-link>
          </li>
          <li>
            <router-link to="#"><span>家电</span></router-link>
          </li>
          <li>
            <router-link to="#"><span>笔记本</span></router-link>
          </li>
        </ul>
        <div class="iconSz" @click="change()">
          <span>
            <img
              src="../assets/arrow.png"
              :class="!flag ? 'active' : 'active2'"
          /></span>
        </div>
        <div class="subNav" v-if="!flag">
          <p>
            <span>全部</span>
          </p>
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
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      style: { color: "red" },
      flag: true,
    };
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
  },
};
</script>

<style scoped>
.active {
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
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
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
nav {
  position: relative;
}
nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.1rem 1.6rem 0.1rem 0.5rem;
  font-size: 0.25rem;
}
nav ul a {
  color: rgb(116, 116, 116);
}
nav ul img,
.iconSz img {
  width: 0.4rem;
  height: 0.4rem;
}

.content ul {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
}
.content li {
  margin-bottom: 0.24rem;
  margin: 0.05rem 0.05rem;
  display: inline-block;
  width: 1.4rem;
  height: 0.56rem;
  text-align: center;
  line-height: 0.56rem;
  border: 1px solid #e5e5e5;
  font-size: 0.25rem;
  border-radius: 0.1rem;
}
.subNav p {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 0.56rem;
  align-items: center;
  padding: 0 0.74rem;
  font-size: 0.25rem;
}
.iconSz {
  position: absolute;
  right: 0.6rem;
  top: 0.1rem;
  width: 0.68rem;
  /* height: 0.55rem; */
  line-height: 0.55rem;
  /* background-color: #f2f2f2; */
  /* box-shadow: -15px 0 15px 0 #f2f2f2; */
  z-index: 99;
}
</style>