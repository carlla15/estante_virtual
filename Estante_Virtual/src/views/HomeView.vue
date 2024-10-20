<script setup>
import BaseLayout from '@/components/BaseLayout.vue';
import HeaderTemplate from '@/components/HeaderTemplate.vue';
import BookCard from '@/components/BookCard.vue';
</script>

<template>
  <HeaderTemplate />
  <BaseLayout>

    <div class="titulo-pratileira">
      <i class="fa-solid fa-medal"></i>
      <span>Destaques</span>
    </div>
    <section class="pratileira">
      <BookCard />
    </section>

    <div class="titulo-pratileira">
      <i class="fa-regular fa-font-awesome"></i>
      <span> Descubra outros livros</span>
    </div>
    <section class="pratileira">
      <BookCard />
    </section>

  </BaseLayout>
</template>

<style scoped>
.titulo-pratileira {
  margin: 20px;
  color: var(--color_1) ;

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
