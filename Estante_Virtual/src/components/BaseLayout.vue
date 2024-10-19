<template>
  <nav class="navbar navbar-expand-lg custom-nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Estante Virtual</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Buscar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Minha estante</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Entre</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main>
    <slot>
      <!-- O conteudo ficara aqui dentro-->
    </slot>
  </main>

  <footer>
    <h2>Estante Virtual</h2>
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
    <p>&copy; 2024 Estante Virtual. Todos os direitos reservados.</p>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.custom-nav {
  background-color: var(--color_1);
  font-weight: bold;

  & a {
    color: var(--color_white);
    margin-right: 50px;
    padding: 10px;
    border-radius: 8px;
  }

  & a:hover {
    background-color: var(--color_1_hover);
  }
}

footer {
  padding: 100px;
  text-align: center;
  color: var(--color_white);
  background-color: var(--color_black);

  & a {
    color: var(--color_white);
    padding: 10px;
  }

  & a:hover {
    color: cornflowerblue;
  }

  & p,
  h2 {
    margin: 20px;
  }
}
</style>