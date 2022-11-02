<template>
  <div>
    <Nav />
    <PageHeader title="Contact us" />
    <ContactPage />
    <GMap />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import ContactPage from "../components/ContactPage";
  import GMap from "../components/GMap";
  export default {
    components: {
      GMap,
      ContactPage,
      PageHeader,
      Footer,
      Nav
    },
    head(){
      return {
        title: "科创协会 - C.A.Science and Technology Innovation Association | Contact Us"
      }
    }
  }
</script>
