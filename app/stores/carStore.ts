import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { CarInfo } from "../types/car"

export const useCarStore = defineStore('car',
  () => {
    const carInfo = ref<CarInfo|null>(null)
    const error = ref(false)

    const carName = computed(() => carInfo.value ? `${carInfo.value.make} ${carInfo.value.model}` : '')

    const carInfoOrder = ['make', 'model', 'submodel', 'year', 'description']

    function setCarInfo(data: CarInfo) {
      carInfo.value = data
    }

    return {
      carInfo,
      carInfoOrder,
      carName,
      setCarInfo,
      error
    }
  },
  {
    persist: true,
  }
)
