<template>
  <section class="fun-facts-area" v-observe-visibility="onVisibilityChange">
    <div class="container">
        <div class="col-lg-7">
            <div class="client-title">
              <h1 class="title">获奖情况</h1>
            </div>
          </div>
      <div class="fun-facts-bg">
        <div class="row">
          <div class="col-lg-3 col-md-6" v-for="item in awardata.slice(0,3)" :key="item.id">
            <div class="fun-facts-item text-center mt-30 animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
              <h3 class="title odometer"><countTo :startVal='0' :endVal='startCounter ? item.count : 0' :duration='3000'></countTo></h3>
              <span>{{item.type}}</span>
            </div>
          </div>
           <div class="col-lg-3 col-md-6">
            <div class="fun-facts-item text-center mt-30 animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms">
              <h3 class="title odometer"><countTo :startVal='0' :endVal='startCounter ? alldata : 0' :duration='3000'></countTo></h3>
              <span>总奖项</span>
            </div>
          </div>
        </div>
        <div class="shape">
          <img src="https://hxm-1314321198.cos.ap-nanjing.myqcloud.com/shape-17.png" alt="shape">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'
  export default {
    name: "FunFactArea",
    components: { countTo },
    directives: {
      ObserveVisibility
    },
    data() {
      return{
        awardata:[],
        alldata:0,
        startCounter: false
      }
    },
    created(){
        this.awardData();
    },
    methods: {
      onVisibilityChange (isVisible) {
        if (isVisible){
          this.startCounter = true;
        }

      },
        async awardData() {
      const award = await this.$axios.$get("/index/get-award-count",{ withCredentials: true });
      // console.log(award["data"]);
      if (award["code"] != 0) return;
      this.awardata =award["data"];

        this.alldata=award["data"][0]['count']+award["data"][1]['count']+award["data"][2]['count']
    },
    }
  }
</script>

<style scoped>

</style>
