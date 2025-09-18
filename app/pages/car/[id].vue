<template>
  <div
      v-if="carStore.error"
      class="error"
  >
    <p>Failed to load the cars list.</p>
  </div>
  <div
      v-else-if="carStore.carInfo"
      class="car-page"
  >
    <div class="car-page__content">
      <div class="car-page__card card">
        <h1>{{ carStore.carName }}</h1>
        <p class="car-page__info">
          <span>Make:</span>
          <span>{{ carStore.carInfo.make }}</span>
        </p>
        <p class="car-page__info">
          <span>Model:</span>
          <span>{{ carStore.carInfo.model }}</span>
        </p>
        <p class="car-page__info">
          <span>Submodel:</span>
          <span>{{ carStore.carInfo.submodel }}</span>
        </p>
        <p class="car-page__info">
          <span>Year:</span>
          <span>{{ carStore.carInfo.year }}</span>
        </p>
        <p class="car-page__info">
          <span>Description:</span>
          <span>{{ carStore.carInfo.description }}</span>
        </p>
      </div>
    </div>
    <div class="car-page__content content_image">
      <div class="car-page__card card">
        <NuxtImg
            class="car-page__image"
            :src="carStore.carInfo.image"
            :alt="carStore.carName"
            placeholder="/car-placeholder.webp"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CarInfo } from "../../types/car"
import { useCarStore } from "../../stores/carStore"

const route = useRoute()

const carStore = useCarStore()

if (!carStore.carInfo) {
  const { data, error } = await useFetch<CarInfo>('/api/car?id=' + route.params.id)

  if (data.value) {
    carStore.setCarInfo(data.value)
  }

  carStore.error = !!error.value;
}
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
