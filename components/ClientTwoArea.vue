<template>
  <section class="client-area client-2-area">
    <div class="client-full">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-7">
            <div class="client-title">
              <h3 class="title">Client testimonials</h3>
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
                  <img src="/assets/images/client-user-1.png" alt="client">
                  <i class="fa fa-quote-left"></i>
                </div>
                <h5 class="title">Shirley Smith</h5>
                <span>Director</span>
              </div>
              <div class="text">
                <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
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
            </swiper-slide>
            <swiper-slide>
            <div class="client-item mt-30">
              <div class="shape">
                <img src="/assets/images/shape/shape-4.png" alt="shape">
              </div>
              <div class="user">
                <div class="user-thumb">
                  <img src="/assets/images/client-user-3.png" alt="client">
                  <i class="fa fa-quote-left"></i>
                </div>
                <h5 class="title">Sarah Albert</h5>
                <span>marketer</span>
              </div>
              <div class="text">
                <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
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
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="client-shape animated wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
      <img src="/assets/images/shape/shape-16.png" alt="">
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
