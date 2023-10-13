let submitButton = document.getElementById("submit-button");
let commentInput = document.getElementById("comment-input");
let commentsContainer = document.getElementById("comments-container");

submitButton.addEventListener("click", function() {
  let comment = commentInput.value;
  let commentElement = document.createElement("div");
  commentElement.innerHTML = comment;
  commentsContainer.appendChild(commentElement);
  commentElement.classList.add("comment")
  commentInput.value = "";
});

let btnCerrarModal=document.querySelector("#btn-cerrar-modal")
let btnAbrirModal=document.querySelector("#btn-abrir-modal")
let modal=document.querySelector("#modal")

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})
btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})
// const sr = ScrollReveal({
//   distance:"150px", 
//   duration:1500,
//   reset:true
// })
// sr.reveal(".headerFauna",{delay:500,origin:"right"})
const sr = ScrollReveal({
  distance: '165px',
  duration: 750,
  reset:true
})
const sr2 = ScrollReveal({
  distance: '605px',
  duration: 1600,
  reset:false
})
// sr.reveal('footer',{delay:100, origin:'bottom'});
sr2.reveal('.miron',{delay:700, origin:'right'});
sr.reveal('.faunaOpciones',{delay:100, origin:'bottom'});