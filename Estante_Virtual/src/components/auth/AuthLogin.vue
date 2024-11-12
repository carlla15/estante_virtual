<template>
  <form>
    <div>
      <i class="fa-solid fa-book-bookmark"></i>
      <span class="h1 fw-bold">Pratileira Inteligente</span>
    </div>

    <h5>Entre na sua conta</h5>
    <div>
      <input type="email" id="loginEmail" class="form-control form-control-lg" />
      <label class="form-label" for="loginEmail">Endereço de email</label>
    </div>

    <div>
      <input type="password" id="loginPassword" class="form-control form-control-lg" />
      <label class="form-label" for="loginPassword">Senha</label>
    </div>

    <div>
      <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
    </div>

    <a href="#!">Esqueceu sua senha ?</a>
    <p>Não tem uma conta?
      <a href="#" @click="$emit('switchToRegister')">Registre-se aqui</a>
    </p>
  </form>
</template>

<style scoped>
form {

  div {
    margin-bottom: 16px;
    padding-bottom: 4px;

    input {
      border-color: gray;
    }
  }

  i {
    font-size: 2em;
    margin-right: 10px
  }

  a {
    font-size: small;
    color: var(--color_black);
  }

  p {
    margin-top: 16px;
    color: var(--color_4);

    a {
      color: var(--color_4);
    }
  }
}
</style>