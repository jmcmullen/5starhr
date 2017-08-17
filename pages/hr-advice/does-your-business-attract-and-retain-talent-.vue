<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <div class="container">
        <article class="article">
          <h1>Does your business attract and retain talent?</h1>
          <div class="article__meta">
            <figure class="article__author">
              <img class="author__avatar" src="../../assets/img/kirsty.jpg" alt="Kirsty Peters">
              <figcaption>
                Kirsty Peters
              </figcaption>
            </figure>
            <time class="article__date" datetime="2012-05-28">
              May 28th, 2012
            </time>
          </div>
          <div class="article__img">
            <img class="full-width" src="../../assets/img/nasa.jpg" />
          </div>
          <div class="article__body">
            <p>
              <strong>Fascinating stat #1:</strong> Of over 700 major organisations studied as part of Bernsin & Associates 2010 study in Talent Management in the US* – only 7% had a ‘Strategic Talent Management Program’.</p>
            <p>
              <strong>Fascinating stat #2:</strong> Those 7% are generating more than twice the revenue per employee, 40% lower turnover rates, and 38% higher levels of employee engagement than their peers. (Ok, that’s actually 3 stats … but they’re so compelling I couldn’t resist).</p>
            <p>
              <strong>Conclusion:</strong> Looking after your people pays for itself.</p>
            <p>For more information refer to the
              <a href="http://www.fairwork.gov.au/awards/how-to-find-an-award/pages/default.aspx">Fairwork Website.</a>
            </p>
            <p>I can hear what you are thinking: “Yeah, well – that’s all well and good for a Fortune 500 company – but it’s not so easy for my little business.” Well – given only 7% of the major companies studied bother with a ‘Talent Management Program’, clearly this is not a question of scale. I can tell you that the successful small businesses I work with think strategically about their people (that’s why they hire me!)</p>
            <h2>So – what does this mean for a Small-Medium Business?</h2>
            <p>Ultimately, this is not HR’s problem. HR’s role is to design and promote the process for your People, but it is up to line managers and supervisors to operate as “talent managers.” This means taking time to review performance, figure out “what people qualities drive success,” and give people feedback on a continuous basis. These are the skills which great leaders build over their entire career.</p>
            <p>Organisations must continuously invest in management and leadership training, because people are always getting “promoted” into leadership without the necessary skills (67% of respondents in the Bernsin and Associates Study rate their first line managers far-behind or well-behind in the skills they need to do their jobs). And the “Right” leaders for your company are unique to your own culture, business, and strategy.</p>
            <p>By the way, talent management is not something you copy out of a book. Your talent management strategy is unique to you. If you are a fast-growing company, you may need to focus on strategic sourcing and building your employment brand. If you are globalizing, your focus should be the integration of your recruiting and internal talent mobility program. If you suffer from low engagement and employee performance, it may be time to focus on the revamp of your performance management and development planning process. I have some great tools (and experience) that can probably help you here. Just give me a call!</p>
            <p>Bernsin study can be found
              <a href="http://www.bersin.com/Practice/Detail.aspx?docid=12722">here</a>.
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
