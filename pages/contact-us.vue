<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="Contact Us"/>

    </div>
  </div>
</template>

<script>
  import GlobalHeader from '~components/GlobalHeader.vue'
  import PageBanner from '~components/PageBanner.vue'

  export default {
    components: {
      GlobalHeader,
      PageBanner
    }
  }
</script>
