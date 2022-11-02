<template>
  <div>
    <Nav />
    <PageHeader title="科协 周赛" />
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
        title: "科创协会 - C.A.Science and Technology Innovation Association | 科协 周赛"
      }
    }
  }
</script>
