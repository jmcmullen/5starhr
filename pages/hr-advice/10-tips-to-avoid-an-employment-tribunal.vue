<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <div class="container">
        <article class="article">
          <h1>10 Tips to avoid an Unfair Dismissal claim</h1>
          <div class="article__meta">
            <figure class="article__author">
              <img class="author__avatar" src="../../assets/img/kirsty.jpg" alt="Kirsty Peters">
              <figcaption>
                Kirsty Peters
              </figcaption>
            </figure>
            <time class="article__date" datetime="2012-05-08">
              May 8th, 2012
            </time>
          </div>
          <div class="article__img">
            <img class="full-width" src="../../assets/img/law.jpg" />
          </div>
          <div class="article__body">
            <p>
              <strong>Freyens and Oslington found that the average cost to an employer for settlement prior to hearing (not including payout) was $9780. Where the dispute escalated to a hearing, the same paper found the average cost to the employer was $11,661. These values highlight the truly costly nature of the process, especially when compared with Fair Work Australia statistics that suggest 58 per cent of successfully settled claims awarded employees with less than $4000.</strong>
            </p>
            <h2>Here are my top 10 tips for avoiding an Employment Tribunal</h2>
            <h3>Get your contracts checked for compliance</h3>
            <p>This provides employees with the statutory and contractual written particulars about their terms and conditions of employment.</p>
            <h3>Get your Policies and Procedures coordinated in an up to date staff handbook</h3>
            <p>This will improve staff communications and provide further details about terms and conditions of employment, accepted standards of behaviour and procedures within the contract of employment, at the same time reducing management downtime.</p>
            <h3>Make disciplinary procedures clear</h3>
            <p>This enables the employer to draw to the attention of an employee any issue of concern he or she has about their employment. It will also ensure that staff are aware of the rules affecting their employment including any first offence that may lead to their summary dismissal.</p>
            <h3>Create formalised HR policies and procedures</h3>
            <p>These should include clear written statements about standards of employer and employee obligations and expected behaviour.</p>
            <h3>Make clear grievance and appeals procedures</h3>
            <p>This enables the employee to draw to the attention of the employer any issue of concern they have about their employment at the earliest opportunity and should be dealt with by the employer in a timely manner. The appeals procedure importantly contributes to a fair procedure by providing that any disciplinary decision about an employee may be reviewed at a higher level.</p>
            <h3>Provide redundancy consultation procedures</h3>
            <p>This will ensure that the employee and employer have considered any suitable alternative employment options within the business before a decision is made by the employer to dismiss on the grounds of redundancy. It will also help to ensure that any subsequent selection for redundancy dismissal qualifies as a fair dismissal.</p>
            <h3>Provide company and job induction training</h3>
            <p>These are vital programmes for influencing long term employee commitment and meaningful contributions as well as early and effective employee performance. It will also help the employer to fulfil its health and safety obligations for employee competency.</p>
            <h3>Provide HR skills training for managers and supervisors</h3>
            <p>This will ensure that managers are aware of their accountability for people management issues and are equipped with the knowledge and personnel skills to perform effectively their line management role.</p>
            <h3>Put together staff assessment and development programmes</h3>
            <p>These will monitor, involve, and motivate staff into continually improving performance and will at the same time raise awareness of how their contribution fits into the overall aims and objectives of the business.</p>
            <h3>Provide staff training and refresher training covering discrimination, harassment and health & safety</h3>
            <p>This will help to create a positive workplace culture that contributes to effective employee performance and good employee relations. It will also help minimise the risks of unlimited liabilities faced by employers arising out of allegations or deficiencies in these potentially costly areas.</p>
            <p>
              <strong>Important:</strong> simply creating a library of paperwork to gather dust on the office shelf is not the answer. Managing employee performance requires a good grasp of personnel skills, and a professional approach to people management.</p>
            <p>Recognising that employees are important assets (rather than unwelcome overheads) is integral to effective employee performance and the achievement of business objectives. Proactive HR management will payback in improved employee performance and commitment, bringing significant returns to your business.</p>
            <p>If you'd like any help in pulling these pieces together (or just checking over what you have in place today) - it's what I do every day for clients.
              <a href="/contact-us">Just give me a call.</a>
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
