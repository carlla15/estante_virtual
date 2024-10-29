<template>
  <form>
    <div class="mb-3 pb-1">
      <i class="fa-solid fa-book-bookmark"></i>
      <span class="h1 fw-bold">Pratileira Inteligente</span>
    </div>

    <h5 class="mb-3 pb-3">Crie sua conta</h5>

    <div>
      <input type="text" id="registerName" class="form-control form-control-lg" />
      <label class="form-label" for="registerName">Seu nome de usuario</label>
    </div>

    <div>
      <input type="email" id="registerEmail" class="form-control form-control-lg" />
      <label class="form-label" for="registerEmail">Endereço de email</label>
    </div>

    <div>
      <input type="password" id="registerPassword" class="form-control form-control-lg" />
      <label class="form-label" for="registerPassword">Senha</label>
    </div>

    <div>
      <input type="password" id="repeatPassword" class="form-control form-control-lg" />
      <label class="form-label" for="repeatPassword">Repita a senha</label>
    </div>

    <div>
      <button class="btn btn-dark btn-lg btn-block" type="button">Criar</button>
    </div>

    <p>Já tem uma conta?
      <a href="#!" @click="$emit('switchToLogin')">Login here</a>
    </p>
  </form>
</template>

<style scoped>
form {

  & div {
    margin-bottom: 16px;

    & input {
      border-color: gray;
    }
  }

  & p,
  a {
    color: #393f81;
  }

  & i {
    font-size: 2em;
    margin-right: 10px
  }
}
</style>