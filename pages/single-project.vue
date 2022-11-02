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
        title: "科创协会 - C.A.Science and Technology Innovation Association | Project Details"
      }
    }
  }
</script>
