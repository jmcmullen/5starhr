<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="About Us"/>
      <OurMission :text="text.body" />
      <FreeAnalysis />
    </div>
  </div>
</template>

<script>
import GlobalHeader from '~/components/partials/GlobalHeader';
import PageBanner from '~/components/partials/PageBanner';
import OurMission from '~/components/pages/About/OurMission';
import FreeAnalysis from '~/components/commons/FreeAnalysis';

export default {
  layout: 'page',
  components: {
    GlobalHeader,
    PageBanner,
    OurMission,
    FreeAnalysis,
  },
  asyncData: async ({ app }) => ({
    text: await app.$content('/pages').get('/about'),
  }),
  head: {
    title: 'Five Star HR - About Us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'We are based on Sydney’s Northern Beaches, Kirsty Peters is the Managing Director and Founder of Five Star HR. We offer Outsourcing human resources, Hr consultancy services and Hr outsourcing service in Sydney.',
      },
    ],
  },
};
</script>
