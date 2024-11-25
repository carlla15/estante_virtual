<script setup>
import { ref } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue';

import DAOService from '@/services/DAOService';

const bookService = new DAOService('books');

const fileInput = ref(null);
const imagePreview = ref('/img/bookImg.png')

const book = ref({
    title: '',
    category: '',
    description: '',
    publisher: '',
    numPages: '',
    publicationYear: '',
    language: '',
    cover: imagePreview.value
});
const addBook =  async () =>   {
    const id = await bookService.insert(book.value);
    alert('Livro Cadastrado')
    console.log(id)
}

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target.result;
            book.value.cover = e.target.result
        };
        reader.readAsDataURL(file);
    }
};

const triggerFileInput = () => {
    fileInput.value.click();
}

const clickUploadButton = () => {
    console.log(book.value)
    addBook()
}
</script>

<template>
    <BaseLayout>
        <section class="container">
            <h2 class="mb-4"><i class="fa-solid fa-paperclip me-3"></i>Cadastrar livros</h2>
            <div class="upload-div">
                <img :src="imagePreview" class="imgdefault" alt="Capa do Livro" @click="triggerFileInput">

                <input class="input-upload" ref="fileInput" type="file" name="capa-upload"
                    accept="image/png, image/jpeg" @change="handleFileChange">
            </div>

            <div class="form-div">
                <form class="mt-5">
                    <div class="form-group">
                        <input type="text" v-model="book.title" class="form-control" placeholder="Título">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="book.category" placeholder="Categoria(s)">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" v-model="book.description" placeholder="Descrição"
                            rows="4"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="book.publisher" class="form-control" placeholder="Editora">
                    </div>
                    <div class="form-group d-flex">
                        <input type="number" v-model="book.numPages" class="form-control me-5"
                            placeholder="Número de Paginas">
                        <input type="number" v-model="book.publicationYear" class="form-control"
                            placeholder="Ano de Publicação">
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="book.language" class="form-control" placeholder="Idioma">
                    </div>
                    <button @click="clickUploadButton()" type="button" class="btn btn-primary btn-lg custom-btn">Cadastrar</button>
                </form>
            </div>
        </section>
    </BaseLayout>
</template>
<style scoped>
section {
    margin: 30px;
    width: 80%;
    text-align: center;
    margin: auto;

    .imgdefault {
        height: 350px;
        width: 250px;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }
    }

    .input-upload {
        display: none;
    }

    .form-group {
        margin: 30px;
    }

    .custom-btn {
        margin: 30px;
        background-color: var(--color_1);
        transition: all 0.3s ease;

        &:hover {
            background-color: var(--color_1_hover);
            transform: scale(1.1);
        }
    }
}
</style>