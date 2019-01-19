<template>
  <div class="page-services">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="Our Services"/>
      <!--<FrequentQuestions/>-->
      <OurServices/>
      <FreeAnalysis/>
    </div>
  </div>
</template>

<script>
import GlobalHeader from '~/components/partials/GlobalHeader';
import PageBanner from '~/components/partials/PageBanner';
import OurServices from '~/components/pages/Services/OurServices';
import FreeAnalysis from '~/components/commons/FreeAnalysis';
import FrequentQuestions from '~/components/pages/Services/Faq';

export default {
  layout: 'page',
  components: {
    GlobalHeader,
    PageBanner,
    OurServices,
    FrequentQuestions,
    FreeAnalysis,
  },
};
</script>

<style>

</style>
