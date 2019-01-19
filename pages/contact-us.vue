<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="Contact Us"/>
      <div class="contact__sections container">
        <div class="grid__cell 1/4"/>
        <div class="contact__email grid__cell 3/4">

          <form class="contact__form" name="contact" action="https://formspree.io/kirsty@fivestarhr.com.au" method="POST">

            <h2 class="contact__title">Get in touch</h2>
            <p class="contact__body">Leave your name and number and we'll reach out.</p>

            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="Your name" />
            <input type="text" name="number" placeholder="Your phone number" />
            <input type="text" name="email" placeholder="Your email address" />
            <textarea rows="8" name="message" placeholder="Your message..." >
            </textarea>

            <button class="button button-primary" type="submit">Submit</button>

          </form>
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
  head: {
    title: 'Five Star HR - Contact Us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          "Contact us page for Five Star HR, Human Resource consulting service on Sydney’s Northern Beaches. Leave your name and number and we'll reach out or just give us a call on +61 422 634359.",
      },
    ],
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
</style>

