<template>
    <div v-if="favoritePosts.length > 0" class="favorite">
      <template v-for="page in favoritePosts.slice(0, 2)">
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
