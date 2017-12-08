<template>
  <section class="container">
    <h1 class="title">{{ post.title }}</h1>
    <section v-html="post.body" />
  </section>
</template>

<script>
export default {
  async asyncData({ app, route }) {
    return {
      post: await app.$content('/').get(route.path),
    };
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
  h1 {
    margin-bottom: 15px;
  }
}
</style>
