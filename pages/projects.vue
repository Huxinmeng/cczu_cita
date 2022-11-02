<template>
  <div>
    <Nav />
    <PageHeader title="Recent Projects" />
    <ProjectsPage />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import ProjectsPage from "../components/ProjectsPage";
  export default {
    components: {
      ProjectsPage,
      PageHeader,
      Footer,
      Nav
    },
    head(){
      return {
        title: "科创协会 - C.A.Science and Technology Innovation Association | Projects"
      }
    }
  }
</script>
