<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <FreeConsultation :text="text.body.hero"/>
      <PrevClients :text="text.body.trustedby"/>
      <WhoWeAre :text="text.body.whoweare"/>
      <HowWeWork :text="text.body.howwework"/>
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
  asyncData: async ({ app }) => ({
    text: await app.$content('/pages').get('/home'),
  }),
};
</script>
