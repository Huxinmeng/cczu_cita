<template>
  <div>
    <Nav />
    <PageHeader title="Factory construction" />
    <SingleService />
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import SingleService from "../components/SingleService";
  export default {
    components: {
      SingleService,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Indutri | Services Details"
      }
    }
  }
</script>
