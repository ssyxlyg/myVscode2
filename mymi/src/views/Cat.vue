<template>
  <div class="about">
    <header>
      <input type="search" placeholder="搜索商品名称" />
    </header>
    <aside>
      <ul>
        <li
          v-for="(cat, index) in catList"
          :key="cat.category_id"
          @click="current = index"
          :class="{ active2: current == index }"
        >
          {{ cat.category_name }}
        </li>
      </ul>
    </aside>
    <!-- 此处if判断重要，先有catList再有cat -->
    <main v-if="catList.length">
      <CatDetail :cat="catList[current]"></CatDetail>
    </main>
  </div>
</template>
<script>
import { GetCatData } from "../api/index.js";
import CatDetail from "../components/CatDetail.vue";
export default {
  components: {
    CatDetail,
  },
  data() {
    return {
      catList: [],
      current: 1, //选择的当前类别下标
    };
  },
  created() {
    this.getCatList();
  },
  methods: {
    //获取分类列表
    getCatList() {
      GetCatData(
        {
          client_id: 180100031051,
          channel_id: "",
          webp: 1,
        },
        {
          loading: {
            message: "分类列表加载中...",
            forbidClick: true,
          },
        }
      )
        .then((res) => {
          this.catList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.active2 {
  color: #ff5e14;
}
.about {
  overflow: hidden;
}

.about header {
  width: 100%;
  padding: 0.1rem 0.5rem;
  background-color: #fff;
  position: fixed;
  top: 0;
}

.about header input {
  width: 100%;
  border-radius: 0.2rem;
  border: none;
  background-color: #d4d4d4;
  height: 0.5rem;
  text-indent: 0.5rem;
}

.about aside {
  background-color: #a5f8f8;
  position: fixed;
  left: 0;
  top: 0.7rem;
  width: 25%;
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 1.2rem;
}
/* 隐藏滚动条 */
.about aside::-webkit-scrollbar {
  display: none;
}
.about aside ul li {
  line-height: 1rem;
  font-size: 0.3rem;
  text-align: center;
}
.about main {
  height: 100vh;
  width: 75%;
  background-color: #dddddd;
  margin-left: 1.8rem;
  overflow: hidden;
  margin-top: 0.7rem;
  /* padding-bottom:1.5rem ; */
}
</style>
