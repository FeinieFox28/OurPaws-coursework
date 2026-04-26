<script setup>
import {ref} from 'vue'
import ItemList from '../components/ItemList.vue'
import ItemFilters from '../components/ItemFilter.vue'

const filters = ref({})
</script>

<template>
    <div class="animals-page">

        <section class="header">
            <h1>Наши животные</h1>
            <p>Найдите себе верного друга и подарите ему дом</p>
        </section>

        <section class="filters">
            <ItemFilters @filter="filters = $event" />
            
        </section>

        <section class="animal-list">
            <ItemList :filters="filters" />
        </section>

    </div>
</template>

<style scoped>
.animals-page {
    padding: 20px;
}

.header {
    text-align: center;
    margin-top: 50px;
}

.header h1 {
    font-size: 32px;
}

.header p {
    color: #888;
}

.filters {
    margin-bottom: 20px;
}

@media (max-width: 414px) {

    .animals-page {
        margin-top: 50px;
        padding: 10px;
    }

    .header {
        margin-top: 70px;
        padding: 0 10px;
    }

    .header h1 {
        font-size: 22px;
    }

    .header p {
        font-size: 14px;
    }

    .filters {
        margin-bottom: 15px;
    }

    .animal-list {
        margin-top: 10px;
    }
}
</style>