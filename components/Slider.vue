<template>
  <section class="banner-slide">
    <VueSlickCarousel v-bind="settings">
      <div
        class="banner-area slide-bg1 bg_cover d-flex align-items-center"
        v-for="(item, index) in activityList"
        :key="index"
        :style="{ backgroundImage: 'url(' + item.img_url + ')' }"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="banner-content text-center">
                <span data-animation="fadeInDown" data-delay="1s"
                  >{{item.second_title}}</span
                >
                <h3 data-animation="fadeInDown" data-delay=".1s" class="title">
                  {{item.first_title}}
                </h3>
                <a
                  data-animation="fadeInUp"
                  data-delay="1s"
                  class="main-btn"
                  href="#" v-if="item.detail_page_url==null"
                  >发现更多</a
                >
                <a v-else  data-animation="fadeInUp"
                  data-delay="1s"
                  class="main-btn"
                  href="#">查看详情</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="banner-area slide-bg2 bg_cover d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="banner-content text-center">
                <span data-animation="fadeInDown" data-delay="1s"
                  >欢迎来到科技创新协会</span
                >
                <h3 data-animation="fadeInDown" data-delay=".1s" class="title">
                  线下笔试
                </h3>
                <a
                  data-animation="fadeInUp"
                  data-delay="1s"
                  class="main-btn"
                  href="#"
                  >发现更多</a
                >
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </VueSlickCarousel>
  </section>
</template>

<script>
import Utils from './utils.js'
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  name: "Banner",
  components: { VueSlickCarousel },
  data() {
    return {
      activityList: [
        "https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/video-bg.jpg",
        "https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/video-bg.jpg",
        "https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/video-bg.jpg",
      ],
      // url1:'url('+'https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/banner-bg-1.jpg'+')',
      settings: {
        arrows: false,
        autoplay: true,
      },
    };
  },
  created() {
    this.getActivityData();
  },

  methods: {

    async getActivityData() {
      const activity = await this.$axios.$get("/index/latest-activity");
      console.log(activity["data"]);
      if (activity["code"] != 0) return;
      this.activityList = activity["data"];
       Utils.$emit('val', this.activityList)
    },
   
  },
};
</script>

<style scoped>
.banner-slide .slide-bg2 {
  background-image: url("https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/banner-bg-2.jpg");
}
</style>
