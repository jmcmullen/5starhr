<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <FreeConsultation/>
      <PrevClients/>
      <WhoWeAre/>
      <HowWeWork/>
      <FreeAnalysis/>
    </div>
  </div>
</template>

<script>
  import GlobalHeader from '~components/GlobalHeader.vue'
  import FreeConsultation from '~components/FreeConsultation.vue'
  import PrevClients from '~components/PrevClients.vue'
  import WhoWeAre from '~components/WhoWeAre.vue'
  import HowWeWork from '~components/HowWeWork.vue'
  import FreeAnalysis from '~components/FreeAnalysis.vue'

  export default {
    components: {
      GlobalHeader,
      FreeConsultation,
      PrevClients,
      WhoWeAre,
      HowWeWork,
      FreeAnalysis
    }
  }
</script>
