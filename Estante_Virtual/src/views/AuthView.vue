<template>

    <BaseLayout>
        <section class="container py-5">
            <div class="d-flex justify-content-center align-items-center">
                <div class="col col-xl-10">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-lg-5 d-none d-md-block">
                                <img src="/img/img_login.png" alt="login form" class="img-fluid h-100" />
                            </div>
                            <div class="col-lg-7 d-flex align-items-center">
                                <div class="card-body p-4 p-lg-5">
                                    <AuthLogin v-show="isLogin" @switchToRegister="isLogin = false" key="login" />
                                    <AuthRegister v-show="!isLogin" @switchToLogin="isLogin = true" key="register" />
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
import AuthLogin from '@/components/auth/AuthLogin.vue';
import AuthRegister from '@/components/auth/AuthRegister.vue';
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
    },
};
</script>

<style scoped>
section {   

    & .card {
        border-radius: 1rem;

        & img {
            border-radius: 1rem 0 0 1rem;
        }
    }
}
</style>
