<script setup>
import { ref } from 'vue'
import { useItems } from '../composables/useItems'
import { useRouter } from 'vue-router'

const { addItem } = useItems()
const router = useRouter()

const name = ref('')
const type = ref('')
const ageYears = ref('')
const ageMonths = ref('')
const description = ref('')
const image = ref('')

const addAnimal = async () => {
    if (!name.value || !type.value) {
        alert('Заполните обязательные поля!')
        return
    }

    if (ageMonths.value > 11) {
        alert('Месяцев должно быть от 0 до 11')
        return
    }

    let age = ageYears.value || ageMonths.value
    let ageUnit = ageYears.value ? 'years' : 'months'

    const newAnimal = {
        name: name.value,
        type: type.value,
        age: Number(age),
        ageUnit,
        description: description.value,
        image: image.value,
        status: 'в приюте'
    }
    await addItem(newAnimal)

    name.value = ''
    type.value = ''
    ageYears.value = ''
    ageMonths.value = ''
    description.value = ''
    image.value = ''

    router.push('/animals')
}
</script>

<template>
    <div class="create">
        <h1>Добавить животное</h1>

        <div class="form">
            <input v-model="name" placeholder="Имя животного" />
            <input v-model="type" placeholder="Тип (кот, собака и т.д.)" />

            <input v-model="ageYears" type="number" placeholder="Возраст (годы)" />
            <input v-model="ageMonths" type="number" placeholder="Возраст (месяцы)" />

            <input v-model="image" placeholder="Ссылка на изображение" />
            <textarea v-model="description" placeholder="Описание"></textarea>

            <button @click="addAnimal">Добавить</button>
        </div>
    </div>
</template>

<style scoped>
.create {
    height: auto;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
}

input,
textarea {
    padding: 10px;
    border-radius: 8px;
    border: none;
}

button {
    padding: 10px;
    background-color: #e4b795;
    border: none;
    width: 250px;
    border-radius: 10px;
    cursor: pointer;
    color: #553f2e;
}

button:hover {
    background-color: #b08565;
}
@media (max-width: 414px) {
    .create{
        margin-top: 110px;
    }
}
</style>