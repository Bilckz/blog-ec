<template>
    <div class="card mb-2 p-1" v-if="favoritePosts.length > 0">
      <template v-for="page in favoritePosts">
        <div class="border-bottom" v-if="page != favoritePosts[0]"></div>
        <ArticleSmallPreview :image="page.frontmatter.image" :title="page.title" :path="page.path" />
      </template>
    </div>
</template>

<script>
import ArticleSmallPreview from '@theme/components/ArticleSmallPreview.vue';

export default {
  name: 'Favorite',
  components: { ArticleSmallPreview },
  computed: {
    pages() {
      let list = (this.$site && this.$site.pages) || [];
      return [...list].reverse();
    },
    favoritePosts() {
      return this.pages.filter(page => page.frontmatter.favorite);
    },
  },
};
</script>
