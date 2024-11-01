<template>
  <HeaderTemplate />

  <BaseLayout>
    <div v-if="isLoading" class="d-flex justify-content-center">
      <div class="spinner-border spinner" role="status">
        <span class="sr-only">Loading...</span>
      </div>
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

<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../assets/js/firebase';
import { collection, getDocs } from 'firebase/firestore';
import BaseLayout from '@/components/BaseLayout.vue';
import HeaderTemplate from '@/components/HeaderTemplate.vue';
import BookCard from '@/components/BookCard.vue';

const books = ref([]);
const highlightedBooks = ref([]);
const otherBooks = ref([]);
const isLoading = ref(true);

const fetchBooks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "books"));
    books.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    highlightedBooks.value = books.value.filter((book) => book.isHighlighted);
    otherBooks.value = books.value.filter((book) => !book.isHighlighted);

  } catch (error) {
    console.error("Erro ao buscar livros do Firestore:", error);

  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchBooks);
</script>

<style scoped>
.shelf-title {
  padding: 20px;
  color: var(--color_1);

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


.spinner {
  margin: 100px;
  color: var(--color_1);
}
</style>
