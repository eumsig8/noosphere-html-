// Функция для загрузки и вставки контента из HTML файлов
async function loadContent() {
  // Загружаем хедер
  const header = await fetch('header.html');
  document.getElementById('header').innerHTML = await header.text();

  // После вставки хедера подключаем события
  initHeaderEvents();

  // Загружаем футер
  const footer = await fetch('footer.html');
  document.getElementById('footer').innerHTML = await footer.text();
}

// Функция для подключения событий в хедере
function initHeaderEvents() {
  // Скролл-эффект
  window.addEventListener("scroll", function(){
    if (window.scrollY > 20) {
      document.querySelector('.navbar-grid').classList.add("sticky");
    } else {
      document.querySelector('.navbar-grid').classList.remove("sticky");
    }
  });

  // Мобильное меню
  const menuBtn = document.querySelector(".menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", function() {
      document.querySelector(".navbar-grid .navbar_container").classList.toggle("active");
      this.classList.toggle("active");
      document.querySelector(".menu-btn i").classList.toggle("active");
      this.classList.toggle("active");
    });
  }
}

// Загружаем контент при загрузке страницы
loadContent();
