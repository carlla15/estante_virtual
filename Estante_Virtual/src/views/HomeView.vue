<script setup>
import { ref, onMounted } from 'vue';

import BaseLayout from '@/components/BaseLayout.vue';
import HeaderTemplate from '@/components/HeaderTemplate.vue';
import BookCard from '@/components/BookCard.vue';
import DAOService from '@/services/DAOService';
import Spinner from '@/components/Spinner.vue';

const bookService = new DAOService('books');

const books = ref([]);
const highlightedBooks = ref([]);
const otherBooks = ref([]);
const isLoading = ref(true);

const fetchBooks = async () => {
  isLoading.value = true;
  books.value = await bookService.getAll();

  highlightedBooks.value = books.value.filter(book => book.isHighlighted);
  otherBooks.value = books.value.filter(book => !book.isHighlighted);
  isLoading.value = false;
};


onMounted(fetchBooks);
</script>


<template>
  <HeaderTemplate />

  <BaseLayout>
    <div v-if="isLoading">
      <Spinner />
    </div>

    <div v-else>
      <div class="shelf-title">
        <i class="fa-solid fa-medal"></i>
        <span>Destaques</span>
      </div>

      <section class="shelf">
        <BookCard :books="highlightedBooks" />
      </section>

      <div class="shelf-title">
        <i class="fa-regular fa-font-awesome"></i>
        <span>Descubra outros livros</span>
      </div>

      <section class="shelf">
        <BookCard :books="otherBooks" />
      </section>
    </div>
  </BaseLayout>
</template>


<style scoped>
.shelf-title {
  padding: 20px;
  color: var(--color_4);

  i {
    margin: 10px;
    font-size: 1.5em;
  }

  span {
    margin-left: 10px;
    font-weight: bold;
    font-size: 1.5em;
  }
}
</style>
