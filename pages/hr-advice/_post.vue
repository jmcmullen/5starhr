<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="HR Advice"/>
      <div class="container">
        <div class="post" v-if="post">
          <h1>{{ post.title }}</h1>
          <section v-html="post.body" />
        </div>

        <div class="all-posts" v-else>
          <!-- <code>{{ all }}</code> -->
          <PostPreview v-for="(post, i) in all" :post="post" :key="i" />
        </div>
      </div>
    </div>
    <FreeAnalysis/>
  </div>
</template>

<script>
import GlobalHeader from '~/components/partials/GlobalHeader';
import PageBanner from '~/components/partials/PageBanner';
import FreeAnalysis from '~/components/commons/FreeAnalysis';
import PostPreview from '~/components/commons/PostPreview';

export default {
  layout: 'page',
  components: {
    GlobalHeader,
    PageBanner,
    FreeAnalysis,
    PostPreview,
  },
  async asyncData({ app, route }) {
    try {
      const post = await app.$content('/posts').get(route.path);
      return { post };
    } catch (error) {
      const all = await app.$content('/posts').getAll();
      return { all };
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  text-align: left;
  max-width: 960px;
  margin: 0 auto;
  font-size: 1.2rem;
  h1 {
    margin-bottom: 15px;
  }
}
</style>
