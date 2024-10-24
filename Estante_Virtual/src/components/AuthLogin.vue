<template>
  <form>
    <div class="d-flex align-items-center mb-3 pb-1">
      <i class="fa-solid fa-book-bookmark"></i>
      <span class="h1 fw-bold mb-0">Pratileira Inteligente</span>
    </div>

    <h5 class="fw-normal mb-3 pb-3">Entre na sua conta</h5>
    <div class="form-outline mb-4">
      <input type="email" id="loginEmail" class="form-control form-control-lg" />
      <label class="form-label" for="loginEmail">Endereço de email</label>
    </div>

    <div class="form-outline mb-4">
      <input type="password" id="loginPassword" class="form-control form-control-lg" />
      <label class="form-label" for="loginPassword">Senha</label>
    </div>

    <div class="pt-1 mb-4">
      <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
    </div>

    <a class="small text-muted" href="#!">Esqueceu sua senha ?</a>
    <p class="mb-5 pb-lg-2" style="color: #393f81;">Não tem uma conta?
      <a href="#!" style="color: #393f81;" @click="$emit('switchToRegister')">Registre-se aqui</a>
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