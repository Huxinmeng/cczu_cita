<template>
  <section class="banner-slide">

    <VueSlickCarousel v-bind="settings">
    <div class="banner-area banner-2-area slide-bg2 bg_cover d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-10">
            <div class="banner-content text-left">
              <span data-animation="fadeInDown" data-delay="1s">欢迎来到科技创新协会</span>
              <h3 data-animation="fadeInDown" data-delay=".1s" class="title">We Build Everything with Passion</h3>
              <a data-animation="fadeInUp" data-delay="1s" class="main-btn" href="#">发现更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-area banner-2-area slide-bg1 bg_cover d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-10">
            <div class="banner-content text-left">
              <span data-animation="fadeInDown" data-delay="1s">Welcome to Factory & Industry Business</span>
              <h3 data-animation="fadeInDown" data-delay=".1s" class="title">We Build Everything with Passion</h3>
              <a data-animation="fadeInUp" data-delay="1s" class="main-btn" href="#">Discover more</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    </VueSlickCarousel>
  </section>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    export default {
      name: "Banner",
      components: { VueSlickCarousel },
      data() {
        return {
          settings: {
            arrows: false,
            autoplay: true
          },
        }
      },
    }
</script>

<style scoped>

</style>
