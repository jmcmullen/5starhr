<template>
  <section class="page-banner">
    <div class="container">
      <h1 class="page-banner__title">{{title}}</h1>
    </div>
  </section>
</template>


<script>
export default {
  props: ['title'],
};
</script>

<style lang="scss" scoped>
.page-banner {
  background-color: #f1f6fb;
  .container {
    padding: 0 20px;
  }
}

.page-banner__title {
  font-size: 2rem;
  padding: 45px 0;
  margin: 0;
}
</style>
