<template>
  <BaseNav />

  <main>
    <slot>
      <!-- O conteudo ficara aqui dentro-->
    </slot>
  </main>

  <BaseFooter />
</template>
<script>
import BaseFooter from "@/components/base_layout/BaseFooter.vue"
import BaseNav from "@/components/base_layout/BaseNav.vue"

export default {
  name: "BaseLayout",
  components: {
    BaseFooter,
    BaseNav
  }
}
</script>

<style scoped>
main {
  background-color: var(--color_4);
}
</style>