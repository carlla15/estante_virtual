<template>
    <footer>
        <h3>
            <i class="fa-solid fa-book-bookmark"></i>Pratileira Inteligente
        </h3>
        <a href="#" target="_blank">
            <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="#" target="_blank">
            <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="#" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>
        <p>&copy; 2024 Pratileira Inteligente. Todos os direitos reservados.</p>
    </footer>
</template>

<script>
</script>
<style scoped>
footer {
    padding: 100px;
    text-align: center;
    color: var(--color_white);
    background-color: var(--color_black);

    & h3 {
        margin: 10px;

        & i {
            margin-right: 10px;
        }
    }

    & p {
        margin: 20px;
    }

    & a {
        color: var(--color_white);
        margin: 10px;
    }

    & a:hover {
        color: cornflowerblue;
    }
}
</style>