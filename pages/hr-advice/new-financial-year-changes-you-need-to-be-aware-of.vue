<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <div class="container">
        <article class="article">
          <h1>New Financial Year - Changes you NEED to be aware of</h1>
          <div class="article__meta">
            <figure class="article__author">
              <img class="author__avatar" src="../../assets/img/kirsty.jpg" alt="Kirsty Peters">
              <figcaption>
                Kirsty Peters
              </figcaption>
            </figure>
            <time class="article__date" datetime="2012-07-06">
              July 6th, 2012
            </time>
          </div>
          <div class="article__img">
            <img class="full-width" src="../../assets/img/new-year.jpg" />
          </div>
          <div class="article__body">
            <p>I don’t normally do legislative pieces in my blog, as I know there are many places you can get this information – but as it’s the New Financial Year, I thought I would summarise what I think are the key ‘HR’ changes you need to know about... and where to find out more.</p>
            <h2>Changes impacting businesses/employees from 1 July 2012</h2>
            <h3>New Minimum Wage</h3>
            <p>The 2012 Annual Wage Review decision takes effect from the first pay period on or after 1 July 2012.</p>
            <p>The decision increases minimum weekly wages by 2.9%. This applies to minimum wages for adults, juniors, trainees and apprentices, employees with a disability and to piece rates.</p>
            <p>The new national minimum wage will be $606.40 per week or $15.96 per hour. Award allowances, such as meal allowance, clothing allowance will also increase.</p>
            <p>For more information refer to the
              <a href="http://www.fairwork.gov.au/awards/how-to-find-an-award/pages/default.aspx">Fairwork Website.</a>
            </p>
            <h3>High Income Threshold Rises</h3>
            <p>The high income threshold increases to $123,300 from 1 July 2012. The high income threshold affects how modern awards apply to employees and affects their ability to access unfair dismissal.</p>
            <h3>Tax Free Threshold</h3>
            <p>The tax free threshold is increasing from $6,000 to $18,200 from 1 July 2012.</p>
            <h3>Superannuation Concessional Caps</h3>
            <p>The concessional cap for all employees is $25,000. There is no higher concessional cap for older workers in 2012–13. The non-concessional cap, which is the cap on post-tax contributions such as employee contributions made under a salary sacrifice arrangement, remains at $150,000 for 2012–13.</p>
            <h3>Unfair Dismissals</h3>
            <p>The compensation limit under unfair dismissal increases to $61,650.</p>
            <h3>Visa Changes</h3>
            <p>The Australian Government has announced two major reforms to employer sponsored visa programs, which take effect on 1 July 2012. These reforms are:</p>
            <ul>
              <li>The introduction of SkillSelect</li>
              <li>Reforms to the Permanent Employer Sponsored Program</li>
            </ul>
            <p>SkillSelect presents a new method of finding skilled workers to fill occupations where there are skills shortages and no suitable candidates have been identified by the employer.</p>
            <p>If you are struggling with skills shortages, this may be a great recruitment and retention strategy for you to consider. For full information please check the SkillSelect website</p>
            <p>The key changes to the Permanent Employer Sponsorship Program which may also help employers attract and retain employees are:</p>
            <ul>
              <li>Collapsing the existing visa subclasses to two</li>
              <li>Introducing a streamlined and simplified pathway to permanent residence for eligible 457 visa holders</li>
              <li>Raising the upper age limit to less than 50 years</li>
              <li>Changes to key visa criteria including English language and skill requirements</li>
              <li>Introducing one consolidated sponsored occupation list (CSOL)</li>
            </ul>
            <p>For detailed information on the 1 July reforms please check the
              <a href="http://www.immi.gov.au/">Department of Immigration and Citizenship website</a> and
              <a href="http://www.immi.gov.au/skilled/skilled-workers/_pdf/perm-sponsored-reforms.pdf">fact-sheet.</a>
            </p>
          </div>
        </article>
      </div>
      <FreeAnalysis/>
    </div>
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

<style lang="scss" src="../../assets/scss/components/article.scss" />
