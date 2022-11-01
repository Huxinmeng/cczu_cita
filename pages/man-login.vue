<template>
  <div>
    <Nav />
    <PageHeader title="管理员登陆" />
    <BlogSingle />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import FooterTwo from "../components/FooterTwo";
import PageHeader from "../components/PageHeader";
import BlogSingle from "../components/BlogSingle";
export default {
  components: {
    BlogSingle,
    PageHeader,
    FooterTwo,
    Nav,
  },
  created() {},

  head() {
    return {
      title:
        "科创协会 - C.A.Science and Technology Innovation Association | 管理员登录",
    };
  },
  methods: {
    async judgeLogin() {
      const response = await this.$axios
        .post("/man/login", null, { withCredentials: true })
        .then((res) => {
          if ((res.status = 200)) {
            this.$router.push("/man-index");
            // console.log(res.headers);
          } else {
            alert("验证过期，请重新登录");
            this.$router.push("/man-login");
          }
        });
    },
  },
};
</script>
