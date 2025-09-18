<template>
  <div class="car-card card">
    <div class="car-card__info">
      <UIcon name="i-lucide-car" class="size-5" />
      <NuxtLink :to="carLink">{{ car.make }} {{ car.model }}</NuxtLink>
    </div>
    <div class="car-card__info">
      <UIcon name="i-lucide-calendar" class="size-5" />
      <p>{{ car.year }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import type { CarItem } from "../../types/car"

const props = defineProps<{
  car: CarItem
}>()

const carLink = computed(() => `/car/${props.car.id}`)
</script>

<style scoped lang="scss">
.car-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  &__info {
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: start;
    width: 100%;
  }
}
</style>
