<template>
  <section class="project-area">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-lg-12">
          <div class="project-title text-center">
            <h3 class="title">我们的项目</h3>
          </div>
        </div>
      </div>
      <div class="row project-active">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="it in projectList" :key="it.id">
            <div class="project-item mt-30">
              <div class="project-thumb">
                <img
                  :src="it.project_img_url"
                  alt="projects"
                />
              </div>
              <div class="project-content">
                <a v-if="it.detail_page_url==null" :href="it.project_url" ><span>{{it.project_name}}</span></a>
                 <a v-else :href="it.project_url" ><span>{{it.project_name}}</span></a>
                <p>recent project</p>
              </div>
            </div>
          </swiper-slide>
          <!-- <swiper-slide>
          <div class="project-item mt-30">
            <div class="project-thumb">
              <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/car.png" alt="projects">
            </div>
            <div class="project-content">
              <a href="#"><span>汽车推荐系统</span></a>
              <p>recent project</p>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="project-item mt-30">
            <div class="project-thumb">
              <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/stock.png" alt="projects">
            </div>
            <div class="project-content">
              <a href="#"><span>股票K线</span></a>
              <p>recent project</p>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="project-item mt-30">
            <div class="project-thumb">
              <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/visual.png" alt="projects">
            </div>
            <div class="project-content">
              <a href="#"><span>招投标行业可视化</span></a>
              <p>recent project</p>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="project-item mt-30">
            <div class="project-thumb">
              <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/tianqin.png" alt="projects">
            </div>
            <div class="project-content">
              <a href="#"><span>天琴工作室</span></a>
              <p>recent project</p>
            </div>
          </div>
          </swiper-slide> -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "ProjectArea",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      projectList:[],
      swiperOptions: {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        // Responsive breakpoints
        breakpoints: {
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
  created() {
    this.getProjectData();
  },
  methods: {
    async getProjectData() {
      const project = await this.$axios.$get("/index/latest-project");
      // console.log(project["data"]);
      if (project["code"] != 0) return;
      this.projectList = project["data"];
    },
  },
};
</script>

<style scoped>
</style>
