const modulePopup = document.querySelector('#module-popup')
const grayWrapper = document.querySelector('.hero-wrapper')
const createModuleBtn = document.querySelector(".create-btn")
const closeBtn = document.querySelector('#close-btn')



createModuleBtn.addEventListener('click', function() {
    modulePopup.classList.add("active")
    grayWrapper.classList.add("active")
})
closeBtn.addEventListener('click', function() {
    modulePopup.classList.remove("active")
    grayWrapper.classList.remove("active")
})

