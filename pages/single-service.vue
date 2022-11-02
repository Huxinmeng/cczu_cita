<template>
  <div>
    <Nav />
    <PageHeader title="Factory construction" />
    <SingleService />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import SingleService from "../components/SingleService";
  export default {
    components: {
      SingleService,
      PageHeader,
      Footer,
      Nav
    },
    head(){
      return {
        title: "科创协会 - C.A.Science and Technology Innovation Association | Services Details"
      }
    }
  }
</script>
