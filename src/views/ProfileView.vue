<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, updateProfile, updatePassword, signOut} from "firebase/auth"

const auth = getAuth()

const user = ref(null)
const name = ref('')
const newPassword = ref('')
const showPassword = ref(false)
const message = ref('')

onMounted(() => {
    user.value = auth.currentUser
    name.value = user.value.displayName || ''
})
const changeName = async () => {
    await updateProfile(auth.currentUser, {
        displayName: name.value
    })

    user.value.displayName = name.value
}

const changePassword = async () => {
    if (newPassword.value.length < 6) {
        alert("Пароль должен быть не менее 6 символов")
        return
    }

    try {
        await updatePassword(auth.currentUser, newPassword.value)
        alert("Пароль успешно изменён")
        newPassword.value = ''
    } catch (e) {
        alert(e.message)
    }
}
const logout = async () => {
    try {
        await signOut(auth)

        window.location.href = "/"

    } catch (e) {
        alert(e.message)
    }
}
</script>

<template>
    <div class="profile">

        <div class="card">

            <h2>Личный кабинет</h2>

            <p><strong>Email:</strong> {{ user?.email }}</p>
            <p>Имя: {{ user?.displayName || 'Не указано' }}</p>
            <p><strong>Password:</strong> {{ user?.Password }}</p>

            <div class="block">
                <h3>Изменить имя</h3>
                <input v-model="name" placeholder="Ваше имя" />
                <button @click="changeName">Сохранить</button>
            </div>

            <div class="block">
                <h3>Сменить пароль</h3>

                <input v-model="newPassword" :type="showPassword ? 'text' : 'password'" placeholder="Новый пароль" />

                <button @click="showPassword = !showPassword">
                    {{ showPassword ? 'Скрыть' : 'Показать' }}
                </button>

                <button @click="changePassword">
                    Изменить пароль
                </button>
                <button @click="logout">Выйти из аккаунта</button>
            </div>

            <p class="msg">{{ message }}</p>
        </div>
    </div>
</template>

<style scoped>
.profile {
    display: flex;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 30px;
}

.card {
    width: 350px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.block {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
}

button {
    padding: 10px;
    background: #e4b795;
    border: none;
    cursor: pointer;
}

.msg {
    color: #93735a;
}
@media (max-width: 414px){
    .card{
        margin-top: 70px;
    }
}
</style>