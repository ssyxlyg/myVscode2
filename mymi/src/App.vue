<template>
  <div id="app">
    <router-view />
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> | -->
      <!-- <router-link to="/login">Login</router-link> |
      <router-link to="/login2">Login2</router-link> | -->
      <div>
        <router-link id="home" to="/"><i></i><span>首页</span></router-link>
      </div>
      <div>
        <router-link id="cat" to="/cat"><i></i><span>分类</span></router-link>
      </div>
      <div>
        <router-link id="ball" to="/ball"><i></i><span>米圈</span></router-link>
      </div>
      <div>
        <router-link id="cart" to="/cart"
          ><i></i><span>购物车</span></router-link
        >
      </div>
      <div>
        <router-link id="user" to="/user"><i></i><span>我的</span></router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  font-size: 0.22rem;
}
nav div {
  width: 20%;
}
nav span {
  display: block;
  width: 100%;
  text-align: center;
}
nav i {
  display: block;

  width: 100%;
  height: 0.4rem;
  text-align: center;
}
nav a {
  color: #999;
}
.router-link-exact-active {
  color: #f66c03;
}
#home i {
  background: url("./assets/home.png") no-repeat center center;
  background-size: 0.4rem 0.4rem;
}
#home.router-link-exact-active i {
  background: url("./assets/home-h.png") no-repeat center center;
  background-size: 0.4rem 0.4rem;
}
#cat i {
  background: url("./assets/cat.png") no-repeat center center;
  background-size: 0.4rem 0.4rem;
}
#cat.router-link-exact-active i {
  background: url("./assets/cat-h.png") no-repeat center center;
  background-size: 0.4rem 0.4rem;
}
#ball i {
  background: url("./assets/ball.png") no-repeat center center;
  background-size: 0.4rem 0.4rem;
}
#ball.router-link-exact-active i {
  background: url("./assets/ball-h.png") no-repeat center center;
  background-size: 0.4rem 0.4rem;
}
#cart i {
  background: url("./assets/cart.png") no-repeat center center;
  background-size: 0.4rem 0.4rem;
}
#cart.router-link-exact-active i {
  background: url("./assets/cart-h.png") no-repeat center center;
  background-size: 0.4rem 0.4rem;
}
#user i {
  background: url("./assets/user.png") no-repeat center center;
  background-size: 0.4rem 0.4rem;
}
#user.router-link-exact-active i {
  background: url("./assets/user-h.png") no-repeat center center;
  background-size: 0.4rem 0.4rem;
}
</style>
