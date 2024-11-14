<template>
    <BaseLayout>
        <div class="conteiner-bookcase">

            <div class="section-title">
                <h2> <i class="fa-solid fa-circle-check"></i> Livros Lidos</h2>

            </div>

                <section class="book-grid">
                    <div v-for="book in readBooks" :key="book.id" class="book-card">

                    <img :src="book.coverUrl" alt="Capa do Livro" class="book-cover" />
                    
                    <p>{{ book.title }}</p>
                    </div>
                </section>

            
        </div>
  
    </BaseLayout>

</template>

<script setup>


import BaseLayout from '@/components/BaseLayout.vue';

</script>