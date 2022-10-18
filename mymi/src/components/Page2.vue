<!--
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-13 14:40:31
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-14 09:50:16
 * @FilePath: \vsFile\mymi\src\components\Page.vue
-->
<template>
  <div>
    <div v-for="section in sections" :key="section.block_id">
      <div
        v-if="
          section.view_type == 'cells_auto_fill' &&
          (section.block_id == '3441276' || section.block_id == '3441277')
        "
        class="st"
      >
        <div v-for="item in section.body.items" :key="item.block_id">
          <img
            :src="item.img_url"
            :style="{
              width: item.w / 100 + 'rem',
              height: item.h / 100 + 'rem',
            }"
          />
        </div>
      </div>
      <!-- <div v-if="section.view_type == 'divider_line'">
        <div v-for="item in section.body" :key="item.block_id">
          <div
            :style="{
              height: item.height + 'px',
              color: item.line_color,
              lineHeight: item.line_height + 'px',
            }"
          ></div>
        </div>
      </div> -->
      <div
        v-if="
          section.view_type == 'cells_auto_fill' &&
          section.block_id == '3635720'
        "
        class="st"
      >
        <div
          v-for="item in section.body.items"
          :key="item.block_id"
          v-show="item.material_id == 32283"
        >
          <img
            :src="item.img_url"
            :style="{
              width: item.w / 100 + 'rem',
              height: item.h / 100 + 'rem',
            }"
          />
        </div>
        <div>
          <div
            v-for="item in section.body.items"
            :key="item.block_id"
            v-show="item.material_id != 32283"
          >
            <img
              :src="item.img_url"
              :style="{
                width: item.w / 100 + 'rem',
                height: item.h / 100 + 'rem',
              }"
            />
          </div>
        </div>
      </div>
      <div
        v-for="item in section.body.items"
        :key="item.block_id"
        v-show="
          section.view_type == 'cells_auto_fill' &&
          section.block_id == '3182278'
        "
      >
        <img
          :src="item.img_url"
          :style="{
            width: item.w / 100 + 'rem',
            height: item.h / 100 + 'rem',
          }"
        />
      </div>

      <div
        v-for="item in section.body.items"
        :key="item.block_id"
        v-show="
          section.view_type == 'list_two_type13' &&
          section.block_id == '3475066'
        "
        class="st2"
      >
        <img :src="item.img_url" />
      </div>
    </div>

    <!-- <div v-for="section in sections" :key="section.block_id">
      <div v-if="section.view_type == 'list_two_type13'" class="st">
        <div v-for="item in section.body.items" :key="item.block_id">
       
          <img
            :src="item.img_url"
            :style="{
              width: item.w / 100 + 'rem',
              height: item.h / 100 + 'rem',
            }"
          />
        </div>
      </div>
      <div v-if="section.view_type == 'divider_line'" class="st">
        <div v-for="item in section.body" :key="item.block_id">
          <div :style="{ height: item.height, color: item.line_color }"></div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
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
  created() {
    this.getSection();
  },
  methods: {
    getSection() {
      this.$http
        .post(
          "/v1/home/page",
          this.$qs.stringify({
            client_id: 180100031051,
            channel_id: "",
            webp: 1,
            page_type: this.tab.page_type,
            page_id: this.tab.page_id,
          })
        )
        .then((res) => {
          //   console.log(res.data.data.data.sections);
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
.st,
.st2 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.st2 {
  display: flex;
}
.st2 img {
  width: 3rem;
  height: 3rem;
}
</style>
