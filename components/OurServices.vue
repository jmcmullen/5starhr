<template>
  <section class="our-services">
    <div class="container">
      <div class="row">
        <div class="six columns">
          <h5 class="our-services__subtitle">What We Do</h5>
          <h2 class="our-services__title">Really simple, really effective Human Resource strategies</h2>
        </div>
        <div class="six columns">
          <p class="our-services__body">
            Whether you are having trouble finding, recruiting, retaining and motivating staff, struggling with employee expectations, navigating the minefield of compliance (IR and WHS), or looking to develop or maintain a market-leading business with outstanding Human Resources practices and sustainable strategies, Five Star HR will partner with your organisation to help you get the most out of your most valuable asset – your people.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="our-services__service five columns">
        <h4 class="our-services__service-desc">Outsourced HR Consultants</h4>
        <p class="our-services__service-body">
          Weather you need an in-house HR Manager temporarily or longer-term we can answer your HR questions quickly and efficiently.</p>
      </div>
      <div class="our-services__service five columns">
        <h4 class="our-services__service-desc">Policy Development</h4>
        <p class="our-services__service-body">
          We can help you by supplying effective policies, defining legislation, outlining in-house processes and providing awareness, education and training.</p>
      </div>
      <div class="our-services__service five columns">
        <h4 class="our-services__service-desc">Employment & Industrial&nbsp;Relations</h4>
        <p class="our-services__service-body">
          We're here to help you better understand what has changed and how your business needs to adapt to stay compliant with Fair Work Legislation and Modern Awards.</p>
      </div>
      <div class="our-services__service five columns">
        <h4 class="our-services__service-desc">Recruitment & Retention</h4>
        <p class="our-services__service-body">
          Our HR specialists provide a full suite of recruitment tools including the development of remuneration/benefits packages to attract and retain key performers</p>
      </div>
    </div>
    <div class="container">
      <div class="our-services__service five columns">
        <h4 class="our-services__service-desc">Workplace Health &&nbsp;Safety</h4>
        <p class="our-services__service-body">Our consultants can review your safety processes to protect your business and ensure compliance with PCBU legislation.</p>
      </div>
      <div class="our-services__service five columns">
        <h4 class="our-services__service-desc">Mediation</h4>
        <p class="our-services__service-body">We provide mediation assistance with workplace disputes to all the parties in the dispute to reach a mutually acceptable solution.</p>
      </div>
      <div class="our-services__service five columns">
        <h4 class="our-services__service-desc">Sponsorship and Visas</h4>
        <p class="our-services__service-body">Sponsoring employees from overseas countries provides you with the skills you need to make your business productive in a tightening employment marketplace.</p>
      </div>
      <div class="our-services__service five columns">
        <h4 class="our-services__service-desc">Coaching and Mentoring</h4>
        <p class="our-services__service-body">Has your teamwork broken down? Do you have an otherwise-perfect staff member who needs some leadership training or management advice?</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .our-services {
    &.container {
      justify-content: flex-start;
    }
  }

  .our-services {
    padding: 65px 0;
  }

  .our-services__subtitle {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0;
    text-align: left;
  }

  .our-services__title {
    text-align: left;
    font-size: 2.3rem;
    margin-top: 0;
  }

  .our-services__body {
    margin-top: 30px;
    text-align: left;
    color: #747474;
    margin-bottom: 75px;
  }

  .our-services__service {
    background-color: #F1F1F1;
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 45px;
    height: 300px;
    transition: background-color .3s ease-in;
    &:hover {
      background-color: darken(#f1f1f1, 5%);
    }
  }

  .our-services__service-body {
    margin-top: 30px;
    text-align: left;
    color: #747474;
  }

  .our-services__service-icon {
    padding: 25px;
  }

  .our-services__service-desc {
    font-size: 1.2rem;
    text-align: left;
    height: 50px;
  }
</style>

<script>
  export default {
    props: ['title']
  }
</script>
