<template>
    <article>
        <h2>{{post.title}}</h2>
        <div class="content" v-html="post.body"></div>
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
article.preview {
  max-width: 600px;
  margin: auto;
}
</style>