<template>
  <section class="page-banner">
    <div class="container">
      <h1 class="page-banner__title">{{title}}</h1>
    </div>
  </section>
</template>

<style lang="scss">
  .page-banner {
    background-color: #F1F6FB;
    .container {
      justify-content: flex-start;
    }
  }
  .page-banner__title {
    font-size: 2rem;
    padding: 45px 0;
    margin: 0;
  }
</style>

<script>
  export default {
    props: ['title']
  }
</script>
