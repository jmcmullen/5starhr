<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="Our Clients"/>
      <Quotes :text="text.body" />
      <FreeAnalysis />
    </div>
  </div>
</template>

<script>
import GlobalHeader from '~/components/partials/GlobalHeader';
import PageBanner from '~/components/partials/PageBanner';
import Quotes from '~/components/pages/Testimonials/Quotes';
import FreeAnalysis from '~/components/commons/FreeAnalysis';

export default {
  layout: 'page',
  components: {
    GlobalHeader,
    PageBanner,
    Quotes,
    FreeAnalysis,
  },
  asyncData: async ({ app }) => ({
    text: await app.$content('/pages').get('/testimonials'),
  }),
  head: {
    title: 'Five Star HR - Contact Us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Testimonials for Five Star HR and Kirsty Peters as Principal Human Resource Consultant and founder of Five Star HR. Human Resource Consultant, HR Consultant, Sydney human resources, HR Staff Systems and HR Coach.',
      },
    ],
  },
};
</script>
