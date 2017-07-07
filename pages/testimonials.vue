<template>
  <div class="page-services">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="Testimonials" />
      <Testimonials />
    </div>
    <FreeAnalysis/>
  </div>
</template>

<script>
import GlobalHeader from '~components/GlobalHeader'
import PageBanner from '~components/PageBanner'
import Testimonials from '~components/Testimonials'
import FreeAnalysis from '~components/FreeAnalysis.vue'

export default {
  components: {
    GlobalHeader,
    PageBanner,
    Testimonials,
    FreeAnalysis
  }
}
</script>

<style>

</style>
