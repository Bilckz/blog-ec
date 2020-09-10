<template>
  <div>
    <Banner />

    <h1>Teste</h1>
    <Favorite />
    <div class="posts">
      <ArticlePreview
        v-for="page in $pagination.pages"
        :key="page.path"
        :path="page.path"
        :title="page.title"
        :image="page.frontmatter.image"
        :description="page.frontmatter.description"
        :tags="page.frontmatter.tags"
        :date="page.frontmatter.date"
        :author="page.frontmatter.author"
        :lastUpdated="page.lastUpdated"
      />
    </div>
    <Pagination :pagination="$pagination" />
  </div>
</template>

<script>
import Favorite from "@theme/components/Favorite.vue";
import ArticlePreview from "@theme/components/ArticlePreview.vue";
import Pagination from "@theme/components/Pagination.vue";
import Banner from "@theme/components/Banner.vue";

export default {
  name: "Index",
  components: { ArticlePreview, Pagination, Favorite, Banner },
};
</script>
