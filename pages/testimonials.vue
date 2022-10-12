<template>
  <div>
    <Nav />
    <PageHeader title="Testimonials" />
    <TestimonialPage />
    <ContactArea />
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import TestimonialPage from "../components/TestimonialPage";
  import ContactArea from "../components/ContactArea";
  export default {
    components: {
      ContactArea,
      TestimonialPage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Indutri | Testimonials"
      }
    }
  }
</script>
