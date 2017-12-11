<template>
  <section class="we-are">
    <div class="we-are__copy container">
      <div class="grid">
        <div class="we-are__copy-section grid__cell 1/2--lap-and-up">
          <h5 class="we-are__subtitle" v-html="md(text.subtitle)"></h5>
          <h2 class="we-are__title" v-html="md(text.title)"></h2>
        </div>
        <div class="we-are__copy-section grid__cell 1/2--lap-and-up">
          <p class="we-are__body" v-html="md(text.body)"></p>
        </div>
      </div>
    </div>
    <div class="we-are__media container">
      <div class="we-are__services">
        <p class="we-are__body-cta" v-html="md(text.caption)"></p>
        <a href="/services" class="button button-primary" v-html="md(text.button)"></a>
      </div>
      <img src="~/assets/images/sydney-city-scape.jpg" alt="" class="we-are__img">
      <div class="we-are__services we-are__services--mob">
        <p class="we-are__body-cta" v-html="md(text.caption)"></p>
        <a href="/services" class="button button-primary" v-html="md(text.button)"></a>
      </div>
    </div>
    <div class="clearfix"></div>
  </section>
</template>

<script>
export default {
  props: {
    text: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.we-are {
  padding: 65px 0 0;
  background: #f1f6fb;
  @include av-mq(lap-and-up) {
    padding-bottom: 125px;
  }
}

.we-are__copy {
  padding: 0 20px;
}

.we-are__body {
  font-size: 18px;
  margin-top: 30px;
  text-align: left;
  color: #747474;
}

.we-are__img {
  width: 100%;
  @include av-mq(lap-and-up) {
    float: right;
    max-width: 700px;
  }
}

.we-are__media {
  padding-top: 45px;
  justify-content: flex-end;
  max-width: 890px;
  @include av-mq(lap-and-up) {
    padding-top: 95px;
  }
}

.we-are__services {
  width: 100%;
  padding: 35px;
  background: $mid-blue;
  margin-top: 340px;
  display: none;
  .button {
    text-align: left;
    float: left;
    background: white;
    color: $mid-blue;
    margin-top: 30px;
  }
  @include av-mq(lap-and-up) {
    width: 420px;
    display: block;
    position: absolute;
  }
  &--mob {
    color: white;
    font-size: 18px;
    display: block;
    margin-top: -6px;
    padding-bottom: 115px;
    .button {
      margin-top: 25px;
    }
    @include av-mq(lap-and-up) {
      display: none;
    }
  }
}

.we-are__body-cta {
  width: 100%;
  @include av-mq(lap-and-up) {
    font-size: 1.3rem;
    text-align: left;
    color: white;
  }
}
</style>

<style lang="scss">
.we-are__subtitle p {
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 0;
  text-align: left;
}

.we-are__title p {
  text-align: left;
  font-size: 2.3rem;
  margin-top: 0;
  span {
    display: inline;
    @include av-mq(lap-and-up) {
      display: none;
    }
  }
}
</style>