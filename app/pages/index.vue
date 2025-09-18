<template>
  <UAlert
      v-if="carsListStore.error"
      color="warning"
      title="Failed to load the cars list."
      icon="i-lucide-message-square-warning"
  />
  <CarList
      v-else
      :list="carsListStore.filteredCars"
  />
</template>
<script setup lang="ts">
import type { CarItem } from "../types/car";
import { useCarsListStore } from "../stores/carsListStore";

const carsListStore = useCarsListStore()

if (!carsListStore.fetched) {
  const { data, error } = await useFetch<CarItem[]>('/api/carslist')

  if (data.value) {
    carsListStore.setCars(data.value)
  }

  carsListStore.error = !!error.value;
}
</script>
<style lang="scss">
</style>
