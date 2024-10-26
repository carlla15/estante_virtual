<template>

  <div v-if="books.length" class="book-container">
    <div v-for="book in books" :key="book.id" class="book-item">
      <span class="title">{{ book.title }}</span>
      <img :src="book.image_link || defaultImage" alt="Capa do livro">
    </div>
  </div>

  <div v-else>
    <p class="no-books-found">Nenhum livro disponível.</p>
  </div>

</template>

<script>
export default {
  name: "BookCard",
  props: {
    books: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      defaultImage: "/img/bookImg.png",
    };
  },
};
</script>

<style scoped>
.book-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & .book-item {
    position: relative;
    margin: 20px;
    border: 1px solid red;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.74);

    & .title {
      font-size: 1.2em;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--color_white);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    & img {
      width: 180px;
      height: 250px;
      object-fit: cover;
      transition: 0.3s;
    }

    &:hover .title {
      opacity: 1;
    }

    &:hover img {
      filter: brightness(40%) blur(2px);
    }
  }
}

.no-books-found {
  margin: 30px;
}
</style>