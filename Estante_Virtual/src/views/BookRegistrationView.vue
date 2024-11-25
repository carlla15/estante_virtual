<script setup>
import { ref } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue';

const fileInput = ref(null);
const imagePreview = ref('/img/bookImg.png')

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

const triggerFileInput = () => {
    fileInput.value.click();
}

</script>

<template>
    <BaseLayout>
        <section class="container">
            <span><strong>Cadastrar livros</strong></span>
            <div class="upload-div">
                <img :src="imagePreview" class="imgdefault" alt="Capa do Livro" @click="triggerFileInput">

                <input class="input-upload" ref="fileInput" type="file" name="capa-upload"
                    accept="image/png, image/jpeg" @change="handleFileChange">
            </div>

            <div class="form-div">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Título">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Categoria(s)">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Descrição" rows="4"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Editora">
                    </div>
                    <div class="form-group d-flex">
                        <input type="number" class="form-control me-5" id="exampleFormControlInput1" placeholder="Número de Paginas">
                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Ano de Publicação">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Idioma">
                    </div>
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
    }

    .input-upload {
        display: none;
    }

    .form-group {
        margin: 30px;
    }
}
</style>