<template>
    <article>
        <h2>{{post.title}}</h2>
        <div class="content" v-html="post.body.substr(0, 256)"></div>
        <nuxt-link :to="post.permalink">Read More</nuxt-link>
    </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
article {
  margin: 3rem auto;
}
</style>