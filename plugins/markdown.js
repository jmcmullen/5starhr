import Vue from 'vue';
import MarkdownIt from 'markdown-it';

Vue.mixin({
  methods: {
    md(message) {
      return MarkdownIt().render(message);
    },
  },
});
