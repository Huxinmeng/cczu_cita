<template>
  <section class="client-area">
    <div class="client-full">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-7">
            <div class="client-title">
              <h3 class="title">导师天团</h3>
            </div>
          </div>
        </div>
        <div class="row client-active">
          <swiper :options="swiperOptions">
            <swiper-slide v-for="it in teacherList" :key="it.id">
              <div class="client-item mt-30">
                <div class="shape">
                  <img
                    src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/shape-4.png"
                    alt="shape"
                  />
                </div>
                <div class="user">
                  <div class="user-thumb">
                    <img :src="it.img_url" alt="client" />
                    <i class="fa fa-quote-left"></i>
                  </div>
                  <h5 class="title">{{ it.name }}</h5>
                  <span>{{ it.position }}</span>
                </div>
                <div class="text">
                  <p>{{ it.description }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div
      class="client-shape animated wow fadeInLeft"
      data-wow-duration="1500ms"
      data-wow-delay="0ms"
    >
      <img
        src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/shape-15.png"
        alt=""
      />
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "ClientArea",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      teacherList: [],
      swiperOptions: {
        slidesPerView: 2,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        // Responsive breakpoints
        breakpoints: {
          1024: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
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
    this.getTeacherData();
  },
  methods: {
    async getTeacherData() {
      const teacher = await this.$axios.$get("/index/list-teacher", {
        withCredentials: true,
      });
      //  console.log(teacher);
      if (teacher["code"] != 0) return;
      this.teacherList = teacher["data"];
    },
  },
};
</script>

<style scoped>
</style>
