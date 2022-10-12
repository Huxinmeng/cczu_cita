<template>
  <section class="client-area">
    <div class="client-full">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-7">
            <div class="client-title">
              <h3 class="title"  >导师天团</h3>
            </div>
          </div>
        </div>
        <div class="row client-active">
          <swiper :options="swiperOptions">
            <swiper-slide>
            <div class="client-item mt-30">
              <div class="shape">
                <img src="/assets/images/shape/shape-4.png" alt="shape">
              </div>
              <div class="user">
                <div class="user-thumb">
                  <img src="/assets/images/sun_resize.jpg" alt="client">
                  <i class="fa fa-quote-left"></i>
                </div>
                <h5 class="title">孙威</h5>
                <span>阿里云大数据讲师、慧科集团高级讲师、互联网高级架构师</span>
              </div>
              <div class="text">
                <p> 掌握云原生开发、微服务架构设计、推荐系统工程实现。多年互联网公司就业经历，能够组织规划中大型分布式项目开发交付。有丰富的大数据和云计算等前沿技术的教学实施经验。
</p>
              </div>
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="client-item mt-30">
              <div class="shape">
                <img src="/assets/images/shape/shape-4.png" alt="shape">
              </div>
              <div class="user">
                <div class="user-thumb">
                  <img src="/assets/images/zhu_resize.jpg" alt="client">
                  <i class="fa fa-quote-left"></i>
                </div>
                <h5 class="title">朱珠</h5>
                <span>数据分析师</span>
              </div>
              <div class="text">
                <p>深度掌握机器学习、深度学习基本算法的理论和实践。多年互联网公司就业经历，并担任数据分析数据挖掘等工作</p>
              </div>
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="client-item mt-30">
              <div class="shape">
                <img src="/assets/images/shape/shape-4.png" alt="shape">
              </div>
              <div class="user">
                <div class="user-thumb">
                  <img src="/assets/images/yuan_resize.jpg" alt="client">
                  <i class="fa fa-quote-left"></i>
                </div>
                <h5 class="title">苑进延</h5>
                <span>慧科集团高级讲师</span>
              </div>
              <div class="text">
                <p>曾在一加科技、深圳瑞立视从事Java后端开发工作。后从事大数据和软件技术教学工作。在江汉大学、湖南科技学院、新余学院、江西软件职业技术大学授课并指导学生项目。参与过训练营、大赛辅导等各种教学活动。技术钻研能力强，善于沟通，乐于解决学生问题。</p>
              </div>
            </div>
            </swiper-slide>
            <!-- <swiper-slide>
            <div class="client-item mt-30">
              <div class="shape">
                <img src="/assets/images/shape/shape-4.png" alt="shape">
              </div>
              <div class="user">
                <div class="user-thumb">
                  <img src="/assets/images/client-user-2.png" alt="client">
                  <i class="fa fa-quote-left"></i>
                </div>
                <h5 class="title">Mike hardson</h5>
                <span>manager</span>
              </div>
              <div class="text">
                <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </div>
            </swiper-slide> -->
          </swiper>
        </div>
      </div>
    </div>
    <div class="client-shape animated wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
      <img src="/assets/images/shape/shape-15.png" alt="">
    </div>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "ClientArea",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView : 2,
          loop: true,
          speed: 1000,
          spaceBetween : 30,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          // Responsive breakpoints
          breakpoints: {
            1024:{
              slidesPerView : 2
            },
            768:{
              slidesPerView : 1
            },
            640:{
              slidesPerView : 1
            },
            320:{
              slidesPerView : 1
            }
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
