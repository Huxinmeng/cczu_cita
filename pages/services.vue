<template>
  <div>
    <Nav />
    <PageHeader title="Services" />
    <ServicePage />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import ServicePage from "../components/ServicePage";
  export default {
    components: {
      ServicePage,
      PageHeader,
      Footer,
      Nav
    },
    head(){
      return {
        title: "η§εεδΌ - C.A.Science and Technology Innovation Association | Services"
      }
    }
  }
</script>
