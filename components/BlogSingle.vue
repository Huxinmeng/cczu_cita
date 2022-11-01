<template>
  <section class="blog-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="comment-form">
            <h3 class="comment-one__block-title">登录管理员系统</h3>
            <!-- /.comment-one__block-title -->
            <form action="#" class="contact-one__form" method="POST">
              <div class="row">
                <div class="col-lg-8">
                  <div class="input-box">
                    <input
                      type="text"
                      placeholder="请输入账号"
                      name="account"
                      v-model="username"
                    />
                  </div>
                </div>
                <!-- /.col-lg-6 -->
                <div class="col-lg-8">
                  <div class="input-box">
                    <input
                      type="password"
                      placeholder="请输入密码"
                      name="password"
                      v-model="password"
                    />
                  </div>
                </div>
                <!-- /.col-lg-6 -->

                <div class="col-lg-12 text-left">
                  <div class="input-box">
                    <button
                      type="submit"
                      class="main-btn"
                      onclick="return false"
                      @click="login"
                    >
                      确 认 登 陆
                    </button>
                  </div>
                  <!-- /.thm-btn contact-one__btn -->
                </div>
                <!-- /.col-lg-12 -->
              </div>
              <!-- /.row -->
            </form>
            <!-- /.contact-one__form -->
          </div>
          <!-- /.comment-form -->
        </div>
        <!-- /.col-lg-8 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
import { setCookie, getCookie } from "../static/js/cookie.js";
export default {
  name: "BlogSingle",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
  },
  methods: {
    login() {
      let formData = new FormData();
      formData.append("username", this.username);
      formData.append("password", this.password);
      this.$axios
        .post("/man/login", formData)
        .then((res) => {
          if ((res.status = 200)) {
            // this.$router.push("/");
            console.log(res.headers);
          }
        });
    },
  },
};
</script>

<style scoped>
.comment-form {
  margin-left: 380px;
}
</style>
