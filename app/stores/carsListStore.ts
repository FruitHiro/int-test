import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { CarItem } from "../types/car"

export const useCarsListStore = defineStore('cars list', () => {
  const cars = ref<CarItem[]>([])
  const fetched = ref(false)
  const search = ref('');
  const error = ref(false);

  const filteredCars = computed(() => {
    return cars.value.filter(item => {
      if (search.value === '') {
        return true
      } else {
        return item.make.toLowerCase().includes(search.value.toLowerCase()) ||
            item.model.toLowerCase().includes(search.value.toLowerCase())
      }
    })
  })


  function setCars(data: CarItem[]) {
    cars.value = data
    fetched.value = true
  }

  return {
    cars,
    filteredCars,
    search,
    fetched,
    setCars,
    error
  }
})
