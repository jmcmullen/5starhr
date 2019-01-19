<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="Contact Us"/>
      <div class="contact__sections container">
        <div class="contact__email grid__cell 1/2">

          <div class="thanks">

            <h2 class="contact__title">Thanks for your submission</h2>
            <p class="contact__body">We will be in touch shortly</p>
            

          </div>
        </div>
      </div>
    </div>
    <FreeAnalysis/>
  </div>
</template>

<script>
import GlobalHeader from '~/components/partials/GlobalHeader';
import PageBanner from '~/components/partials/PageBanner';
import FreeAnalysis from '~/components/commons/FreeAnalysis';

export default {
  layout: 'page',
  components: {
    GlobalHeader,
    PageBanner,
    FreeAnalysis,
  },
};
</script>

<style lang="scss" scoped>
.contact__form {
  margin-top: 50px;
  input,
  textarea {
    padding: 12px;
    display: block;
    margin: 15px 0;
    width: 80%;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
  }
}

.contact__call .contact__title {
  text-align: center;
  margin-top: 200px;
}
.contact__call .contact__body {
  text-align: center;
}

.contact__sections {
  padding-bottom: 80px;
}

.thanks {
  padding: 4rem 0 8rem;
}
</style>

