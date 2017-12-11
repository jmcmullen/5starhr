<template>
  <section class="prev-clients">
    <h1 class="prev-clients__title">{{text.title}}</h1>
    <div class="container">
      <div class="grid">
        <div class="grid__cell 1/2--thumb 1/6--lap-and-up" v-for="(logo, key) in text.logos" :key="key">
          <img v-bind:src="logo.image"
            alt="1 Cover Logo"
            class="prev-clients__logo prev-clients__logo--cover"
            v-bind:class="`prev-clients__logo--${key}`">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="prev-clients__testimonial six columns">
        <a href="/testimonials" class="button" v-html="md(text.button)"></a>
      </div>
    </div>
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
.prev-clients {
  margin: 25px 0 0;
  padding: 65px 20px;
  .button {
    max-width: 240px;
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
    &--0 {
      margin-top: 10px;
    }
    &--5 {
      width: 120px;
    }
    &--2 {
      margin-top: 20px;
    }
    &--3 {
      margin-top: 30px;
    }
    &--4 {
      width: 100px;
    }
    &--1 {
      margin-top: 25px;
    }
  }
}

.prev-clients__testimonial {
  margin-top: 25px;
}
</style>
