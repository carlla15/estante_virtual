<template>
  <BaseLayout>
    <section class="row book-detail">

      <aside class="col-md-4">
        <img :src="bookData.image_link !== 'N/A' ? bookData.image_link : defaultImage" alt="Capa do livro"
          class="book-image" />
      </aside>

      <div class="col-md-8">
        <h2>{{ bookData.title || 'Título não disponível' }}</h2>
        <p><strong>Autor(es):</strong> {{ bookData.authors?.join(', ') || 'N/A' }}</p>
        <p><strong>Categoria(s):</strong> {{ bookData.categories?.join(', ') || 'N/A' }}</p>
        <p><strong>Descrição:</strong> {{ bookData.description || 'N/A' }}</p>
        <p><strong>Páginas:</strong> {{ bookData.page_count || 'N/A' }}</p>
        <p><strong>Data de Publicação:</strong> {{ bookData.published_date || 'N/A' }}</p>
        <p><strong>Editora:</strong> {{ bookData.publisher || 'N/A' }}</p>
        <p><strong>Idioma:</strong> {{ bookData.language || 'N/A' }}</p>
      </div>
    </section>
  </BaseLayout>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BaseLayout from '@/components/BaseLayout.vue';

const route = useRoute();
const defaultImage = "/img/bookImg.png";

const bookData = computed(() => {
  try {
    return JSON.parse(route.query.book);
  } catch (error) {
    console.error("Erro ao analisar dados do livro:", error);
    return {};
  }
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.book-detail {
  margin: 50px;

  aside {
    text-align: center;
  }

  p {
    margin-bottom: 20px;
  }

  .book-image {
    height: 500px;
    width: 350px;
    border-radius: 8px;
    border: 2px solid red;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
}
</style>
