<script setup>
</script>

<template>
  <div class="about">
    <section class="hero">
      <h1>О нашем приюте</h1>
      <p>Мы помогаем животным найти любящую семью</p>
    </section>
    <section class="info">
      <div class="text">
        <h2>Кто мы?</h2>
        <p>
          Наш приют — это место, где животные получают заботу, лечение и шанс
          на новую жизнь. Мы принимаем бездомных кошек и собак, ухаживаем за ними
          и помогаем найти им дом.
        </p>

        <p>
          Каждый день мы кормим, лечим и социализируем животных, чтобы они были
          готовы к жизни в семье.
        </p>
      </div>

      <img src="/src/assets/cat-dog.png" alt="Приют" />
    </section>

    <section class="mission">
      <h2>Наша миссия</h2>

      <div class="cards">
        <div class="card">
          <h3>Найти дом</h3>
          <p>Помогаем каждому животному обрести семью</p>
        </div>

        <div class="card">
          <h3>Забота</h3>
          <p>Обеспечиваем лечение и питание</p>
        </div>

        <div class="card">
          <h3>Любовь</h3>
          <p>Дарим внимание и заботу каждому хвостику</p>
        </div>
      </div>
    </section>
    <section class="help">
      <h2>Как вы можете помочь?</h2>

      <ul>
        <li>Усыновить животное</li>
        <li>Поддержать приют финансово</li>
        <li>Привезти корм и вещи</li>
        <li>Стать волонтёром</li>
      </ul>
    </section>

  </div>
</template>

<style scoped>
.about {
    margin-top: 30px;
  padding: 20px;
  font-size: 18px;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 36px;
  color: #e4b795;
}
.hero p{
    font-size: 18px;
}
.info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.info img {
  width: 300px;
  border-radius: 10px;
}

.text {
  max-width: 500px;
}

.mission {
  text-align: center;
  margin-bottom: 40px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background: #553f2e;
  color: #e4b795;
  padding: 20px;
  border-radius: 12px;
  width: 200px;
  transition: 0.3s;
}

.card:hover {
  background: #e4b795;
  color: #553f2e;
  transform: translateY(-5px);
}

.help {
  text-align: center;
}

.help ul {
  list-style: none;
  padding: 0;
}

.help li {
  margin: 10px 0;
}
@media (max-width: 414px) {

.about {
  padding: 15px;
  font-size: 16px;
  margin-top: 100px;
}

.hero h1 {
  font-size: 26px;
}

.hero p {
  font-size: 16px;
}

.info {
  flex-direction: column;
  gap: 15px;
  text-align: center;
}

.info img {
  width: 100%;
  max-width: 280px;
}

.text {
  max-width: 100%;
}

.text h2 {
  font-size: 20px;
}

.text p {
  font-size: 15px;
  line-height: 1.4;
}

.mission h2 {
  font-size: 22px;
}

.cards {
  flex-direction: row;
}

.card {
  width: 150px;
  height: auto;
  padding: 5px;
}

.card h3 {
  font-size: 18px;
}

.card p {
  font-size: 14px;
}

.help h2 {
  font-size: 22px;
}

.help li {
  font-size: 15px;
}

}
</style>