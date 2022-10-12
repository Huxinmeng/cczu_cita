<template>
  <div>
    <Nav />
    <PageHeader title="Bridge construction" />
    <ProjectSingle />
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ProjectSingle from "../components/ProjectSingle";
  export default {
    components: {
      ProjectSingle,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Indutri | Project Details"
      }
    }
  }
</script>
