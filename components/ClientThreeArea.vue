<template>
  <section class="client-3-area pb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="client-2-active">
            <swiper :options="swiperOptions">
              <swiper-slide>
            <div class="client-content text-center">
              <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
              <h5 class="title">Shirley Smith</h5>
              <span>Director</span>
              <div class="thumb">
                <img src="/assets/images/client-user-1.png" alt="user">
                <i class="fa fa-quote-left"></i>
              </div>
            </div>
              </swiper-slide>
              <swiper-slide>
            <div class="client-content text-center">
              <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
              <h5 class="title">Mike hardson</h5>
              <span>manager</span>
              <div class="thumb">
                <img src="/assets/images/client-user-2.png" alt="user">
                <i class="fa fa-quote-left"></i>
              </div>
            </div>
              </swiper-slide>
              <swiper-slide>
            <div class="client-content text-center">
              <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
              <h5 class="title">Sarah Albert</h5>
              <span>marketer</span>
              <div class="thumb">
                <img src="/assets/images/client-user-3.png" alt="user">
                <i class="fa fa-quote-left"></i>
              </div>
            </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "ClientThreeArea",
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
          slidesPerView : 1,
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
              slidesPerView : 1
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
