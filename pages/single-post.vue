<template>
  <div>
    <Nav />
    <PageHeader title="Blog Details" />
    <BlogSingle />
    <FooterTwo />
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
