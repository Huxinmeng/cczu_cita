<template>
  <div>
    <Nav />
    <PageHeader title="Testimonials" />
    <TestimonialPage />
    <ContactArea />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import TestimonialPage from "../components/TestimonialPage";
  import ContactArea from "../components/ContactArea";
  export default {
    components: {
      ContactArea,
      TestimonialPage,
      PageHeader,
      Footer,
      Nav
    },
    head(){
      return {
        title: "科创协会 - C.A.Science and Technology Innovation Association | Testimonials"
      }
    }
  }
</script>
