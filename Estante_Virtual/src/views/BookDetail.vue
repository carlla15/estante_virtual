<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { auth } from '@/assets/js/firebase';

import BaseLayout from '@/components/BaseLayout.vue';
import DAOService from '@/services/DAOService';

const bookService = new DAOService('books');

const userBookService = new DAOService('user_books');

const route = useRoute();

const defaultImage = "/img/bookImg.png";

const fetchBookData = async (bookId) => {
  bookData.value = await bookService.get(bookId);
}

const bookData = ref({
  title: '',
  authors: [],
  categories: [],
  description: '',
  page_count: '',
  published_date: '',
  publisher: '',
  language: '',
  image_link: '',
});

const addBookToShelf = async () => {
  if (!auth.currentUser) {
    alert('Você precisa estar logado para adicionar um livro à prateleira.');
  }

  const bookEntry = {
    uid: auth.currentUser.uid,
    book: route.params.id
  }

  const id = userBookService.insert(bookEntry);
  alert('Livro adicionado')
  console.log(id)
}

onMounted(() => {
  window.scrollTo(0, 0);
  const bookId = route.params.id;
  fetchBookData(bookId);
});
</script>


<template>
  <BaseLayout>
    <section class="row book-detail">

      <aside class="col-md-4">
        <img :src="bookData.image_link && bookData.image_link !== 'N/A' ? bookData.image_link : defaultImage"
          alt="Capa do livro" class="book-image" />
        <div class="mt-4">
          <button @click="addBookToShelf()" type="button" class="btn custom-btn">Adionar a prateleira</button>
        </div>
      </aside>

      <div class="col-md-8">
        <div>
          <h2>{{ bookData.title || 'Título não disponível' }}</h2>
        </div>
        <p><strong>Autor(es):</strong> {{ bookData.authors?.join(', ') || 'Não informado' }}</p>
        <p><strong>Categoria(s):</strong> {{ bookData.categories?.join(', ') || 'Não informado' }}</p>
        <p><strong>Descrição:</strong> {{ bookData.description || 'Descrição indisponível' }}</p>
        <p><strong>Páginas:</strong> {{ bookData.page_count || 'Não informado' }}</p>
        <p><strong>Data de Publicação:</strong> {{ bookData.published_date || 'Não informado' }}</p>
        <p><strong>Editora:</strong> {{ bookData.publisher || 'Não informado' }}</p>
        <p><strong>Idioma:</strong> {{ bookData.language || 'Não informado' }}</p>
      </div>

    </section>
  </BaseLayout>
</template>


<style scoped>
.book-detail {
  margin: 50px;

  .custom-btn {
    margin: 10px;
    background-color: var(--color_1);
    color: var(--color_white);
  }

  i {
    margin: 10px;
    font-size: 2em;
    border-radius: 8px;
    border: 1px solid red;
  }

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