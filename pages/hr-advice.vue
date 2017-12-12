<template>
  <div class="page-index">
    <GlobalHeader/>
    <div class="wrapper">
      <PageBanner title="Free HR Advice"/>
      <div class="container">
        <div class="grid">
            <div class="posts 3/4 grid__cell">
                <PostPreview v-for="(post, i) in posts" :post="post" :key="i" />
            </div>
            <div class="meta 1/4 grid__cell">
                email signup
                dates
            </div>
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
  layout: 'blog',
  components: {
    GlobalHeader,
    PageBanner,
    FreeAnalysis,
    PostPreview,
  },
  asyncData: async ({ app }) => ({
    posts: await app.$content('/posts').getAll(),
  }),
};
</script>


