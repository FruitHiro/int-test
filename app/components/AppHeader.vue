<template>
    <header class="header">
      <div class="container">
        <NuxtLink class="logo" to="/">CarCatalog</NuxtLink>
        <UInput
            v-if="route.path === '/'"
            v-model="carsListStore.search"
            icon="i-lucide-search"
            size="md"
            variant="outline"
            placeholder="Search..."
        />
      </div>
    </header>
</template>
<script setup lang="ts">
import { useCarsListStore } from "../stores/carsListStore"

const route = useRoute();
const carsListStore = useCarsListStore()
</script>
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>
