<template>
  <div>
    <Nav />
    <PageHeader title="Bridge construction" />
    <ProjectSingle />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import ProjectSingle from "../components/ProjectSingle";
  export default {
    components: {
      ProjectSingle,
      PageHeader,
      Footer,
      Nav
    },
    head(){
      return {
        title: "η§εεδΌ - C.A.Science and Technology Innovation Association | Project Details"
      }
    }
  }
</script>
