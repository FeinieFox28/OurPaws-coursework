<template>
  <footer class="footer">
    <div class="container">

      <div class="footer-section">
        <h2 class="footer-logo">OurPaws</h2>
        <p class="footer-text">
          Мы помогаем бездомным животным найти любящую семью.
        </p>
      </div>

      <div class="footer-section">
        <h3>Контакты:</h3>
        <p>+7 (777) 123-45-67</p>
        <p>ourpaws@mail.kz</p>
      </div>

      <div class="footer-section">
        <h3>Адрес:</h3>
        <p>г. Алматы</p>
        <p>ул. Добрая, 15</p>
      </div>

      <div class="footer-section">
        <h3>Мы в соцсетях:</h3>
        <div class="socials">
          <a href="#">Instagram</a>
          <a href="#">Telegram</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer{
  width: 100%;
  height: auto;
  position: absolute;
  left: 0px;
  background: linear-gradient(110deg, #5b442b, #1f1f1f);
  color:#e4b795;
}
h3, h2{
  color: #faf8f6;
}
.container{
  display: flex;
  justify-content: center;
}
.footer-section{
  padding: 10px;
}
.socials a{
  display: flex;
  justify-content: center;
  padding: 2px;
  text-decoration: none;
  color: #e4b795;
}

@media (max-width: 414px) {
  .footer{
    width: 440px;
  }
.container {
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-section {
  display: flex;
  align-items: baseline;
  width: 100%;
  height: auto;
  padding: 0;
}

.footer-logo {
  padding-left: 10px;
  font-size: 20px;
}

.footer-text {
  font-size: 14px;
}
p{
  padding-right: 15px;
}
h3 {
  padding-left: 10px;
  font-size: 16px;
  padding-right: 5px;
}

.socials {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.socials a {
  font-size: 14px;
}
}
</style>