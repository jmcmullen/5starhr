<template>
  <section class="prev-clients">
    <h1 class="prev-clients__title">Trusted By</h1>
    <div class="container">
      <div class="grid">
        <div class="grid__cell 1/2--thumb 1/6--lap-and-up">
          <img src="~/assets/images/1-cover-logo.jpg"
            alt="1 Cover Logo"
            class="prev-clients__logo prev-clients__logo--cover">
        </div>
        <div class="grid__cell 1/2--thumb 1/6--lap-and-up">
          <img src="~/assets/images/paykel-logo.png"
          alt="Paykel Logo"
          class="prev-clients__logo prev-clients__logo--paykel">
        </div>
        <div class="grid__cell 1/2--thumb 1/6--lap-and-up">
          <img src="~/assets/images/positive-real-estate-logo.jpg"
          alt="Positive Real Estate Logo"
          class="prev-clients__logo prev-clients__logo--pos-estate">
        </div>
        <div class="grid__cell 1/2--thumb 1/6--lap-and-up">
          <img src="~/assets/images/crop-smart-logo.jpg"
          alt="Crop Smart Logo"
          class="prev-clients__logo prev-clients__logo--crop-smart">
        </div>
        <div class="grid__cell 1/2--thumb 1/6--lap-and-up">
          <img src="~/assets/images/playgroup-nsw-logo.jpg"
          alt="Playgroup NSW Logo"
          class="prev-clients__logo prev-clients__logo--playgroup">
        </div>
        <div class="grid__cell 1/2--thumb 1/6--lap-and-up">
          <img src="~/assets/images/one-education-logo.png"
          alt="One Education Logo"
          class="prev-clients__logo prev-clients__logo--one-edu">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="prev-clients__testimonial six columns">
        <a href="/testimonials" class="button">
          Read testimonials from&nbsp;our clients
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.prev-clients {
  margin: 25px 0 0;
  padding: 65px 20px;
  .button {
    max-width: 260px;
    margin: 0 auto;
  }
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
  @include av-mq(lap-and-up) {
    &--cover {
      margin-top: 10px;
    }
    &--one-edu {
      width: 120px;
    }
    &--pos-estate {
      margin-top: 20px;
    }
    &--crop-smart {
      margin-top: 30px;
    }
    &--playgroup {
      width: 100px;
    }
    &--paykel {
      margin-top: 25px;
    }
  }
}

.prev-clients__testimonial {
  margin-top: 25px;
}
</style>
