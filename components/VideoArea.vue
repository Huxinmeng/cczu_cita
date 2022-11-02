<template>
  <section class="video-area bg_cover pt-150 pb-115" style="background-image: url(https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/video-bg.jpg);">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="video-item text-center">
            <a class="video-popup videoBox" href="https://www.youtube.com/watch?v=cSLAO7zxS2M"><i class="fa fa-play"></i></a>
            <h3 class="title">科创协会 - C.A.Science and Technology Innovation Association Provide the Best Service for Sustainable Progress</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-1">
      <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/shape-2.png" alt="">
    </div>
    <div class="shape-2">
      <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/shape-3.png" alt="">
    </div>
  </section>
</template>

<script>
    export default {
      name: "VideoArea",
      mounted() {
        new GLightbox({
          selector: '.videoBox',
          touchNavigation: true,
          loop: true,
          autoplayVideos: true
        });
      }

    }
</script>

<style scoped>

</style>
