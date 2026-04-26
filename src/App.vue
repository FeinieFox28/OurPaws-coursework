<script setup>
import HeaderNav from './components/HeaderNav.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
    <div class="header_nav">
        <HeaderNav/>
        <router-view/>
        <AppFooter/>
    </div>
</template>
