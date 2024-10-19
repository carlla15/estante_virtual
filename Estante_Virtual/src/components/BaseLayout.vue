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
      <font-awesome-icon icon="fa-brands fa-facebook" />
      <p>&copy; 2024 MonitoraUna. Todos os direitos reservados.</p>
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
    }
  }
  
  footer {
    padding: 100px;
    text-align: center;
    color: var(--color_white);
    background-color: var(--color_black);
  }
  </style>