const modalOverlay = document.querySelector(".modal-overlay");
const linkDemo = document.querySelectorAll(".link-demo");

for(let link of linkDemo){
    link.addEventListener("click", function(){
        const video_id = link.getAttribute("id");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${video_id}`;
    })
}

document.querySelector(".close-model").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";

})

