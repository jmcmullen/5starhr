<template>
  <section class="about-us">
    <div class="container about-us__spiel">
      <div class="grid">
        <div class="grid__cell 1/3--lap-and-up">
          <img class="about-us__portrait" v-bind:src="text.image" alt="" />
        </div>
        <div class="grid__cell 2/3--lap-and-up about-us__text">
          <h5 class="about-us__subtitle" v-html="text.subtitle"></h5>
          <h2 class="about-us__title" v-html="text.title"></h2>
          <p class="about-us__body" v-html="md(text.body)"></p>
          <!-- <div class="about-us__partner">
            <img class="about-us__partner-img about-us__partner-img--ahri" src="~/assets/images/ahri-logo.jpg" alt="">
            <img class="about-us__partner-img about-us__partner-img--coach" src="~/assets/images/hr-coach-logo.jpg" alt="">
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    text: Object,
    required: true,
  },
};
</script>

<style lang="scss" scoped>
.about-us__portrait {
  max-width: 100%;
  @include av-mq(thumb) {
    display: none;
  }
}

.about-us__spiel {
  padding: 65px 0;
  @include av-mq(thumb) {
    padding: 0 0 45px 0;
  }
}

.about-us__subtitle {
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 0;
  text-align: left;
  @include av-mq(thumb) {
    margin-top: 25px;
  }
}

.about-us__title {
  text-align: left;
  font-size: 2.3rem;
  margin-top: 0;
  margin-bottom: 25px;
}

.about-us__text {
  padding: 0 20px;
  padding-left: 40px;
  @include av-mq(lap-and-up) {
    padding-left: 50px;
  }
}

.about-us__body {
  font-size: 18px;
  color: #747474;
}

.about-us__partner-img {
  max-width: 230px;
  padding: 20px;
  &--coach {
    padding: 5px 20px;
    transform: translateY(10px);
  }
}

.about-us__partner {
  margin: 0 auto;
  display: block;
  width: 460px;
  @include av-mq(thumb) {
    max-width: 230px;
  }
}
</style>

<style lang="scss">
.about-us__body p img {
  display: block;
  margin: 25px auto;
}
</style>