const addBtn = document.querySelector('#add-btn')
const modulePopup = document.querySelector('#add-popup')

addBtn.addEventListener('click', function() {
    modulePopup.classList.toggle("active")
    
})