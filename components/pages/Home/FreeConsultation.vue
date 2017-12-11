<template>
  <section class="free-consult">
    <div class="container">
      <div class="grid">
        <div class="free-consult__services grid__cell 1/2--lap-and-up">
          <h1 class="free-consult__title" v-html="md(text.title)"></h1>
          <form class="free-consult__form">
            <fieldset>
              <input type="text" class="free-consult__input" id="name" :placeholder="text.form.name">
              <input type="text" class="free-consult__input" id="phone" :placeholder="text.form.email"><br>
              <input class="button button-primary" type="submit" :value="text.form.button">
            </fieldset>
          </form>
        </div>
        <div class="free-consult__features grid__cell 1/2--lap-and-up">
          <h2 class="free-consult__subtitle" v-html="md(text.intro)"></h2>
          <p class="free-consult__body">
            <img src="~/assets/images/icon-check-white.svg" alt="" class="free-consult__icon"> <span>{{text.features.one}}</span><br>
            <img src="~/assets/images/icon-check-white.svg" alt="" class="free-consult__icon"> <span>{{text.features.two}}</span><br>
            <img src="~/assets/images/icon-check-white.svg" alt="" class="free-consult__icon"> <span>{{text.features.three}}</span>
          </p>
        </div>
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
.free-consult {
  background: linear-gradient(180deg, #abdcff, #0396ff);
  .container {
    padding: 65px 0;
  }
}

.free-consult__services {
  padding: 0 15px;
  text-align: center;
}

.free-consult__body {
  line-height: 2.4;
  text-align: left;
  margin-left: 19px;
  color: white;
  font-size: 20px;
  margin-top: 15px;
  span {
    margin-right: 25px;
    margin-left: 5px;
  }
}

.free-consult__icon {
  width: 20px;
  vertical-align: sub;
  margin-right: 10px;
}

.free-consult__title {
  color: white;
  font-size: 40px;
  font-weight: 300;
  @include av-mq(lap-and-up) {
    text-align: left;
    padding-left: 10px;
    font-size: 45px;
  }
}

.free-consult__subtitle {
  color: white;
  font-size: 30px;
  text-align: left;
  margin-top: 80px;
  padding: 0 20px;
  @include av-mq(lap-and-up) {
    margin-top: 28px;
  }
}

.free-consult__form {
  display: block;
  margin: 25px auto;
  text-align: left;
  width: 100%;
  fieldset {
    border: none;
  }
  .free-consult__input {
    margin-bottom: 10px;
    width: 100%;
    background-color: lighten(#0396ff, 20%);
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    padding: 18px;
    height: 50px;
    &::-webkit-input-placeholder {
      color: white;
    }
    &:active,
    &:focus {
      border-color: white;
    }
  }
  .button-primary {
    margin: 0 auto;
    display: block;
    width: 100%;
    height: 50px;
    font-size: 15px;
    font-weight: 600;
    color: #0396ff !important;
    background-color: white !important;
    border: 1px solid white !important;
    border-radius: 4px;
    text-transform: uppercase;
  }
}
</style>
