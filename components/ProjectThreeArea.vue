<template>
  <section class="project-area project-3-area">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-lg-12">
          <div class="project-title text-center">
            <h3 class="title">Our recent projects</h3>
          </div>
        </div>
      </div>
      <div class="row project-active">
        <swiper :options="swiperOptions">
          <swiper-slide>
          <div class="project-item mt-30">
            <div class="project-thumb">
              <img src="/assets/images/project-1.jpg" alt="projects">
            </div>
            <div class="project-content">
              <a href="#"><span>Welding Processing</span></a>
              <p>recent project</p>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="project-item mt-30">
            <div class="project-thumb">
              <img src="/assets/images/project-2.jpg" alt="projects">
            </div>
            <div class="project-content">
              <a href="#"><span>Bridge Construction</span></a>
              <p>recent project</p>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="project-item mt-30">
            <div class="project-thumb">
              <img src="/assets/images/project-3.jpg" alt="projects">
            </div>
            <div class="project-content">
              <a href="#"><span>Build machinery</span></a>
              <p>recent project</p>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="project-item mt-30">
            <div class="project-thumb">
              <img src="/assets/images/project-4.jpg" alt="projects">
            </div>
            <div class="project-content">
              <a href="#"><span>oil & gas production</span></a>
              <p>recent project</p>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="project-item mt-30">
            <div class="project-thumb">
              <img src="/assets/images/project-5.jpg" alt="projects">
            </div>
            <div class="project-content">
              <a href="#"><span>Bridge Construction</span></a>
              <p>recent project</p>
            </div>
          </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>


<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "ProjectThreeArea",
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
          slidesPerView : 3,
          loop: true,
          speed: 1000,
          spaceBetween : 30,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          // Responsive breakpoints
          breakpoints: {
            1024:{
              slidesPerView : 3
            },
            768:{
              slidesPerView : 2
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
