const addBtn = document.querySelector('#add-btn')
const closeBtn = document.querySelector('#close-btn')
const modulePopup = document.querySelector('#add-popup')

addBtn.addEventListener('click', function() {
    modulePopup.classList.add("active")
})
closeBtn.addEventListener('click', function() {
    modulePopup.classList.remove("active")
})

