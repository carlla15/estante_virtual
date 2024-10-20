<template>
    <div v-if="books.length" class="book-container">
        <div v-for="book in books" :key="book.id" class="book-item">
            <span class="titulo">{{ book.title }}</span>
            <img :src="book.image_link" alt="Capa do livro">
        </div>
    </div>
    <div v-else>
        <p>Nenhum livro disponível.</p>
    </div>
</template>

<script>
import { db } from '../assets/js/firebase';  // Importa a instância do Firestore
import { collection, getDocs } from 'firebase/firestore';

export default {
    data() {
        return {
            books: [],
        };
    },
    async created() {
        try {
            const querySnapshot = await getDocs(collection(db, "books"));  // Pega todos os livros da coleção "books"
            querySnapshot.forEach((doc) => {
                this.books.push({ id: doc.id, ...doc.data() });  // Adiciona os dados dos livros ao array "books"
            });
        } catch (error) {
            console.error("Erro ao buscar livros do Firestore:", error);
        }
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

        & .titulo {
            font-size: 1.5em;
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

        &:hover .titulo {
            opacity: 1;
        }

        &:hover img {
            filter: brightness(40%) blur(2px);
        }
    }
}
</style>