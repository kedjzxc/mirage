const menuBtn = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')
const menuList = document.querySelector('.header__list')
const menuLinks = document.querySelectorAll('.header__item-a')
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    menu.classList.toggle('active')
    menuList.classList.toggle('active')
})
menuLinks.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('active')
        menuBtn.classList.remove('active')
    })
})