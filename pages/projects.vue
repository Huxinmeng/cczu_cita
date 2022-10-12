<template>
  <div>
    <Nav />
    <PageHeader title="Recent Projects" />
    <ProjectsPage />
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ProjectsPage from "../components/ProjectsPage";
  export default {
    components: {
      ProjectsPage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Indutri | Projects"
      }
    }
  }
</script>
