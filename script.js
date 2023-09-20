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