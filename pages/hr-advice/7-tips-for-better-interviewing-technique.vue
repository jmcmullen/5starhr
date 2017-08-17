<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <div class="container">
        <article class="article">
          <h1>7 tips for better interviewing technique</h1>
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
            <img class="full-width" src="../../assets/img/interview.jpg" />
          </div>
          <div class="article__body">
            <p>With the employment market in Sydney so tight - I often get asked to help my clients with recruitment. My clients are typically small-medium businesses – where a single bad hire can have really damaging financial consequences.</p>
            <p>I like to work (coach) my clients to build these sorts of hiring competencies within their organization - and what I often notice is that hiring managers have usually had next to no training on interview technique at all.</p>
            <p>Interviewing is a skill that can be taught, and has some golden rules to make sure the hiring process meets your goals.</p>
            <h3>1. Be clear what you want from the candidate</h3>
            <ul>
              <li>Hire for culture fit, but first spend some time really looking at what your department or company culture really is. This takes some thought (and collaboration with your employees and potentially other departments).</li>
              <li>Develop a list of competencies or strengths (I vote for strengths) that fit within that culture.</li>
            </ul>
            <h3>2. Read the CV properly – and prepare properly</h3>
            <ul>
              <li>Prepare at least 5 questions in advance based on your list of competencies or strengths and pre-define acceptable answers.</li>
              <li>Use the same pre-prepared questions for each candidate so you can compare apples with apples.</li>
            </ul>
            <h3>3. Be skeptical and look for red flags</h3>
            <ul>
              <li>Everybody ‘embellishes’ on their resume – but learn to understand which bits matter
                <ul>
                  <li>Do they have any gaps?</li>
                  <li>How stable has their job history been</li>
                  <li>Have they been promoted or given additional responsibilities in the companies they’ve previously worked in?</li>
                  <li>What are the cultures of the companies they’ve worked for previously? Are they a small company candidate interviewing for a large company role or vice versa? Are they used to more autonomy than you’re willing to give? Or less? </li>
                </ul>
              </li>
              <li>Look for any red flags or problem areas. Where might they not fit? What will they need from me and can I deliver? Is this job above or below their skillset and how would I manage that?</li>
              <li>Look for problem areas and have them address those areas to your satisfaction instead of what most interviewers do: try to make them fit because they really like them.</li>
            </ul>
            <h3>4. Ask questions that will find detailed, truthful information</h3>
            <p>Known as “Behavioural Based” or “Competency Based” interviewing techniques – (something I specialise in coaching my clients in). You need to find specific examples from the candidates’ past. Don’t let them off the hook by letting them tell you what they WOULD do instead of what they DID do.</p>
            <h3>5. Let them ask questions - and then listen to what they asked and how they asked it</h3>
            <ul>
              <li>You can find out as much or more information by what they ask you than by how they answer your questions.</li>
            </ul>
            <h3>6. Understand what drives potential applicants that will apply for your role and be able to articulate how your company meets those needs.</h3>
            <ul>
              <li>Different generations want different things, understand generational differences</li>
              <li>Don't forget to make sure the job is going to appeal to the candidate</li>
            </ul>
            <h3>7. When you find what you’re looking for – close the deal!</h3>
            <ul>
              <li>If your hiring process takes 2 months to make a decision, you risk losing your candidates. While you should never rush the process – you need to move quickly when you have found the right person</li>
            </ul>
            <h3>AND FINALLY: Don’t forget to always check their references!</h3>
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
