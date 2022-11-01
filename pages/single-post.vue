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
      Nav
    },
    head(){
      return {
        title: "Indutri | Blog Details"
      }
    }
  }
</script>
