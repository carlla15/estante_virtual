<template>
  <nav class="navbar navbar-expand-lg custom-nav">
    <div class="container-fluid">
      <router-link class="nav-link navbar-brand" to="/">
        <i class="fa-solid fa-book-bookmark"></i>
        <span>Pratileira Inteligente</span>
      </router-link>
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
            <router-link class="nav-link" to="/authentication">Entre</router-link>
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
export default {

}
</script>

<style scoped>
.custom-nav {
  background-color: var(--color_1);
  font-weight: bold;
  padding: 10px;

  & i {
    margin-right: 10px;
    font-size: 1.5em;
  }

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