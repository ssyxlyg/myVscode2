<!--
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-13 14:40:31
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-17 11:44:41
 * @FilePath: \vsFile\mymi\src\components\Page.vue
-->
<template>
  <div>
    <div v-for="section in sections" :key="section.block_id">
      <!-- 1、轮播 -->
      <div v-if="section.view_type == 'gallery'">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item
            v-for="item in section.body.items"
            :key="item.material_id"
          >
            <img
              v-lazy="item.img_url"
              :style="{
                width: item.w / 100 + 'rem',
                height: item.h / 100 + 'rem',
              }"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 图片 -->
      <div
        v-if="section.view_type == 'cells_auto_fill'"
        :style="{
          width: section.body.w / 100 + 'rem',
          height: section.body.h / 100 + 'rem',
          position: 'relative',
        }"
      >
        <div
          v-for="item in section.body.items"
          :key="item.body"
          :style="{
            width: item.w / 100 + 'rem',
            height: item.h / 100 + 'rem',
            position: 'absolute',
            left: item.x / 100 + 'rem',
            top: item.y / 100 + 'rem',
          }"
        >
          <img
            v-lazy="item.img_url"
            :style="{
              width: item.w / 100 + 'rem',
              height: item.h / 100 + 'rem',
            }"
          />
        </div>
      </div>
      <!-- 分割线 -->
      <div v-if="section.view_type == 'divider_line'">
        <div
          :style="{
            'background-color': section.body.line_color,
            height: section.body.line_height / 100 + 'rem',
          }"
        ></div>
      </div>
      <!-- 图片加介绍 -->
      <div
        v-if="section.view_type == 'list_three_type4'"
        class="list_three_type4"
      >
        <div v-for="item in section.body.items" :key="item.body">
          <div>
            <img
              v-lazy="item.img_url"
              :style="{
                width: '2rem',
                height: '2rem',
              }"
            />
          </div>
          <div>
            <h4>{{ item.product_name }}</h4>
            <p>{{ item.product_brief }}</p>
            <p>￥{{ item.product_price }}</p>
            <button>立即购买</button>
          </div>
        </div>
      </div>
      <!-- 111 -->
      <div v-if="section.view_type == 'list_two_type14'">
        <div v-for="item in section.body.items" :key="item.body">
          <div>
            <img
              v-lazy="item.img_url"
              :style="{
                width: '2.5rem',
                height: '2.5rem',
              }"
            />
          </div>
          <div>
            <h4>{{ item.product_name }}</h4>
            <p>{{ item.product_brief }}</p>
            <p>￥{{ item.product_price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetHomeData } from "../api/index.js";
export default {
  data() {
    return {
      sections: [],
    };
  },
  props: {
    tab: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    tab: {
      deep: true,
      handler() {
        this.getSection();
      },
    },
  },
  created() {
    this.getSection();
  },
  methods: {
    getSection() {
      GetHomeData(
        {
          client_id: 180100031051,
          channel_id: "",
          webp: 1,
          page_type: this.tab.page_type,
          page_id: this.tab.page_id,
        },
        {
          loading: {
            message: "加载中...",
            forbidClick: true,
          },
        }
      )
        //   this.$http
        //     .post(
        //       "/v1/home/page",
        //       this.$qs.stringify({
        //         client_id: 180100031051,
        //         channel_id: "",
        //         webp: 1,
        //         page_type: this.tab.page_type,
        //         page_id: this.tab.page_id,
        //       })
        //     )
        .then((res) => {
          console.log(res.data);
          this.sections = res.data.data.data.sections;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style scoped>
.list_three_type4,
.list_two_type14 {
  display: flex;
  /*允许换行*/
  flex-wrap: wrap;
  justify-content: space-around;
}
.list_ three_ _type4 > div {
  width: 2rem;
}
.list_three_type4 > div {
  width: 2.5rem;
}
/*省略号*/
.list_three_type4 > div > div:nth-of-type(2) h4,
.list_three_type4 > div > div:nth-of-type(2) p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0 2rem;
}
.list_two_type14 > div > div:nth-of-type(2) h4,
.list_two_type14 > div > div:nth-of-type(2) p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.2rem;
}
</style>
                                                                    