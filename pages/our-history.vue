<template>
  <div>
    <Nav />
    <PageHeader title="Our History" />
    <HistoryPage />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import HistoryPage from "../components/HistoryPage";
  export default {
    components: {
      HistoryPage,
      PageHeader,
      Footer,
      Nav
    },
    head(){
      return {
        title: "η§εεδΌ - C.A.Science and Technology Innovation Association | Our History"
      }
    }
  }
</script>
