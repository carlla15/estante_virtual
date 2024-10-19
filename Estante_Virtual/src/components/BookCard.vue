<template>
    <div class="book-container">
        <span class="titulo"> Titulo do livro</span>
        <img src="../../public/img/bookImg.png" alt="Capa do livro">
    </div>
</template>

<style scoped>
.book-container {
    position: relative;
    display: inline-block;

    & img {
        width: 200px;
        height: 300px;
        object-fit: cover;
        margin: 20px;
        display: block;
        transition: 0.3s;
    }

    & .titulo {
        font-size: 1.5em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--color_white);
        opacity: 0;
        transition: opacity 0.3s ease;
        /*Garante que o titulo fiquem em cima da imagem e não seja aplicado pelo blur*/
        z-index: 1;
    }

    &:hover .titulo {
        opacity: 1;
    }

    &:hover img {
        filter: blur(2px);
    }
}
</style>