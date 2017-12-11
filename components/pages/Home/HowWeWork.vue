<template>
  <section class="we-work">
    <div class="container">
      <div class="grid">
        <div class="grid__cell 1/2--lap-and-up">
          <h5 class="we-are__subtitle" v-html="md(text.subtitle)"></h5>
          <h2 class="we-are__title" v-html="md(text.title)"></h2>
          <p class="we-are__body" v-html="md(text.body)"></p>
          <a href="/contact" class="button button-primary" v-html="md(text.button)"></a>
        </div>
        <div class="grid__cell 1/2--lap-and-up we-work__service-list">
          <div class="we-work__service" v-for="(feature, index) in text.features" :key="index">
            <img src="~/assets/images/icon-check.svg" alt="" class="we-work__img grid__cell 1/4">
            <h3 class="we-work__service-title grid__cell 3/4">{{feature.name}}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="we-work__media container container--mob">
      <img src="~/assets/images/small-business.jpg" alt="" class="we-work__img-cta">
      <div class="we-work__services">
        <h2 class="we-work__title-cta">Evidence-based methodology</h2>
        <p class="we-work__body-cta">Through the HR Coach Research Institute, we have a range of HR Consulting services backed by solid and ongoing research, designed to deliver quality, measurable results for business.</p>
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
.we-work {
  margin-top: 25px;
  padding: 35px 0 0;
  .button {
    float: left;
    margin-top: 25px;
  }
  .container {
    padding: 0 20px;
    &--mob {
      padding: 0;
    }
  }
  @include av-mq(lap-and-up) {
    padding: 65px 0 65px 0;
  }
}

.we-work__img {
  display: inline-block;
  max-width: 50px;
}

.we-work__service-list {
  &.grid__cell {
    margin-top: 25px;
  }
}

.we-work__service {
  margin: 15px 0 15px 15px;
  text-align: left;
  @include av-mq(lap-and-up) {
    margin: 15px 0 15px 100px;
  }
}

.we-work__service-title {
  display: inline-block;
  font-size: 1.4rem;
  vertical-align: super;
  @include av-mq(lap-and-up) {
    margin-bottom: 10px;
  }
}

.we-work__title-cta {
  color: $white;
  font-size: 2.2rem;
  text-align: left;
}

.we-work__media {
  padding-top: 65px;
  max-width: 890px;
}

.we-work__services {
  margin-top: -7px;
  padding: 35px;
  background: #1cb6e6;
  @include av-mq(lap-and-up) {
    width: 420px;
    margin-top: 400px;
    margin-left: 490px;
    position: absolute;
  }
}

.we-work__body-cta {
  font-size: 18px;
  text-align: left;
  color: white;
  margin-top: 10px;
}

.we-work__img-cta {
  width: 100%;
  max-width: 700px;
  margin-top: 45px;
  @include av-mq(lap-and-up) {
    float: left;
    margin-top: 100px;
    margin-bottom: 95px;
  }
}
</style>