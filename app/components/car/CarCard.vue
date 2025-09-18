<template>
  <div class="car-page__card card">
    <h1>{{ title }}</h1>
    <p class="car-page__info">
      <span>Make:</span>
      <span>{{ car.make }}</span>
    </p>
    <p class="car-page__info">
      <span>Model:</span>
      <span>{{ car.model }}</span>
    </p>
    <p class="car-page__info">
      <span>Submodel:</span>
      <span>{{ car.submodel }}</span>
    </p>
    <p class="car-page__info">
      <span>Year:</span>
      <span>{{ car.year }}</span>
    </p>
    <p class="car-page__info">
      <span>Description:</span>
      <span>{{ car.description }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { CarInfo } from "../../types/car";

const props = defineProps<{
  car: CarInfo,
  title: string
}>()
</script>

<style scoped lang="scss">
.car-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__content {
    flex: 1;
    order: 2;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: .5rem;

    span:last-child {
      text-align: right;
    }
  }

  &__image {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.content_image {
  order: 1;

  @media (min-width: 768px) {
    order: 2;
  }
}
</style>
