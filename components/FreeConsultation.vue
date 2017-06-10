<template>
  <section class="free-consult">
    <div class="container">
      <div class="row">
        <div class="free-consult__services six columns">
          <h1 class="free-consult__title">Get a <strong>free</strong> 1 hour HR consultation</h1>
          <p class="free-consult__body">
            Five Star HR will partner with your organisation to help you get the best out of your most valuable asset – your people.</p>
          <p class="free-consult__body">
            <img src="../assets/img/icon-check.svg" alt="" class="free-consult__icon"> <span>Recruitment</span>
            <img src="../assets/img/icon-check.svg" alt="" class="free-consult__icon"> <span>Policy Development</span>
            <img src="../assets/img/icon-check.svg" alt="" class="free-consult__icon"> <span>Coaching</span>
          </p>
        </div>
        <div class="six columns">
          <form class="free-consult__form">
            <fieldset>
              <label for="name">What's your name?</label>
              <input type="text" class="free-consult__input" id="name">
              <label for="phone">How should we contact you?</label>
              <input type="text" class="free-consult__input" id="phone"><br>
              <input class="button button-primary" type="submit" value="Get My Free Consultation">
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" src="../assets/scss/components/free-consultation.scss" />

<script>
  export default {}
</script>
