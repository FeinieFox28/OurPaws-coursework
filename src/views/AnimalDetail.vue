<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getFirestore, doc, getDoc } from "firebase/firestore"

const db = getFirestore()
const route = useRoute()
const animal = ref(null)
const loading = ref(true)

onMounted(async () => {
    const id = route.params.id
    const docRef = doc(db, "animals", id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        animal.value = docSnap.data()
    }
    loading.value = false
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
</script>
<template>
    <div class="animal-page">
        <p v-if="loading">Загрузка...</p>
        <div v-else-if="animal">
            
            <div class="info">
                <img :src="animal.image" alt="animal" />
                <div class="text">
                    <h1>{{ animal.name }}</h1>
                    <p><b>Описание:</b> {{ animal.description }}</p>
                    <p><b>Возраст:</b> {{ formatAge(animal.age, animal.ageUnit) }}</p>
                </div>
            </div>
            <button @click="$router.back()">Назад</button>
        </div>
    </div>
</template>

<style scoped>
.animal-page {
    display: flex;
    justify-content: center;
    margin-top: 110px;
}

.info {
    width: 700px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    gap: 20px;
    padding: 15px;
}

img {
    width: 40%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 60%;
}

.text p {
    margin: 0;
    line-height: 1.5;
    font-size: 16px;
}

.animal-page button {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #e4b795;
    border: 0;
    width: 100px;
    height: 20px;
    border-radius: 4px;
    color: #553f2e;
}
@media (max-width: 414px) {

.animal-page {
  margin-top: 130px;
  padding: 0px;
}

.info {
  flex-direction: column;
  width: 400px;
}

img {
  width: 100%;
  object-fit: cover;
}

.text {
  width: 100%;
  gap: 8px;
}

.text h1 {
  font-size: 20px;
  text-align: center;
}

.text p {
  font-size: 14px;
  text-align: left;
}

.animal-page button {
  width: 100px;
  height: 30px;
  font-size: 14px;
  margin-left: 15px;
}
}
</style>