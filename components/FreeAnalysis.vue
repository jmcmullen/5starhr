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
  props: ['theme']
}
</script>

<style lang="scss" src="../assets/scss/components/free-analysis.scss" scoped />

