window.addEventListener('scroll', ()=>{

    header=document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 0)
})


function toggleMenu() {
    menuToggle=document.querySelector('.menuToggle')
    menuToggle.classList.toggle('active')
}