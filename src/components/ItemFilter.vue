<script setup>
import { ref, watch } from 'vue'

const type = ref('')
const ageUnit = ref('')
const age = ref('')
const ageValue = ref('')
const emit = defineEmits(['filter'])

watch([type, ageUnit, ageValue], () => {
  emit('filter', {
    type: type.value,
    ageUnit: ageUnit.value,
    age: age.value
  })
})
</script>

<template>
  <div class="filters">

    <select v-model="type">
      <option value="">Все животные</option>
      <option value="собака">Собаки</option>
      <option value="кошка">Кошки</option>
    </select>

    <select v-model="ageUnit">
      <option value="">Возраст (любой)</option>
      <option value="months">Месяцы</option>
      <option value="years">Годы</option>
    </select>

    <input 
      v-model="ageValue" 
      type="number" 
      placeholder="Возраст"
      min="0"
    />

    <button @click="type = ''; ageUnit = ''; ageValue = ''">
      Сбросить
    </button>
    <button @click="apply">Применить</button>

  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

select, input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background: #e4b795;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
}
</style>