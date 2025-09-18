<template>
  <div class="car-list">
    <CarListItem
      v-for="car in list"
      :key="car.id"
      :car="car"
    />
  </div>
</template>

<script setup lang="ts">
import type { CarItem } from "../../../types/car"

const props = defineProps<{
  list: CarItem[]
}>()
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
