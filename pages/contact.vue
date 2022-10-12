<template>
  <div>
    <Nav />
    <PageHeader title="Contact us" />
    <ContactPage />
    <GMap />
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ContactPage from "../components/ContactPage";
  import GMap from "../components/GMap";
  export default {
    components: {
      GMap,
      ContactPage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Indutri | Contact Us"
      }
    }
  }
</script>
