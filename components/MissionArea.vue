<template>
  <section class="mission-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="mission-content">
            <h3 class="title">We’re committed to help clients</h3>
            <div class="mission-tabs">

              <!--Tab-->
              <input type="radio" name="tabs" id="tab-one" checked="checked">
              <label for="tab-one" class="tab-btn">Our Mission</label>
              <div class="tab">
                <div class="active-tab">
                  <div class="content">
                    <div class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</div>
                  </div>
                </div>
              </div>

              <!--Tab-->
              <input type="radio" name="tabs" id="tab-two" checked="checked">
              <label for="tab-two" class="tab-btn">Our Vision</label>
              <div class="tab">
                <div class="active-tab">
                  <div class="content">
                    <div class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</div>
                  </div>
                </div>
              </div>

              <!--Tab-->
              <input type="radio" name="tabs" id="tab-three" checked="checked">
              <label for="tab-three" class="tab-btn">Our Benefits</label>
              <div class="tab">
                <div class="active-tab">
                  <div class="content">
                    <div class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mission-contractors d-block d-sm-flex justify-content-between align-items-center mt-4">
              <div class="item">
                <span>345600</span>
                <p>Professional and Skilled Contractors</p>
              </div>
              <div class="thumb">
                <img src="/assets/images/mission-contractors.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mission-experience d-flex align-items-center">
      <i class="flaticon-blueprint"></i>
      <h3 class="title">We're ready to share our advice <br> and experience</h3>
    </div>
  </section>
</template>

<script>
    export default {
        name: "MissionArea"
    }
</script>

<style>

  .mission-tabs {
    display: flex;
    flex-wrap: wrap;
  }
  .mission-tabs label {
    order: 1;
    display: block;
    padding: 4px 30px;
    margin-right: 0.2rem;
    cursor: pointer;
    background: #ff5316;
    font-weight: 500;
    transition: background ease 0.2s;
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
  }
  .mission-tabs .tab {
    order: 99;
    flex-grow: 1;
    width: 100%;
    display: none;
    padding: 1rem;
    background: #F4F5F8;
  }
  .default-tabs .mission-tabs .text {
    position: relative;
    font-size: 20px;
    font-weight: 300;
    color: #ff5316;
    line-height: 1.7em;
    letter-spacing: 2px;
  }
  .mission-tabs input[type="radio"] {
    display: none;
  }
  .mission-tabs input[type="radio"]:checked + label {
    background: #F4F5F8;
    color: #222;
  }
  .mission-tabs input[type="radio"]:checked + label + .tab {
    display: block;
  }

  @media (max-width: 45em) {
    .mission-tabs .tab,
    .mission-tabs label {
      order: initial;
    }
    .mission-tabs label {
      width: 100%;
      margin-right: 0;
      margin-top: 0.2rem;
    }
  }

</style>
