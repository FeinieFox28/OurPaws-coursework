<script setup>
import { onMounted, computed, ref, watch } from 'vue'
import { useItems } from '../composables/useItems'

const props = defineProps({
  filters: Object,
  limit: Number
})

const { items, fetchItems, loading } = useItems()

onMounted(() => {
  fetchItems()
})

function formatAge(age, unit) {
  if (unit === 'months') {
    if (age === 1) return '1 месяц'
    if (age >= 2 && age <= 4) return `${age} месяца`
    return `${age} месяцев`
  }

  if (unit === 'years') {
    if (age === 1) return '1 год'
    if (age >= 2 && age <= 4) return `${age} года`
    return `${age} лет`
  }

  return age
}

const currentPage = ref(1)
const perPage = 6

const filteredData = computed(() => {
  let data = items.value

  if (props.filters?.type) {
    data = data.filter(i => i.type === props.filters.type)
  }

  if (props.filters?.ageUnit) {
    data = data.filter(i => i.ageUnit === props.filters.ageUnit)
  }

  if (props.filters?.ageValue) {
    data = data.filter(i => Number(i.age) === Number(props.filters.ageValue))
  }

  if (props.limit) {
    data = data.slice(0, props.limit)
  }

  return data
})

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredData.value.slice(start, start + perPage)
})

const totalPages = computed(() => {
  return Math.ceil(filteredData.value.length / perPage)
})

watch(() => props.filters, () => {
  currentPage.value = 1
})

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>

<template>
  <div>
    <p v-if="loading" class="loading">Загрузка...</p>

    <div v-else class="list">
      <div v-for="item in paginatedItems" :key="item.id" class="card">
        
        <div class="image">
          <img :src="item.image" />
        </div>

        <h3>{{ item.name }}</h3>

        <p>{{ formatAge(item.age, item.ageUnit) }}</p>

        <button @click="$router.push(`/animal/${item.id}`)">
          Подробнее
        </button>

      </div>
    </div>

    <div v-if="totalPages > 1" class="pagination">

      <button @click="prevPage" :disabled="currentPage === 1">
        Предыдущая
      </button>

      <span>{{ currentPage }} / {{ totalPages }}</span>

      <button @click="nextPage" :disabled="currentPage === totalPages">
        Следующая
      </button>

    </div>
  </div>
</template>

<style scoped>
.list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 0fr);
  justify-content: center;
}

.loading {
  display: flex;
  justify-content: center;
}

.card {
  width: 200px;
  height: 255px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3, p {
  height: 2px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.pagination span {
  color: #553f2e;
  font-size: 18px;
}

.pagination button {
  background-color: #e4b795;
  border: 0;
  width: 100px;
  height: 20px;
  border-radius: 4px;
  color: #553f2e;
}

.card button {
  background-color: #e4b795;
  border: 0;
  width: 100px;
  height: 20px;
  border-radius: 4px;
  color: #553f2e;
}

.image {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 155px;
}

.image img {
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
}
@media (max-width: 414px) {

.list {
  grid-template-columns: repeat(2, 1fr); /* 2 карточки в ряд */
  gap: 10px;
  padding: 0 10px;
}

.card {
  width: 100%;
  height: auto;
  padding-bottom: 10px;
}

.image {
  height: 130px;
}

h3 {
  font-size: 16px;
  margin-top: 10px;
}

p {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 18px;
}

.card button {
  width: 90%;
  height: 25px;
  font-size: 14px;
}

.pagination {
  flex-direction: row;
  gap: 10px;
}

.pagination button {
  width: 100px;
  height: 25px;
}

.pagination span {
  font-size: 16px;
}
}
</style>