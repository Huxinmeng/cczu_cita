<template>
  <div>
    <Nav />
    <Slider />
    <ServiceArea />
  
    

    <ClientArea />
    <FunFactArea />
    <ProjectArea />
    <FaqBrandArea />
    <FaqArea />
  
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Slider from "../components/Slider";
  import ServiceArea from "../components/ServiceArea";
  import SolutionArea from "../components/SolutionArea";
  import VideoArea from "../components/VideoArea";
  import BuildingArea from "../components/BuildingArea";
  import BrandArea from "../components/BrandArea";
  import ClientArea from "../components/ClientArea";
  import FunFactArea from "../components/FunFactArea";
  import ProjectArea from "../components/ProjectArea";
  import FaqBrandArea from "../components/FaqBrandArea";
  import FaqArea from "../components/FaqArea";
  import FutureArea from "../components/FutureArea";
  import BlogArea from "../components/BlogArea";
  import Footer from "../components/Footer";
  export default {
    components: {
      Footer,
      BlogArea,
      FutureArea,
      FaqArea,
      FaqBrandArea,
      ProjectArea,
      FunFactArea,
      ClientArea,
      BrandArea,
      BuildingArea,
      VideoArea,
      SolutionArea,
      ServiceArea,
      Slider,
      Nav

    },
 
  }
</script>
