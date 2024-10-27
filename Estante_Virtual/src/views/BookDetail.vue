<template>
  <BaseLayout>
    <div class="container book-detail">
      <div class="row">
        <div class="col-md-4">
          <img :src="book.image_link !== 'N/A' ? book.image_link : defaultImage" alt="Capa do livro" class="book-image img-fluid">
        </div>
        <div class="col-md-8">
          <h2>{{ book.title || 'Título não disponível' }}</h2>
          <p><strong>Autor(es):</strong> {{ book.authors.join(', ') }}</p>
          <p><strong>Categoria(s):</strong> {{ book.categories.join(', ') }}</p>
          <p><strong>Descrição:</strong> {{ book.description }}</p>
          <p><strong>Páginas:</strong> {{ book.page_count }}</p>
          <p><strong>Data de Publicação:</strong> {{ book.published_date }}</p>
          <p><strong>Editora:</strong> {{ book.publisher }}</p>
          <p><strong>Idioma:</strong> {{ book.language }}</p>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  components: { BaseLayout },
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    let bookData;
    try {
      bookData = JSON.parse(this.$route.query.book);
    } catch (error) {
      console.error("Erro ao analisar dados do livro:", error);
      bookData = {}; // Define book como um objeto vazio se ocorrer um erro
    }

    return {
      book: bookData,
      defaultImage: "/img/bookImg.png",
    };
  },
};
</script>

<style scoped>
.book-detail {
  margin: 20px; /* Adiciona margem ao redor do conteúdo */
}

.book-image {
  max-width: 100%; /* A imagem se ajusta ao tamanho do container */
  border-radius: 5px; /* Adiciona bordas arredondadas à imagem */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
}
</style>
