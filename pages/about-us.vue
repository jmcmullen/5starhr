<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="About Us"/>
      <AboutUs />
      <FreeAnalysis />
    </div>
  </div>
</template>

<script>
  import GlobalHeader from '~components/GlobalHeader.vue'
  import PageBanner from '~components/PageBanner.vue'
  import AboutUs from '~components/AboutUs.vue'
  import FreeAnalysis from '~components/FreeAnalysis.vue'

  export default {
    components: {
      GlobalHeader,
      PageBanner,
      AboutUs,
      FreeAnalysis
    }
  }
</script>
