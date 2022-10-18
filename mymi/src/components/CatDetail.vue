<template>
  <div>
    <div v-for="(category, index) in catDetail.category_list" :key="index">
      <!-- 图片 -->
      <div v-if="category.view_type == 'cells_auto_fill'">
        <img
          v-lazy="category.body.items[0].img_url"
          :style="{ width: '100%', height: '2rem' }"
        />
      </div>
      <!-- 标题链接 -->
      <div class="title" v-if="index == 0">
        <div v-for="(title, index) in catTitles" :key="index">
          {{ title.body.category_name }}
        </div>
      </div>
      <div v-if="category.view_type == 'category_title'">
        {{ category.body.category_name }}
      </div>
      <div v-if="category.view_type == 'category_group'">
        <div
          class="product_list"
          v-for="product in category.body.product_list"
          :key="product.product_id"
        >
          <div class="left">
            <img
              v-lazy="product.puzzle_url"
              style="width: 1.33rem; height: 1.33rem"
            />
          </div>
          <div class="right">
            <p>{{ product.name }}</p>
            <p>￥{{ product.price }}起</p>
          </div>
        </div>
        <!-- items -->
        <div v-if="category.body.items" class="items">
          <div v-for="(item, index) in category.body.items" :key="index">
            <img v-lazy="item.img_url" style="width: 1.2rem; height: 1.2rem" />
            <p>{{ item.product_name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetCatData } from "../api/index.js";
export default {
  //接收父组件传过来的类别对象
  props: {
    cat: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      catDetail: {}, //接收分类详情对象
    };
  },
  watch: {
    cat:{
        handler(){
            this.getCatDetail()
        }
    }
  },
  computed: {
    catTitles() {
      return this.catDetail.category_list.filter((item) => {
        return item.view_type == "category_title";
      });
    },
  },
  created() {
    this.getCatDetail();
  },
  methods: {
    //根据分类id获取对应的详情
    getCatDetail() {
      GetCatData(
        {
          client_id: 180100031051,
          channel_id: "",
          webp: 1,
          cat_id: this.cat.category_id,
        },
        {
          loading: {
            message: "分类列表加载中...",
            forbidClick: true,
          },
        }
      )
        .then((res) => {
          this.catDetail = res.data.data[0];
          console.log(res.data.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.product_list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #dfdfdf;
  margin-bottom: 0.5rem;
}
.title{
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    white-space: nowrap;
    overflow-x:auto ;
    font-size: .24rem;
    height: 1rem;
    align-items: center;
    /* padding-left: 2rem; */
    border-bottom: 1px solid lightgray;
    margin-bottom: .8rem;
}
.title div{
    margin-right: .3rem;
}
</style>
