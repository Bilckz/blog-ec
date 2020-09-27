<template>
  <div>
    <Banner />
    <h1 class="m-2 mt-5">Destaques</h1>
    <Favorite />
    <h1 class="m-2 mt-5">Últimas postagens</h1>
    <div class="posts">
      <ArticlePreview
        v-for="page in $pagination.pages.slice(0, 3)"
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
