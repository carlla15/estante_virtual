<template>

    <header>
        <h1>Gerencie seus livros !</h1>
        <p>
            A estante virtual é o melhor lugar para organizar, gerenciar e compartilhar suas leituras.
            Faça seu login ou cadastre-se gratuitamente para começar agora mesmo a organizar seus livros.
        </p>

        <router-link to="/authentication" class="btn btn-primary btn-entrar" role="button">
            Entre!
        </router-link>

        <router-link to="/cadastro" class="btn btn-primary btn-cadastrar" role="button">
            Cadastre-se >>
        </router-link>
    </header>

</template>

<style scoped>
header {
    background: var(--color_black);
    padding: 40px;

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

    & .btn-cadastrar {
        background-color: var(--color_2);
    }

    & .btn-entrar:hover {
        background-color: var(--color_1_hover);
    }

    & .btn-cadastrar:hover {
        background-color: var(--color_2_hover);
    }
}
</style>