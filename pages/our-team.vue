<template>
  <div>
    <Nav />
    <PageHeader title="Our Team" />
    <TeamPage />
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import TeamPage from "../components/TeamPage";
  export default {
    components: {
      TeamPage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Indutri | Our Team"
      }
    }
  }
</script>
