<template>
  <section class="about-us">
    <div class="container about-us__spiel">
      <div class="grid">
        <div class="grid__cell 1/3--lap-and-up">
          <img class="about-us__portrait" src="~/assets/images/random-lady.jpg" alt="" />
        </div>
        <div class="grid__cell 2/3--lap-and-up about-us__text">
          <h5 class="about-us__subtitle">Our Mission</h5>
          <h2 class="about-us__title">Delivering measurable, meaningful and tangible HR strategies.</h2>
          <p class="about-us__body">Based on Sydney’s Northern Beaches, Kirsty Peters is the Managing Director and Founder of Five Star HR.  As a certified member of the HR Coach network, the largest HR Coaching Network in Australia, Five Star HR works with business to align your business and HR strategy to deliver measurable, meaningful and tangible results. With both Australian Human Resource Institute (AHRI), and Chartered Institute of Personnel Development (CIPD) accreditation - you can be certain that Five Star HR applies the most current and strategic HR thinking to your business. </p>
          <div class="about-us__partner">
            <img class="about-us__partner-img about-us__partner-img--ahri" src="~/assets/images/ahri-logo.jpg" alt="">
            <img class="about-us__partner-img about-us__partner-img--coach" src="~/assets/images/hr-coach-logo.jpg" alt="">
          </div>
          <p class="about-us__body">Offering a range of HR services, we can work with you on a single project, such as a fully self-managed employee management system, through to developing a 12 month HR plan, ensuring alignment between people processes and strategies and the business plan.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-us__portrait {
  max-width: 100%;
  @include av-mq(thumb) {
    display: none;
  }
}

.about-us__spiel {
  padding: 65px 0;
  @include av-mq(thumb) {
    padding: 0 0 45px 0;
  }
}

.about-us__subtitle {
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 0;
  text-align: left;
  @include av-mq(thumb) {
    margin-top: 25px;
  }
}

.about-us__title {
  text-align: left;
  font-size: 2.3rem;
  margin-top: 0;
  margin-bottom: 25px;
}

.about-us__text {
  padding: 0 20px;
  padding-left: 40px;
  @include av-mq(lap-and-up) {
    padding-left: 50px;
  }
}

.about-us__body {
  font-size: 18px;
  color: #747474;
}

.about-us__partner-img {
  max-width: 230px;
  padding: 20px;
  &--coach {
    padding: 5px 20px;
    transform: translateY(10px);
  }
}

.about-us__partner {
  margin: 0 auto;
  display: block;
  width: 460px;
  @include av-mq(thumb) {
    max-width: 230px;
  }
}
</style>

