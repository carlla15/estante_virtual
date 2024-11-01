<template>
  <BaseNav />

  <main>
    <slot>
      <!-- O conteúdo ficará aqui dentro -->
    </slot>
  </main>

  <BaseFooter />
</template>

<script setup>
import BaseFooter from "@/components/base_layout/BaseFooter.vue";
import BaseNav from "@/components/base_layout/BaseNav.vue";
</script>

<style scoped></style>
