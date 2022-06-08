const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

let num = 0
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})