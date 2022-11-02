<template>
  <div>
    <Nav />
    <PageHeader title="Blog Posts" />
    <BlogPage />
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import BlogPage from "../components/BlogPage";
  export default {
    components: {
      BlogPage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "科创协会 - C.A.Science and Technology Innovation Association | Blog Posts"
      }
    }
  }
</script>
