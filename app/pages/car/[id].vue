<template>
  <UAlert
      v-if="carStore.error"
      color="warning"
      title="Failed to load the cars list."
      icon="i-lucide-message-square-warning"
  />
  <div
      v-else-if="carStore.carInfo"
      class="car-page"
  >
    <div class="car-page__content">
      <CarCard
        :title="carStore.carName"
        :car="carStore.carInfo"
        :order="carStore.carInfoOrder"
      />
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
