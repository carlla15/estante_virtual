<template>
    <header>
        <h1>Gerencie seus livros !</h1>
        <p>
            A estante virtual é o melhor lugar para organizar, gerenciar e compartilhar suas leituras.
            Faça seu login ou cadastre-se gratuitamente para começar agora mesmo a organizar seus livros.
        </p>

        <a class="btn btn-primary btn-entrar" href="#" role="button">Entre !</a>
        <a class="btn btn-primary btn-casdastrar" href="#" role="button">Cadastre-se >></a>
    </header>
</template>

<style scoped>
header {
    background: var(--color_black);
    padding: 90px;

    & h1 {
        color: var(--color_white);
    }

    & p {
        color: var(--color_2);
    }

    & .btn-primary {
        border-color: var(--color_white);
        margin-left: 20px;
        margin-right: 20px;
    }

    & .btn-entrar {
        background-color: var(--color_1);
    }

    & .btn-casdastrar {
        background-color: var(--color_2);
    }

    & .btn-entrar:hover {
        background-color: var(--color_1_hover);
    }

    & .btn-casdastrar:hover {
        background-color: var(--color_2_hover);
    }
}
</style>