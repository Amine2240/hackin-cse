const menuButton = document.querySelector(".menu")
const list = document.querySelector(".list-ul")
menuButton.addEventListener("click", ()=>{
    list.classList.toggle("active")
    
})