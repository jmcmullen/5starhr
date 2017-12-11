<template>
  <section class="testimonials">
    <div class="container">
      <div class="grid monial" v-for="(monial, i) in testimonials" v-bind:class="{ 'monial--odd': isOdd(i) }" :key="i">
        <div v-bind:class="{ 'monial__img--odd': isOdd(i + 1) }" class="grid__cell 2/6--lap-and-up monial__img--top">
          <img class="monial__img-src" v-bind:src="monial.image" alt="" />
        </div>
        <div class="grid__cell 4/6--lap-and-up">
          <blockquote class="quote">
            <p v-for="(quote, index) in monial.quotes" :key="index">{{ quote }}</p>
            <cite class="quote__cite">
              <strong>{{ monial.author }}</strong>
              - {{ monial.position }}</cite>
          </blockquote>
        </div>
        <div v-bind:class="{ 'monial__img--odd': isOdd(i + 1) }" class="grid__cell 2/6--lap-and-up monial__img--btm">
          <img class="monial__img-src" v-bind:src="monial.image" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import tycenDemolition from '~/assets/images/tycen-demolition.jpg';
import oneEducation from '~/assets/images/one-education-logo.png';
import eastWestEngineering from '~/assets/images/east-west-engineering.jpg';
import panPacific from '~/assets/images/pan-pacific.png';
import discTechnology from '~/assets/images/discovery-technology.jpg';
import firstMigration from '~/assets/images/first-class-migration.jpg';
import obserHotel from '~/assets/images/observatory-hotel.jpg';

export default {
  data() {
    return {
      testimonials: [
        {
          author: 'Terence McCaughan',
          position: 'Admin Service Delivery Manager, Tycen Demolition Pty Ltd',
          quotes: [
            'We initially engaged Five Star HR to review our HR processes during a period of growth. Kirsty helped create and develop a framework of HR policies and procedures tailored to our business needs and legislative requirements. During this process, we discovered that Kirsty was an experienced HR professional with a wealth of knowledge across the full HR spectrum.',
            'Kirsty is now our on-call HR guru and she continues to assist us in our business by providing ongoing coaching and advice and filling the gap in our HR expertise.',
          ],
          image: tycenDemolition,
        },

        {
          author: 'Rangan Srikhanta',
          position: 'CEO & Founder, One Education',
          quotes: [
            "I've had the pleasure of working with Kirsty since 2013 and she has become a critical component in our organisation's success. With Kirsty's help I've been able to mature as a CEO, by helping taking the emotion out of HR and ensuring I make informed decisions throughout the employment lifecycle.",
            "Kirsty is extremely flexible and fair in her pricing, helping fast paced start-ups to run professional HR systems and processes at the fraction of the cost. With Kirsty's help we've implemented cutting edge and integrated systems for leave and performance management.",
            "I can't recommend Kirsty and FiveStarHR strongly enough.",
          ],
          image: oneEducation,
        },

        {
          author: 'Mathieu Tijskens',
          position: 'CEO, East West Engineering',
          quotes: [
            'We engaged Five Star HR to help recruit a Senior Sales Manager and were very pleased with the service, sense of urgency and most important ‘the result’. Unlike a typical recruitment consultant, Kirsty provided a complete end to end recruitment service - including position description, behavioural profiling tool and compliant employment contract. We look forward to utilising Five Star HR in the future as we continue to develop our internal HR systems and processes.',
          ],
          image: eastWestEngineering,
        },

        {
          author: 'Grant Raubenheimer',
          position: 'General Manager, Pan Pacific Perth',
          quotes: [
            'Kirsty managed the implementation of numerous changes within the business including automated time and attendance systems, Enterprise Agreements, training and staff career development, transferring of staff to new entity during merger and acquisition (handled with the wisdom and caring of a dedicated and passionate HR professional).',
          ],
          image: panPacific,
        },

        {
          author: 'Tony Cleary',
          position: 'Director of Sales and Marketing, Discovery Technology',
          quotes: [
            "Five Star HR provided me with valuable advice in regard to various HR scenarios over the past year. Their knowledge, and more importantly - Kirsty's ability to understand people, has been instrumental in driving cultural change at Discovery. I would recommend her to any business leader that requires the services of a professional HR consultant.",
          ],
          image: discTechnology,
        },

        {
          author: "Michelle Le'Fevre",
          position: 'Principal, First Class Migration',
          quotes: [
            'I would highly recommend Five Star HR. I refer many of my small to medium corporate clients on a regular basis to assist with HR issues such as contracts of employment, training plans, internal policies and processes and the feedback I get from my clients is always extremely positive. They provide expert advice and and go out of their way to assist on every occasion',
          ],
          image: firstMigration,
        },

        {
          author: 'Patrick Griffin',
          position: 'OAM, Managing Director Orient-Express Hotels, Australia',
          quotes: [
            "I can't recommend Kirsty highly enough - a truly outstanding HR professional and an absolute pleasure to work with. Kirsty was our Regional HR Director for over 6 years, and we were consistently recognised and awarded in the industry as the most desirable brand to work for. A recommendation for our HR programs doesn't come much higher than that!",
          ],
          image: obserHotel,
        },
      ],
    };
  },
  props: {
    text: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isOdd(num) {
      return num % 2;
    },
  },
};
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 64px 0;
}

.testimonials__subtitle {
  @extend .copy-subtitle;
}

.testimonials__title {
  @extend .copy-title;
}

.testimonials__body {
  @extend .copy-body;
  margin-top: 80px;
}

.testimonials__logo {
  width: 100%;
}

.quote {
  margin-top: 35px;
  text-align: left;
  p,
  cite {
    @include av-mq(lap-and-up) {
      margin-left: 40px;
    }
  }
  cite {
    display: block;
    margin-top: 10px;
  }
  p {
    border-left: 3px solid $light-blue;
    padding-left: 5px;
  }
  &:before {
    background-image: url('~/assets/images/quote.svg');
    background-size: contain;
    height: 35px;
    width: 35px;

    content: ' ';
    font-size: 72px;
    position: absolute;
    top: 0px;
  }
}

.monial {
  padding: 25px 20px 85px 20px;
  &--odd {
    background-color: $light-blue;
  }
}

.monial__img-src {
  @include av-mq(thumb) {
    margin: auto;
    display: block;
    max-width: 100px;
  }
  @include av-mq(lap-and-up) {
    width: 100%;
    max-width: 200px;
  }
}

.monial__img--btm {
  @include av-mq(thumb) {
    display: none;
  }
  @include av-mq(lap-and-up) {
    &.monial__img--odd {
      display: none;
    }
  }
}

.monial__img--top {
  @include av-mq(lap-and-up) {
    display: none;
    &.monial__img--odd {
      display: inline;
    }
  }
}
</style>
