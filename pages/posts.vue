<template>
  <div>
    <Nav />
    <PageHeader title="Blog Posts" />
    <BlogPage />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import BlogPage from "../components/BlogPage";
  export default {
    components: {
      BlogPage,
      PageHeader,
      Footer,
      Nav
    },
    head(){
      return {
        title: "科创协会 - C.A.Science and Technology Innovation Association | Blog Posts"
      }
    }
  }
</script>
