<template>
  <UApp>
    <AppHeader />
    <USeparator />
    <div class="content">
      <div class="container">
        <NuxtLoadingIndicator />
        <NuxtPage />
      </div>
    </div>
  </UApp>
</template>
<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
</script>
<style lang="scss">
</style>
