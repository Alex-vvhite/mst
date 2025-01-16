// Находим header
const header = document.querySelector('.header');

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', () => {
  // Проверяем положение прокрутки
  const scrollY = window.scrollY;

  // Если прокрутили больше 50px, затемняем header
  if (scrollY > 50) {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  } else {
    // Если прокрутка меньше 50px, делаем header прозрачным
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});

//////////////////////////БУРГЕР/////////////////////////////////////
const burgerMenu = document.querySelector('.burger_menu');
const headerMenu = document.querySelector('.header_menu');

burgerMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('active'); // Добавляем/убираем класс для меню
    burgerMenu.classList.toggle('open'); // Меняем вид бургер-меню
});