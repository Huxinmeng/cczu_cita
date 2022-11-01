<template>
  <section class="faq-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="faq-accordion">
            <div class="accordion-container-one">
              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">如何加入科协</h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">加入QQ群：913497645||关注微信公众号：三氪情报局
                  </p>
                </div>
              </div>

              <div class="ac accordion__content">
                <h2 class="ac-q accordion__title-text" tabIndex="0">如何参加各类竞赛</h2>
                <div class="ac-a">
                  <p class="accordion__content-desc">关注科协官微，会定期推送比赛安排
                  </p>
                </div>
              </div>

              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">怎样联系我们</h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">发送邮件至co@mlfpc.onaliyun.com
                  </p>
                </div>
              </div>
              

            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="faq-request-quote">
            <span>期待你的宝贵意见</span>
            <form action="#">
              <div class="input-box">
                <input type="text" placeholder="你的姓名">
              </div>
              <div class="input-box">
                <input type="email" placeholder="邮箱地址">
              </div>
              <div class="input-box">
                <input type="text" placeholder="电话号码">
              </div>
              <div class="input-box">
                <textarea name="#" id="#" cols="30" rows="10" placeholder="请写出你的意见"></textarea>
              </div>
              <div class="input-box">
                <button class="main-btn" @click="submit">提  交</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "FaqArea",
      mounted() {
        new Accordion('.accordion-container-one');
      },
   methods:{
  submit(){this.$router.push('/about')}
   }
    }
</script>

<style scoped>
  .ac {
    margin-top: 10px;
    padding: 10px;
    background: #FFFFFF;
    box-sizing: border-box;
  }

  .ac>.ac-q {
    font: bold 15px Oswald, sans-serif;
    padding: 10px 30px 10px 10px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    position: relative;
    margin: 0;
    color: #192437;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .ac.is-active .ac-q {
    color: #ff5316 !important;
  }
  .ac>.ac-q::after {
    content: '+';
    text-align: center;
    width: 15px;
    right: 10px;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    position: absolute
  }

  .ac>.ac-a {
    overflow: hidden;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease
  }

  .ac>.ac-a p {
    margin: 0;
    padding: 10px;
    color: #545764;
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
  }

  .ac.js-enabled>.ac-a {
    visibility: hidden
  }

  .ac.is-active>.ac-a {
    visibility: visible
  }

  .ac.is-active>.ac-q::after {
    content: '\2013';
    color: #ff5316;
  }
</style>
