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
        title: "Indutri | Blog Posts"
      }
    }
  }
</script>
