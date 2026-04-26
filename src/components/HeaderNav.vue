<script setup>
import { ref } from 'vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth()
const user = ref(null)
onAuthStateChanged(auth, (u) => {
  user.value = u
})
</script>
<template>
    <nav>
        <router-link to="/" class="logo">OurPaws</router-link>
        <router-link to="/">Главная</router-link>
        <router-link to="/animal">Животные</router-link>
        <router-link to="/create">Добавить животное</router-link>
        <router-link to="/about">О приюте</router-link>
        <router-link v-if="!user" to="/auth">Войти</router-link>
        <router-link v-else to="/profile">Учетная запись</router-link>
    </nav>
</template>

<style scoped>
nav{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 70px;
    background: linear-gradient(110deg, #5b442b, #1f1f1f, rgb(29, 28, 28));
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e4b795;
}
.logo{
    position: absolute;
    left: 10px;
}

nav router-link{
    margin-left: 30px;
    padding: 5px;
    font-size: 19px;
}
nav a {
    font-size: 20px;
    text-decoration: none;
    color: #e4b795;
    padding: 15px;
}
@media (max-width: 414px) {
  nav {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
  }

  .logo {
    position: static;
    width: 100%;
    text-align: center;
  }

  nav a{
    font-size: 18px;
    padding: 10px;
  }
}
</style>