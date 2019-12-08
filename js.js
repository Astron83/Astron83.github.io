console.log("plik zewnętrzny");
function init(){
document.querySelectorAll(".school-title").forEach(item => item.addEventListener("click",showDescription ));
}
function showDescription(event){
const parent = event.path[1];
parent.classList.toggle("active");
}
window.addEventListener("load", init);