<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const auth = getAuth()
const router = useRouter()

const email = ref('')
const password = ref('')
const name = ref('')
const mode = ref('login')
const message = ref('')

const handleAuth = async () => {
  message.value = ''

  try {
    if (mode.value === 'register') {
      await createUserWithEmailAndPassword(auth, email.value, password.value)
      message.value = "Регистрация успешна"
    } else {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      message.value = "Вход выполнен"
    }

    router.push('/')

  } catch (e) {
    message.value = e.message
  }
}
</script>

<template>
  <div class="auth-page">

    <div class="auth-card">

      <h2 v-if="mode === 'login'">Вход</h2>
      <h2 v-else>Регистрация</h2>

      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Пароль" />
      <input v-model="name" type="name" placeholder="Имя" />

      <button @click="handleAuth">
        {{ mode === 'login' ? 'Войти' : 'Зарегистрироваться' }}
      </button>

      <p class="switch" @click="mode = mode === 'login' ? 'register' : 'login'">
        {{ mode === 'login' ? 'Нет аккаунта? Регистрация' : 'Уже есть аккаунт? Войти' }}
      </p>

      <p class="msg">{{ message }}</p>

    </div>

  </div>
</template>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.auth-card {
  width: 320px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 17px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background: #e4b795;
  color: #553f2e;
  border: none;
  cursor: pointer;
}

.switch {
  color: #553f2e;
  cursor: pointer;
  font-size: 18px;
  font-weight: 550;
}

.msg {
  font-size: 17px;
  color: #93735a;
}
</style>