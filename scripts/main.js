// const burger = document.querySelector('.burger')
// const menu = document.querySelector('.header__right_menu')
// const body = document.querySelector('body')

// burger.addEventListener('click', () => {
//   menu.classList.toggle('_active');
//   burger.classList.toggle('_active');
// });

// const menuLinks = document.querySelectorAll(".header__right_menu a");

// menuLinks.addEventListener('click',()=>{
//   menu.classList.remove('_active');
//   burger.classList.remove('_active');
// })
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".header__right_menu");
    const links = document.querySelectorAll(".header__right_menu a");

    // Открытие/закрытие меню по бургеру
    burger.addEventListener("click", () => {
        burger.classList.toggle("_active");
        menu.classList.toggle("_active");
    });

    // Закрытие меню при клике по ссылке
    links.forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.remove("_active");
            menu.classList.remove("_active");
        });
    });
});
