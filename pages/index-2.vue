<template>
  <div>
    <NavTwo />
    <SliderTwo />
    <ProjectContactArea />
    <SolutionTwoArea />
    <ServicesArea />
    <FunFatcTwoArea />
    <RelationshipArea />
    <LeadershipArea />
    <ClientTwoArea />
    <ProjectTwoArea />
    <BrandArea />
    <BlogTwoArea />
    <GMap />
    <FooterTwo />
  </div>

</template>

<script>
  import NavTwo from "../components/NavTwo";
  import SliderTwo from "../components/SliderTwo";
  import ProjectContactArea from "../components/ProjectContactArea";
  import SolutionTwoArea from "../components/SolutionTwoArea";
  import ServicesArea from "../components/ServicesArea";
  import FunFatcTwoArea from "../components/FunFatcTwoArea";
  import RelationshipArea from "../components/RelationshipArea";
  import LeadershipArea from "../components/LeadershipArea";
  import ClientTwoArea from "../components/ClientTwoArea";
  import ProjectTwoArea from "../components/ProjectTwoArea";
  import BrandArea from "../components/BrandArea";
  import BlogTwoArea from "../components/BlogTwoArea";
  import GMap from "../components/GMap";
  import FooterTwo from "../components/FooterTwo";
  export default {
    components: {
      FooterTwo,
      GMap,
      BlogTwoArea,
      BrandArea,
      ProjectTwoArea,
      ClientTwoArea,
      LeadershipArea,
      RelationshipArea,
      FunFatcTwoArea,
      ServicesArea,
      SolutionTwoArea,
      ProjectContactArea,
      NavTwo,
      SliderTwo
    },
    head(){
      return {
        title: "Indutri | Home 2"
      }
    }
  }
</script>
