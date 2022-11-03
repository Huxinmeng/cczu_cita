<template>
  <div class="news-area news-posts-area pt-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-9" v-for="item in matchList" :key="item.id">
          <div class="news-item mt-30">
            <div class="news-thumb">
              <img :src="item.img_url" alt="news">
            </div>
            <div class="news-content text-center">
              <a :href="item.detail_page_url==null ? '#' : item.detail_page_url">{{ item.first_title }}</a>
              <div class="date">
                <span><span>{{ item.time.split('T')[0] }}</span><span
                  class="pl-10 pr-10">   -    </span>{{ item.second_title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeekMatchPage",
  data() {
    return {
      matchList: []
    }
  }, created() {
    this.getWeekMatchData()
  },
  methods: {
    async getWeekMatchData() {
      const match = await this.$axios.$get('/index/get-week-match')
      if (match['code'] != 0) return;
      this.matchList = match['data']
    }
  }
}
</script>

<style scoped>

</style>
