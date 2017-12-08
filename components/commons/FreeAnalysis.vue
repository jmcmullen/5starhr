<template>
  <section class="free-analysis" v-bind:class="{ 'free-analysis--light': theme == 'light' }">
    <div class="container">
      <div class="grid">
        <div class="grid__cell 3/4--lap-and-up">
          <h2 class="free-analysis__title">Phone today for a free HR Health Check</h2>
          <p class="free-analysis__body">In just one hour, we can help review your current HR policies, procedures, documentation and assess any areas of risk and propose solutions</p>
        </div>
        <div class="grid__cell 1/4--lap-and-up">
          <a href="/contact-us" class="button">0422 634 359</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style lang="scss" scoped>
.free-analysis {
  background-color: #1cb6e6;
  .container {
    padding: 35px 20px;
  }
  .button {
    background-color: white;
    border-color: #1cb6e6;
    color: #1cb6e6;
    max-width: 200px;
    margin: 15px auto 0 auto;
  }
  &--light {
    @include av-mq(thumb) {
      background-color: white;
      color: black;
      .free-analysis__title {
        color: black;
      }
      .free-analysis__body {
        color: #747474;
      }
      .button {
        background-color: #1cb6e6;
        border-color: #1cb6e6;
        color: white;
      }
    }
  }
}
.free-analysis__title {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 10px;
  text-align: center;
  padding: 0 60px;
  @include av-mq(lap-and-up) {
    text-align: left;
    margin-bottom: 0;
    padding: 0;
  }
}
.free-analysis__body {
  margin-top: 0;
  margin-bottom: 15px;
  color: white;
  font-size: 18px;
  text-align: center;
  @include av-mq(lap-and-up) {
    text-align: left;
    padding-right: 100px;
    margin-bottom: 0;
  }
}
</style>
