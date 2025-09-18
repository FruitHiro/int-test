<template>
  <UAlert
      v-if="carsListStore.error"
      color="warning"
      title="Failed to load the cars list."
      icon="i-lucide-message-square-warning"
  />
  <div
      v-else
      class="car-list"
  >
    <CarCard
      v-for="car in carsListStore.filteredCars"
      :key="car.id"
      :car="car"
    />
  </div>
</template>

<script setup lang="ts">
import CarCard from "./CarCard.vue"
import type { CarItem } from "../../types/car"
import { useCarsListStore} from "../../stores/carsListStore";

const carsListStore = useCarsListStore()

if (!carsListStore.fetched) {
  const { data, error } = await useFetch<CarItem[]>('/api/carslist')

  if (data.value) {
    carsListStore.setCars(data.value)
  }

  carsListStore.error = !!error.value;
}
</script>

<style scoped lang="scss">
.car-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
