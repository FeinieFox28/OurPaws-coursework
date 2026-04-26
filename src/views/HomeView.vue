<script setup>
import ItemList from '../components/ItemList.vue'
</script>

<template>
    <div class="home">

        <section class="hero">
            <img src="/src/assets/shuba-dog.png" alt="" />
            <div class="hero-text">
                <h1>Помоги найти дом</h1>
                <p>
                    Мы — приют для животных, где каждый хвостик ждёт свою семью.
                </p>
            </div>
        </section>

        <section class="about">
            <img src="/src/assets/cat-dog.png" alt="" />
            <div class="about-text">
                <h2>О нас</h2>
                <p>
                    Наш приют заботится о бездомных животных, лечит их, кормит и помогает
                    найти любящих хозяев. Каждый день мы спасаем жизни и дарим шанс на счастье.
                </p>
            </div>
        </section>

        <section class="animals">
            <h2>Наши животные</h2>

            <ItemList :limit="3" />

        </section>

        <section class="help">
            <h2>Как вы можете помочь?</h2>

            <div class="help-cards">
                <div class="card">
                    <img src="/src/assets/pet-food.png" alt="" />
                    <p>Pet food</p>
                </div>
                <div class="card">
                    <img src="/src/assets/pet-toys.png" alt="" />
                    <p>Pet Toys</p>
                </div>
                <div class="card">
                    <img src="/src/assets/groom-items.png" alt="" />
                    <p>Grooming items</p>
                </div>
                <div class="card">
                    <img src="/src/assets/carrying.png" alt="" />
                    <p>Carrying</p>
                </div>
                <div class="card">
                    <img src="/src/assets/sleep-area.png" alt="" />
                    <p>Sleeping area</p>
                </div>
            </div>
        </section>

        <section class="donat">
            <img src="/src/assets/litle-dog.png" alt="">
            <div class="donat-text">
                <h2>Поддержите наш приют</h2>
                <p>
                    Наш приют существует благодаря помощи неравнодушных людей.
                    Каждый день мы заботимся о животных, которым нужна еда, лечение и тепло.
                </p>
                <div class="donat-number">
                    <p>7535 2748 7697 0674 7544</p>
                    <img src="/src/assets/bank-card.png" alt="">
                </div>
                <p>
                    Даже небольшое пожертвование помогает обеспечить корм,
                    оплатить ветеринарную помощь и подарить шанс на новую жизнь.
                </p>
            </div>
        </section>
    </div>
</template>

<style scoped>
.home {
    padding: 20px;
}

.hero {
    width: 110%;
    height: 400px;
    margin-left: -30px;
    background: linear-gradient(437deg, #5e472f, #1f1f1f, #1d1c1c);
    color: #e4b795;
}

.hero-text {
    display: flex;
    width: 600px;
    height: 300px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.hero img {
    position: absolute;
    right: 0;
    height: 400px;
    width: 300px;
}


.about {
    height: 300px;
    display: flex;
    justify-content: center;
}

.about img {
    height: 300px;
}

.about .about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
}

.animals h2 {
    text-align: center;
    margin-bottom: 20px;
}

.help {
    text-align: center;
}

.help-cards {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-end;
}

.help-cards img {
    width: 40px;
}

.donat {
    height: 250px;
    gap: 30px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.donat-text {
    width: 600px;
}

.donat img {
    height: 200px;
}

.donat-number {
    background-color: #e4b795;
    border-radius: 5px;
    height: 30px;
    width: 240px;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #553f2e;
}

.donat-number img {
    height: 30px;
}

@media (max-width: 414px) {
    .home {
        margin-top: 80px;
        padding: 10px;
    }
    .hero {
        width: 414px;
        margin-left: -18px;
        height: auto;
        padding: 20px 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
    }
    .hero img {
        position:relative;
        left: -10px;
        bottom: -20px;
        width: 150px;
        height: auto;
    }
    .hero-text {
        position: relative;
        left: -8px;
        width: 100%;
        height: auto;
    }
    .about {
        flex-direction: column;
        align-items: center;
        height: auto;
        text-align: center;
        gap: 10px;
    }
    .about img {
        width: 250px;
        height: auto;
    }
    .about .about-text {
        width: 100%;
    }
    .animals h2 {
        font-size: 20px;
    }
    .help-cards {
        gap: 5px;
        display: flex;
        align-items: center;
    }
    .help-cards .card {
        width: 80px;
    }
    .help-cards img {
        width: 30px;
    }
    .donat {
        flex-direction: column-reverse;
        align-items: center;
        height: auto;
        text-align: center;
        gap: 15px;
    }
    .donat img{
        width: 230px;
        height: auto;
    }
    .donat-number img {
        width: 50px;
        height: auto;
    }
    .donat-text {
        
        width: 100%;
    }
    .donat-number {
        width: 100%;
        max-width: 250px;
        margin: 0 auto;
    }
}
</style>