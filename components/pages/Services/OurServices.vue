<template>
  <section class="our-services">
    <div class="container">
      <div class="grid">
        <div class="grid__cell 1/2--lap-and-up">
          <h5 class="our-services__subtitle">{{text.subtitle}}</h5>
          <h2 class="our-services__title">{{text.title}}</h2>
        </div>
        <div class="grid__cell 1/2--lap-and-up">
          <p class="our-services__body">
            {{text.body}}</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="grid--center">
            <div class="our-services__service grid__cell 1/3--lap-and-up" v-for="(service, i) in text.services" :key="i">
              <h4 class="our-services__service-desc">
                {{service.title}}
              </h4>
              <p class="our-services__service-body">
                {{service.body}}
              </p>
            </div>
      </div>
    </div>
    <div class="container">
      <h1 class="our-services__title">We provide services that are relevant to your needs</h1>
    </div>
      <div class="container" style="justify-content: flex-start">
        <div class="programs">
          <p>The following Programs are our most popular HR services delivered to businesses throughout Sydney, coupled with ongoing support and coaching:</p>

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
  props: {
    text: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
    },
  },
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
  margin-top: 25px;
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
