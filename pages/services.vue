<template>
  <div class="page-services">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="Our Services"/>
      <FrequentQuestions/>
      <OurServices/>
      <FreeAnalysis/>
    </div>
  </div>
</template>

<script>
import GlobalHeader from '~components/GlobalHeader'
import PageBanner from '~components/PageBanner'
import OurServices from '~components/OurServices'
import FreeAnalysis from '~components/FreeAnalysis'
import FrequentQuestions from '~components/FrequentQuestions'

export default {
  components: {
    GlobalHeader,
    PageBanner,
    OurServices,
    FrequentQuestions,
    FreeAnalysis
  }
}
</script>

<style>

</style>
