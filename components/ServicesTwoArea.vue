<template>
  <section class="industri-services-area industri-services-2-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="services-title text-center">
            <h3 class="title">Industri Services</h3>
          </div>
        </div>
      </div>
      <div class="row industri-active">
        <swiper :options="swiperOptions">
          <swiper-slide>
          <div class="industri-services-2-item mt-30 text-center">
            <div class="icon">
              <i class="flaticon-under-construction"></i>
            </div>
            <h4 class="title">Petroleum and Gas</h4>
            <p>There are many new variations of paassages of but majority is simple free text.</p>
            <nuxt-link to="/single-service">Read more</nuxt-link>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="industri-services-2-item mt-30 text-center">
            <div class="icon">
              <i class="flaticon-industry"></i>
            </div>
            <h4 class="title">factory construction</h4>
            <p>There are many new variations of paassages of but majority is simple free text.</p>
            <nuxt-link to="/single-service">Read more</nuxt-link>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="industri-services-2-item mt-30 text-center">
            <div class="icon">
              <i class="flaticon-layout"></i>
            </div>
            <h4 class="title">Chemical research</h4>
            <p>There are many new variations of paassages of but majority is simple free text.</p>
            <nuxt-link to="/single-service">Read more</nuxt-link>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="industri-services-2-item mt-30 text-center">
            <div class="icon">
              <i class="flaticon-under-construction-1"></i>
            </div>
            <h4 class="title">industrial services</h4>
            <p>There are many new variations of paassages of but majority is simple free text.</p>
            <nuxt-link to="/single-service">Read more</nuxt-link>
          </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        </div>
      </div>
    <div class="shape">
      <img src="/assets/images/shape/shape-11.png" alt="">
    </div>
  </section>
</template>


<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "ServicesTwoArea",
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
              slidesPerView : 3
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
