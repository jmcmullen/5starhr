<template>
  <section class="frequent-questions">
    <div class="container">
      <div class="questions">

        <div class="questions__title" @click="faq.q1 ^= true">
          How can I protect my business and ensure employees understand their obligations and expectations?
        </div>
        <transition-group enter-to-class="questions-in" leave-to-class="questions-out" tag="ul">
          <ul class="questions__answer" key="1" v-show="faq.q1">
            <li>Robust and legally compliant <strong>employment contracts</strong></li>
            <li>Establish best practice <strong>position descriptions</strong>
              that provide clarity, accountability and identify training needs
            </li>
            <li>Well documented and comprehensive <strong>policies and procedures</strong>
              will not only protect from breaches of employment legislation, but also provide guidelines for employees and managers and communicate standards of behaviour.
            </li>
          </ul>
        </transition-group>

        <div class="questions__title" @click="faq.q2 ^= true">
          How can we attract, recruit and retain the right people to help grow our business and achieve success?
        </div>
        <transition-group enter-to-class="questions-in" leave-to-class="questions-out" tag="ul">
          <ul class="questions__answer" key="2" v-show="faq.q2">
            <li>Streamlined end-to-end <strong>recruitment and selection</strong> process</li>
            <li>Planned and structured <strong>onboarding</strong></li>
            <li>Ongoing two-way feedback and <strong>review processes</strong> and continuous <strong>learning and development planning</strong>
            </li>
          </ul>
        </transition-group>

        <div class="questions__title" @click="faq.q3 ^= true">
          I have an under performing employee and I don’t know how to approach them, plus I’m struggling to find the time to approach the issue – what can I do?
        </div>
        <transition-group enter-to-class="questions-in" leave-to-class="questions-out" tag="ul">
          <ul class="questions__answer" key="3" v-show="faq.q3">
            <li><strong>Identify</strong> the issue and the potential for improvement</li>
            <li><strong>Review</strong> contract and position description for clarity of expectations</li>
            <li><strong>Performance improvement planning</strong></li>
            <li>Apply fair and <strong>reasonable disciplinary process</strong>, up to an including dismissal, to mitigate risk of unfair dismissal
            </li>
          </ul>
        </transition-group>

        <div class="questions__title" @click="faq.q4 ^= true">
          We have received a complaint from an employee accusing their manager of bullying and harassment – how do we handle this?
        </div>
        <transition-group enter-to-class="questions-in" leave-to-class="questions-out" tag="ul">
          <ul class="questions__answer" key="4" v-show="faq.q4">
            <li>Refer to any existing Policy</li>
            <li>Initiate confidential investigation</li>
            <li>Based on findings - <strong>mediate, discipline, terminate</strong></li>
            <li><strong>Implement</strong> any recommendations to reduce or prevent similar complaints</li>
          </ul>
        </transition-group>

        <div class="questions__title" @click="faq.q5 ^= true">
          We have an employee who is away on maternity leave and we are in the process of restructuring the organisation – can we make her position redundant?
        </div>
        <transition-group enter-to-class="questions-in" leave-to-class="questions-out" tag="ul">
          <ul class="questions__answer" key="5" v-show="faq.q5">
            <li>Confirm whether <strong>genuine reason for redundancy</strong></li>
            <li><strong>Consultation</strong> with all affected employees</li>
            <li>Consider <strong>redeployment</strong> as an alternative to redundancy</li>
            <li>Provide <strong>notice of termination</strong> and confirm entitlements</li>
          </ul>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.frequent-questions {
  padding: 65px 0 0;
}

.frequent-questions__title {
  text-align: left;
  font-size: 2.3rem;
  width: 100%;
  display: block;
}

.questions {
  user-select: none;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  display: block;
}

.questions__title {
  font-size: 1.1rem;
  color: #333;
  border-bottom: 1px solid #dedede;
  padding: 20px 25px;
  cursor: pointer;
  line-height: 1.2;
  transition: color 0.3s ease-in;
  &:hover {
    color: #666;
  }
}

.questions__answer {
  font-size: 0.9rem;
  padding: 25px 45px;
  ul {
    margin-bottom: 0;
    li {
      list-style-position: outside;
    }
  }
}

.questions-in {
  animation: accordion-in 0.45s normal ease-in-out both 1;
}

.questions-out {
  animation: accordion-out 0.45s alternate ease-in-out both 1;
}

@keyframes accordion-in {
  0% {
    opacity: 0;
    //transform: scale(0.9) rotateX(-60deg);
    //transform-origin: 50% 0;
    max-height: 0;
  }
  100% {
    opacity: 1;
    //transform:scale(1);
    max-height: 2000px;
  }
}

@keyframes accordion-out {
  0% {
    opacity: 1;
    //transform: scale(1);
    max-height: 2000px;
  }
  100% {
    opacity: 0;
    //transform: scale(0.9) rotateX(-60deg);
    max-height: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      faq: { q1: false, q2: false, q3: false, q4: false, q5: false },
    };
  },
};
</script>
