<script setup>
import { ref, onMounted } from 'vue';
import { db } from '@/assets/js/firebase';
import { collection, getDocs } from 'firebase/firestore';

import BaseLayout from '@/components/BaseLayout.vue';
import BookCard from '@/components/BooksCards.vue';

const highlightedBooks = ref([]);
const otherBooks = ref([]);

const fetchBooks = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "books"));
        const books = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        highlightedBooks.value = books.filter((book) => book.isHighlighted);
        otherBooks.value = books.filter((book) => !book.isHighlighted);

    } catch (error) {
        console.error("Erro ao buscar livros:", error);
    }
};

onMounted(fetchBooks());
</script>


<template>
    <BaseLayout>
        <div class="container-bookcase">
            <div class="section-title">
                <h2> <i class="fa-solid fa-circle-check"></i> Livros Lidos</h2>
            </div>
            <section class="book-grid d-flex">
                <BookCard :books="highlightedBooks" />
            </section>

            <div class="section-title">
                <h2><i class="fa-solid fa-flag"></i> Livros na Estante</h2>
            </div>
            <section class="book-grid d-flex">
                <BookCard :books="otherBooks" />
            </section>
        </div>
    </BaseLayout>
</template>


<style scoped>
.container-bookcase {
    padding: 20px;
}

.section-title {
    padding: 20px 0;
    color: var(--color_4);
    display: flex;
    align-items: center;
    font-size: 1.5em;
}

.section-title i {
    margin-right: 10px;
}

.book-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-bottom: 40px;
}

.book-card {
    text-align: center;
    background: var(--color_2);
    padding: 10px;
    border-radius: 8px;
}

.book-cover {
    width: 100%;
    height: auto;
    max-height: 200px;
    border-radius: 5px;
}
</style>
