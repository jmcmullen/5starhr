<template>
  <section class="our-services">
    <div class="container">
      <div class="grid">
        <div class="grid__cell 1/2--lap-and-up">
          <h5 class="our-services__subtitle">What We Do</h5>
          <h2 class="our-services__title">We provide HR Services that will minimise risk and maximise sustainability</h2>
        </div>
        <div class="grid__cell 1/2--lap-and-up">
          <p class="our-services__body">
            Whether you are having trouble finding, recruiting, retaining and motivating staff, struggling with employee expectations, navigating the minefield of compliance (IR and WHS), or looking to develop or maintain a market-leading business with outstanding Human Resources practices and sustainable strategies, Five Star HR will partner with your organisation to help you get the most out of your most valuable asset – your people.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="grid--center">
            <div class="our-services__service grid__cell 1/3--lap-and-up">
              <h4 class="our-services__service-desc">Adhoc HR Advice and Support</h4>
              <p class="our-services__service-body">
                From as little as $165 per month we can help your resolve your people issues simply and quickly.  We will provide phone and email support and answer all your employee related questions in relation to employment legislation and compliance and offer practical advice and solutions to all your staffing issues.
              </p>
            </div>
            <div class="our-services__service grid__cell 1/3--lap-and-up">
              <h4 class="our-services__service-desc">Outsourced HR Manager & Coach</h4>
              <p class="our-services__service-body">
                We can become your dedicated HR Manager (working onsite with your team on a regular scheduled basis – 1 day a week, month or fortnight) and look after all your HR responsibilities or we can offer a blended approach by coaching one of your existing staff members to take on the day-to-day HR activities, while we continue to provide strategic HR support.</p>
            </div>
            <div class="our-services__service grid__cell 1/3--lap-and-up">
              <h4 class="our-services__service-desc">HR Project Manager</h4>
              <p class="our-services__service-body">
                Perhaps you just need help on a short-term basis to manage a project, such as implement an online HRS or WHS system, support a restructure and redundancy process, or cover a long-term absence within your HR team.  We can provide additional short-term support and HR expertise within your business.</p>
            </div>
      </div>
    </div>
    <div class="container">
      <h1 class="our-services__title">We provide services that are relevant to your needs</h1>
    </div>
      <div class="container" style="justify-content: flex-start">
        <div class="programs">
          <p>The following Programs are our most popular services delivered to businesses, coupled with ongoing support and coaching:</p>

          <ol>
            <li class="four columns"><strong>HR Audits</strong> - using a planned approach we review your current HR practice, objectively identify issues, risks and opportunities within the business, and develop a 3, 6 or 12 month’ HR Plan for the business.</li>
            <li class="four columns"><strong>HR Compliance Program</strong> - develop compliant employment contracts, new hire packs, onboarding and offboarding checklists, and HR policies and Procedures.</li>
            <li class="four columns"><strong>HR Skills Coaching</strong> - to assist in building internal HR capability to manage day-to-day HR processes for administrators and managers.</li>
            <li class="four columns"><strong>Online HRIS</strong> - implement a comprehensive, online core HRIS solution that streamlines, automates and simplifies HR processes (including recruitment, onboarding, offboarding, records management, leave management, performance management and training management)</li>
            <li class="four columns"><strong>In-house Recruiter - </strong>Partner with the business to provide an end-to-end recruitment and selection service (without attracting expensive commissions).</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style lang="scss" scoped>
.our-services {
  .container {
    padding: 0 20px;
  }
}

.programs {
  text-align: left;
  ol {
    @include av-mq(thumb) {
      padding-left: 10px;
    }
  }
  li {
    margin: 30px 20px;
    @include av-mq(lap-and-up) {
      padding-right: 160px;
    }
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
  margin-bottom: 55px;
}

.our-services__body {
  margin-top: 50px;
  text-align: left;
  color: #747474;
  margin-bottom: 75px;
}

.our-services__service {
  background-color: #f1f1f1;
  padding: 10px 15px;
  margin-bottom: 45px;
  height: 350px;
  transition: background-color 0.3s ease-in;
  border-right: 5px solid #fff;
  &::last-of-type {
    border-right: none;
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
