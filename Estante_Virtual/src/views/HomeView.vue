<template>
  <HeaderTemplate />
  <BaseLayout>

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

  </BaseLayout>
</template>

<script>
import { db } from '../assets/js/firebase';
import { collection, getDocs } from 'firebase/firestore';
import BaseLayout from '@/components/BaseLayout.vue';
import HeaderTemplate from '@/components/HeaderTemplate.vue';
import BookCard from '@/components/BookCard.vue';

export default {
  components: { BaseLayout, HeaderTemplate, BookCard },
  data() {
    return {
      books: [],
      highlightedBooks: [],
      otherBooks: [],
    };
  },
  async created() {
    try {
      const querySnapshot = await getDocs(collection(db, "books"));
      querySnapshot.forEach((doc) => {
        const book = { id: doc.id, ...doc.data() };
        this.books.push(book);
      });

      this.highlightedBooks = this.books.filter(book => book.isHighlighted); // TUDO: Adicionar o atributo isHighlighted ao firebase
      this.otherBooks = this.books.filter(book => !book.isHighlighted);

    } catch (error) {
      console.error("Erro ao buscar livros do Firestore:", error);
    }
  },
};
</script>

<style scoped>
.shelf-title {
  margin: 20px;
  color: var(--color_1);

  & i {
    margin: 10px;
    font-size: 1.5em;
  }

  & span {
    margin-left: 10px;
    font-weight: bold;
    font-size: 1.5em;
  }
}
</style>