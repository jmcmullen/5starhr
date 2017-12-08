<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <FreeConsultation/>
      <PrevClients/>
      <WhoWeAre/>
      <HowWeWork/>
      <FreeAnalysis theme="light" />
    </div>
  </div>
</template>

<script>
import GlobalHeader from '~/components/partials/GlobalHeader';
import FreeConsultation from '~/components/pages/Home/FreeConsultation';
import PrevClients from '~/components/pages/Home/TrustedBy';
import WhoWeAre from '~/components/pages/Home/WhoWeAre';
import HowWeWork from '~/components/pages/Home/HowWeWork';
import FreeAnalysis from '~/components/commons/FreeAnalysis';

export default {
  layout: 'page',
  components: {
    GlobalHeader,
    FreeConsultation,
    PrevClients,
    WhoWeAre,
    HowWeWork,
    FreeAnalysis,
  },
};
</script>
