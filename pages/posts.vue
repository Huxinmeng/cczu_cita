<template>
  <div>
    <Nav />
    <PageHeader title="Blog Posts" />
    <WeekMatchPage />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import WeekMatchPage from "../components/WeekMatchPage";
  export default {
    components: {
      WeekMatchPage,
      PageHeader,
      Footer,
      Nav
    },
    head(){
      return {
        title: "η§εεδΌ - C.A.Science and Technology Innovation Association | Blog Posts"
      }
    }
  }
</script>
