<template>
  <section class="prev-clients">
    <h1 class="prev-clients__title">Trusted By</h1>
    <div class="container">
      <div class="row">
        <div class="two columns">
          <img src="../assets/img/1-cover-logo.jpg" alt="" class="prev-clients__logo" style="margin-top: 10px;">
        </div>
        <div class="two columns">
          <img src="../assets/img/one-education-logo.png" alt="" class="prev-clients__logo" style="width: 120px;">
        </div>
        <div class="two columns">
          <img src="../assets/img/positive-real-estate-logo.jpg" alt="" class="prev-clients__logo" style="margin-top: 20px;">
        </div>
        <div class="two columns">
          <img src="../assets/img/crop-smart-logo.jpg" alt="" class="prev-clients__logo" style="margin-top: 30px;">
        </div>
        <div class="two columns">
          <img src="../assets/img/playgroup-nsw-logo.jpg" alt="" class="prev-clients__logo" style="width: 100px;">
        </div>
        <div class="two columns">
          <img src="../assets/img/paykel-logo.png" alt="" class="prev-clients__logo" style="margin-top: 25px;">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="prev-clients__testimonial six columns">
        <a href="/testimonials" class="button">See what our clients have to say</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  $dark-blue: #0481ac;
  $light-blue: #f1f6fb;
  $white: #ffffff;
  $dark-white: #fafafa;
  $grey: #D7DADB;

  .prev-clients {
    margin: 25px 0 0;
    padding: 65px 20px;
  }

  .prev-clients__title {
    text-align: center;
    color: $dark-blue;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0;
    letter-spacing: 2px;
  }

  .prev-clients__logo {
    margin: 0 auto;
    width: 100%;
    padding: 25px;
  }

  .prev-clients__testimonial {
    margin-top: 25px;
  }
</style>

<script>
  export default {}
</script>
