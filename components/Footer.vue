<template>
  <div>
    <footer class="footer-area">
      <div class="container">
        <div class="footer-main">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget mt-30">
                <div class="footer-title pb-30">
                  <h4 class="title">联系我们</h4>
                </div>
                <div class="footer-about-content">
                  <p>常州大学西太湖校区</p>
                  <div class="email">
                    <a href="co@mlfpc.onaliyun.com">co@mlfpc.onaliyun.com</a>
                  </div>
                  <div class="call">
                    <a href="tel:+86 131 0940 6484">+86 131 0940 6484</a>
                  </div>
                  <div class="social">
                   <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/sanke.jpg">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-widget mt-30 ml-30">
                <div class="footer-title pb-20">
                  <h4 class="title">探索</h4>
                </div>
                <div class="footer-about-list d-flex">
                  <ul class="mr-70">
                    <li>
                      <a href="#"><i class="fa fa-angle-right"></i>首页</a>
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-angle-right"></i>科协新闻</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-angle-right"></i>通知公示</a
                      >
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-angle-right"></i>科技前沿</a>
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-angle-right"></i>学习路线</a
                      >
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#"
                        ><i class="fa fa-angle-right"></i>创新创业比赛</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-angle-right"></i>专业技能比赛</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-angle-right"></i>综合能力竞赛</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-angle-right"></i>综管系统</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-widget mt-30 ml-30">
                <div class="footer-title pb-20">
                  <h4 class="title">服务</h4>
                </div>
                <div class="footer-about-list d-flex">
                  <ul class="mr-70">
                    <li>
                      <a href="#"><i class="fa fa-angle-right"></i>竞赛报名</a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-angle-right"></i>项目搭建</a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-angle-right"></i>提出意见</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-7">
              <div class="footer-widget footer-news mt-30">
                <div class="footer-title pb-40">
                  <h4 class="title">最新活动</h4>
                </div>
                <div class="footer-news-content">
                  <div class="news-item d-flex align-items-center">
                    <div class="news-item-thumb">
                      <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/footer-news-1.jpg" alt="" />
                    </div>
                    <div class="news-item-content">
                      <span> 2022/9/30</span>
                      <a href="#"
                        >线下面试</a
                      >
                    </div>
                  </div>
                  <div class="news-item d-flex align-items-center mt-20">
                    <div class="news-item-thumb">
                      <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/footer-news-2.jpg" alt="" />
                    </div>
                    <div class="news-item-content">
                      <span>2022/9/30</span>
                      <a href="#"
                        >线下面试</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center">
          <p>
            © Copyright 2022 by
            <a target="blank_" href="https://www.layerdrops.com"
              >CTIA</a
            >
          </p>
        </div>
      </div>
      <div class="footer-shape-1">
        <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/shape-5.png" alt="" />
      </div>
      <div
        class="footer-shape-2 animated wow fadeInLeft"
        data-wow-duration="1500ms"
        data-wow-delay="0ms"
      >
        <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/shape-6.png" alt="" />
      </div>
    </footer>

    <div class="go-top-area">
      <div class="go-top-wrap">
        <div class="go-top-btn-wrap">
          <div
            @click="scrollTop"
            :class="`go-top go-top-btn ${scrollBtn ? 'active' : ''}`"
          >
            <i class="fa fa-angle-double-up"></i>
            <i class="fa fa-angle-double-up"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      scrollBtn: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // created() {
  //   this.asyncData();
  // },

  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.scrollBtn = true;
      } else if (window.scrollY < 70) {
        this.scrollBtn = false;
      }
    },

    scrollTop() {
      window.scrollTo(0, 0);
    },
    // async asyncData() {
    //   const ip = await this.$axios.$get("/base");
    //   console.log(ip);
    // },
  },
};
</script>

<style scoped>
</style>
