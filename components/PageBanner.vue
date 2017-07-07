<template>
  <section class="page-banner">
    <div class="container">
      <h1 class="page-banner__title">{{title}}</h1>
    </div>
  </section>
</template>

<style lang="scss" src="../assets/scss/components/page-banner.scss"/>

<script>
export default {
  props: ['title']
}
</script>
