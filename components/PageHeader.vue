<template>
  <div class="page-title-area bg_cover pt-120" style="background-image: url(https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/page-bg.jpg);">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="page-title-item text-center">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><nuxt-link to="/">CTIA</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
              </ol>
            </nav>
            <h3 class="title">{{ title }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="page-shadow">
      <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/page-shadow.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      title: {
        type: String
      }
    }

  }
</script>

<style scoped>

</style>
