const nav= document.querySelector('#nav');
const abrir= document.querySelector('#abrir');
const cerrar= document.querySelector('#cerrar');
const section= document.querySelectorAll('#section');


abrir.addEventListener('click',() =>{
    nav.classList.add("visible");
    document.getElementById("section").style.display="none";
})

cerrar.addEventListener('click',() =>{
    nav.classList.remove("visible");
    document.getElementById("section").style.display="block";
})

// abrir.addEventListener("scroll", function(){
//     nav.classList.toggle("abajo", nav.scrollY>0);
// })