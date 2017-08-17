<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="Contact Us"/>
      <div class="contact__sections container">
        <div class="contact__email grid__cell 1/2">
          <form class="contact__form">

            <h2 class="contact__title">Get in touch</h2>
            <p class="contact__body">Leave your name and number and we'll reach out.</p>

            <input type="text" name="name" placeholder="Your name" />
            <input type="text" name="number" placeholder="Your phone number" />
            <input type="text" name="email" placeholder="Your email address" />
            <textarea rows="8" name="message" placeholder="Your message..." >
            </textarea>

            <button class="button button-primary">Submit</button>

          </form>
        </div>
        <div class="contact__call grid__cell 1/2">
            <h2 class="contact__title">Or...</h2>
            <p class="contact__body">Call us at anytime:
              <span class="contact__call">0422 634 359</span>
            </p>
        </div>
      </div>
    </div>
    <FreeAnalysis/>
  </div>
</template>

<script>
  import GlobalHeader from '~components/GlobalHeader.vue'
  import PageBanner from '~components/PageBanner.vue'
  import FreeAnalysis from '~components/FreeAnalysis.vue'

  export default {
    components: {
      GlobalHeader,
      PageBanner,
      FreeAnalysis
    }
  }
</script>

<style lang="scss" src="../assets/scss/components/contact-us.scss" />

