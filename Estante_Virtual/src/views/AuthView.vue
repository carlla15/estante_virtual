<template>
    <BaseLayout>
        <section>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card" style="border-radius: 1rem;">
                            <div class="row g-0">
                                <div class="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="/img/img_login.png" alt="login form" class="img-fluid"
                                        style="border-radius: 1rem 0 0 1rem;" />
                                </div>
                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">
                                        <AuthLogin v-show="isLogin" @switchToRegister="isLogin = false" key="login" />
                                        <AuthRegister v-show="!isLogin" @switchToLogin="isLogin = true" key="register" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </BaseLayout>
</template>

<script>
import AuthLogin from '@/components/AuthLogin.vue';
import AuthRegister from '@/components/AuthRegister.vue';
import BaseLayout from '@/components/BaseLayout.vue';

export default {
    components: {
        BaseLayout,
        AuthLogin,
        AuthRegister
    },
    data() {
        return {
            isLogin: true
        };
    }
};
</script>

<style scoped>
section {
    background-color: var(--color_4);
}
</style>
