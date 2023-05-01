const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
const navmenu = document.getElementsByClassName("nav-manu")[0]

toggleBtn.addEventListener('click', () =>{
    navmenu.classList.toggle("active")
})



document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}

document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scroll
    -= widthItem
}


let swiper = new Swiper(".list",{
    navigation:{
        next: ".next",
        prev: ".prev"
    },
});