<template>
  <div class="brand-area pb-120">
    <div class="container">
      <div class="row">
        <swiper :options="swiperOptions">
          <swiper-slide>
          <div class="brand-item">
            <a href="#"><img src="/assets/images/brand-1.png" alt="brand"></a>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="brand-item">
            <a href="#"><img src="/assets/images/brand-1.png" alt="brand"></a>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="brand-item">
            <a href="#"><img src="/assets/images/brand-1.png" alt="brand"></a>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="brand-item">
            <a href="#"><img src="/assets/images/brand-1.png" alt="brand"></a>
          </div>
            <swiper-slide>
            </swiper-slide>
          <div class="brand-item">
            <a href="#"><img src="/assets/images/brand-1.png" alt="brand"></a>
          </div>
            <swiper-slide>
            </swiper-slide>
          <div class="brand-item">
            <a href="#"><img src="/assets/images/brand-1.png" alt="brand"></a>
          </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "BrandArea",
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
          slidesPerView : 5,
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
              slidesPerView : 5
            },
            768:{
              slidesPerView : 4
            },
            640:{
              slidesPerView : 3
            },
            320:{
              slidesPerView : 2
            }
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
