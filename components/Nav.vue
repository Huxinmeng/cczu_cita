<template>
  <header class="header-area">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="
                header-top-items
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <div class="logo">
                <a href="/"
                  ><img
                    src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/logo.png"
                    alt=""
                /></a>
              </div>
              <div class="header-top-info d-none d-md-block">
                <ul>
                  <li>
                    <i class="flaticon-email"></i>
                    <span>邮箱</span>
                    <a href="co@mlfpc.onaliyun.com">co@mlfpc.onaliyun.com</a>
                  </li>
                  <li>
                    <i class="flaticon-calling"></i>
                    <span>电话</span>
                    <a href="tel:+86 131 0940 6484">+86 131 0940 6484</a>
                  </li>
                  <li>
                    <i class="flaticon-address"></i>
                    <span>地址</span>
                    <a href="#">常州大学西太湖校区</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="
                main-header-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <div class="main-header-menus d-flex">
                <div class="header-btn">
                  <a href="#"> 欢迎加入我们！！</a>
                </div>
                <div class="toggle-btn ml-30 canvas_open">
                  <i
                    @click="mobileToggle = !mobileToggle"
                    class="fa fa-bars"
                  ></i>
                </div>
                <div class="header-menu d-none d-lg-block">
                  <ul>
                    <li></li>
                    <li class="active"><nuxt-link to="/">首页</nuxt-link></li>

                    <li>
                      <a href="#">新闻</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/about">科协新闻</nuxt-link></li>
                        <li><nuxt-link to="/our-team">通知公示</nuxt-link></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">学术</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/services">科技前沿</nuxt-link></li>
                        <li>
                          <nuxt-link to="/single-service">学习路线</nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">竞赛</a>
                      <ul class="sub-menu">
                        <li>
                          <nuxt-link to="/projects">创新创业竞赛</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/single-project"
                            >专业技能竞赛</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/single-project"
                            >综合能力竞赛</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/single-project"
                            >CTIA科协主办</nuxt-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">风采</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/posts">比赛荣誉</nuxt-link></li>
                        <li>
                          <nuxt-link to="/single-post">团队风采</nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">CTIA</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/posts">综管系统</nuxt-link></li>
                        <li>
                          <nuxt-link to="/single-post">CTIA服务</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/single-post">加入CTIA科协</nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">三氪情报局</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/posts">三氪有料</nuxt-link></li>
                        <li>
                          <nuxt-link to="/single-post">成为供稿人</nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">关于</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/posts">关于我们</nuxt-link></li>
                        <li>
                          <nuxt-link to="/man-login">管理员登录</nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              :class="`offcanvas_menu_wrapper ${mobileToggle ? 'active' : ''}`"
            >
              <div class="canvas_close">
                <a
                  @click="mobileToggle = !mobileToggle"
                  href="javascript:void(0)"
                  ><i class="fa fa-times"></i
                ></a>
              </div>
              <div class="header-social">
                <ul class="text-center">
                  <li>
                    <a href="#"><i class="fa fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-skype"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-pinterest-p"></i></a>
                  </li>
                </ul>
              </div>
              <div id="menu" class="text-left">
                <ul class="offcanvas_main_menu">
                  <li class="menu-item-has-children active">
                    <span class="menu-expand"></span>
                    <div><nuxt-link to="/">首页</nuxt-link></div>
                  </li>
                  <li class="menu-item-has-children active">
                    <span class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <a href="#">新闻</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/about">科协新闻</nuxt-link></li>
                      <li><nuxt-link to="/our-team">通知公示</nuxt-link></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <span class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <a href="#">学术</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/services">科技前沿</nuxt-link></li>
                      <li>
                        <nuxt-link to="/single-service">学习路线</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <span class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <a href="#">竞赛</a>
                    <ul class="sub-menu">
                      <li>
                        <nuxt-link to="/projects">创新创业竞赛</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/single-project">专业技能竞赛</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/single-project">综合能力竞赛</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/single-project">CTIA科协周赛</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <span class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <a href="#">风采</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/posts">比赛荣誉</nuxt-link></li>
                      <li><nuxt-link to="/single-post">团队风采</nuxt-link></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <span class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <a href="#">CTIA</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/posts">综管系统</nuxt-link></li>
                      <li><nuxt-link to="/single-post">CTIA服务</nuxt-link></li>
                      <li>
                        <nuxt-link to="/single-post">加入CTIA科协</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <span class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <a href="#">三氪情报局</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/posts">三氪有料</nuxt-link></li>
                      <li>
                        <nuxt-link to="/single-post">成为供稿人</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <span class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <a href="#">关于</a>

                    <ul class="sub-menu">
                      <li><nuxt-link to="/posts">关于我们</nuxt-link></li>
                      <li><nuxt-link to="/single-post">联系我们</nuxt-link></li>
                      <li><nuxt-link to="">加入CITA</nuxt-link></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="offcanvas_footer">
                <span
                  ><a href="co@mlfpc.onaliyun.com"
                    ><i class="fa fa-envelope-o"></i> co@mlfpc.onaliyun.com</a
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      mobileToggle: false,
      dialogFormVisible: false,
      form: {
        nam: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      bol: false,
      str: "",
      formLabelWidth: "120px",
    };
  },
  methods: {
    show() {
      this.bol = true;
    },
    // 获取数据方法
    getData(data) {
      // 关闭弹出层
      this.bol = false;
      // console.log(data);
      this.str = data;
    },
    // 关闭弹窗
    close() {
      // 关闭弹出层
      this.bol = false;
    },
  },
};
</script>

<style scoped>
</style>
