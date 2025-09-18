<template>
  <div class="car-page__card card">
    <h1 v-if="title">{{ title }}</h1>
    <p
        v-for="key in order"
        :key="key"
        class="car-page__info"
    >
      <span>{{ key }}</span>
      <span>{{ car[key as keyof CarInfo] }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { CarInfo } from "../../types/car";

const props = defineProps<{
  title?: string,
  car: CarInfo,
  order: string[],
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
