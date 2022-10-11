<template>
  <div class="swiper">
    <img :src="arrimgs[current]" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    arrimgs: {
      type: Array,
    },
  },
  data() {
    return {
      current: 0,
      id: null,
    };
  },
  created() {
    this.autoplay();
  },
  methods: {
    autoplay() {
      this.id = setInterval(() => {
        this.current++;
        if (this.current > this.arrimgs.length - 1) {
          this.current = 0;
        }
      }, 1000);
    },
  },
};
</script>
<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
