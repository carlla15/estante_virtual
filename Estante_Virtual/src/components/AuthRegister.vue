<template>
  <form>
    <div class="d-flex align-items-center mb-3 pb-1">
      <i class="fa-solid fa-book-bookmark"></i>
      <span class="h1 fw-bold mb-0">Pratileira Inteligente</span>
    </div>

    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Crie sua conta</h5>

    <div class="form-outline mb-4">
      <input type="text" id="registerName" class="form-control form-control-lg" />
      <label class="form-label" for="registerName">Seu nome</label>
    </div>

    <div class="form-outline mb-4">
      <input type="email" id="registerEmail" class="form-control form-control-lg" />
      <label class="form-label" for="registerEmail">Endereço de email</label>
    </div>

    <div class="form-outline mb-4">
      <input type="password" id="registerPassword" class="form-control form-control-lg" />
      <label class="form-label" for="registerPassword">Senha</label>
    </div>

    <div class="form-outline mb-4">
      <input type="password" id="repeatPassword" class="form-control form-control-lg" />
      <label class="form-label" for="repeatPassword">Repita a senha</label>
    </div>

    <div class="pt-1 mb-4">
      <button class="btn btn-dark btn-lg btn-block" type="button">Registrar</button>
    </div>

    <p class="mb-5 pb-lg-2" style="color: #393f81;">Já tem uma conta?
      <a href="#!" style="color: #393f81;" @click="$emit('switchToLogin')">Login here</a>
    </p>
  </form>
</template>

<style scoped>
form {
  & i {
    font-size: 2em;
    margin-right: 10px
  }
}
</style>