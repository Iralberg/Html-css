let conteiner=document.getElementById('menu')
let MenuItem=document.getElementById('menu-itens')
conteiner.addEventListener('click',mostrar )
function mostrar(){
MenuItem.classList.toggle('hide')
}