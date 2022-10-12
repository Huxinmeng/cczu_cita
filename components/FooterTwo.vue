<template>
    <div>
      <footer class="footer-area">
        <div class="container">
          <div class="footer-main">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="footer-widget mt-30">
                  <div class="footer-title pb-30">
                    <h4 class="title">Contact</h4>
                  </div>
                  <div class="footer-about-content">
                    <p>660 Broklyn Street, 88 New York, USA</p>
                    <div class="email">
                      <a href="mailto:needhelp@indutri.com">needhelp@indutri.com</a>
                    </div>
                    <div class="call">
                      <a href="tel:6668880000">666 888 0000</a>
                    </div>
                    <div class="social">
                      <ul>
                        <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="footer-widget mt-30 ml-30">
                  <div class="footer-title pb-20">
                    <h4 class="title">Explore</h4>
                  </div>
                  <div class="footer-about-list d-flex">
                    <ul class="mr-70">
                      <li><a href="#"><i class="fa fa-angle-right"></i> About</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> New Projects</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Our History</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Contact</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Blog Posts</a></li>
                    </ul>
                    <ul>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Press Release</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Help Topics</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Privacy Policy</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Terms of Use</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="footer-widget mt-30 ml-30">
                  <div class="footer-title pb-20">
                    <h4 class="title">Services</h4>
                  </div>
                  <div class="footer-about-list d-flex">
                    <ul class="mr-70">
                      <li><a href="#"><i class="fa fa-angle-right"></i> Petroleum and Gas</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Industrial Construction</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Chemical Research</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Mechanical Engineering</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Power Energies</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-7">
                <div class="footer-widget footer-news mt-30">
                  <div class="footer-title pb-40">
                    <h4 class="title">Latest News</h4>
                  </div>
                  <div class="footer-news-content">
                    <div class="news-item d-flex align-items-center">
                      <div class="news-item-thumb">
                        <img src="/assets/images/footer-news-1.jpg" alt="">
                      </div>
                      <div class="news-item-content">
                        <span>06 April, 2020</span>
                        <a href="#">We are designing industry materials of innovation</a>

                      </div>
                    </div>
                    <div class="news-item d-flex align-items-center mt-20">
                      <div class="news-item-thumb">
                        <img src="/assets/images/footer-news-2.jpg" alt="">
                      </div>
                      <div class="news-item-content">
                        <span>06 April, 2020</span>
                        <a href="#">We are designing industry materials of innovation</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-copyright text-center">
            <p>© Copyright 2020 by <a target="blank_" href="https://www.layerdrops.com">Layerdrops.com</a></p>
          </div>
        </div>
        <div class="footer-shape-1">
          <img src="/assets/images/shape/shape-5.png" alt="">
        </div>
        <div class="footer-shape-2 animated wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
          <img src="/assets/images/shape/shape-6.png" alt="">
        </div>
      </footer>

      <div class="go-top-area">
        <div class="go-top-wrap">
          <div class="go-top-btn-wrap">
            <div @click="scrollTop" :class="`go-top go-top-btn ${scrollBtn ? 'active' : ''}`">
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
      name: "FooterTwo",
      data(){
        return {
          scrollBtn: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },

      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.scrollBtn = true
          }
          else if (window.scrollY < 70) {
            this.scrollBtn = false
          }
        },

        scrollTop () {
          window.scrollTo(0, 0);
        }


      }
    }
</script>

<style scoped>

</style>
