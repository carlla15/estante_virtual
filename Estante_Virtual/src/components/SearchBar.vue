<script setup>

</script>

<template>
    <a class="nav-link d-flex" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
        <i class="fa-solid fa-magnifying-glass"></i>Buscar
    </a>

    <div id="collapseTwo" class="collapse">
        <input class="form-control form-control-lg m-3" type="text" placeholder="Digite o título que você esta procurando ...">
    </div>
</template>

<style scoped>
a {
    color: var(--color_white);
    margin-right: 50px;
    padding: 10px;
    border-radius: 8px;
    transition: all 0.3s ease;
    width: 110px;

    &:hover {
        color: var(--color_white);
        background-color: var(--color_1_hover);
        transform: scale(1.1);
    }

    i {
        margin-right: 10px;
        font-size: 1.5em;
    }
}
</style>