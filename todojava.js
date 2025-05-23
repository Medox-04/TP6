const valeur = document.getElementById("valeur")
const clique= document.getElementById("clique")
const todo = document.getElementById("todo")
clique.addEventListener("click", function(e){
    displayElement();
     valeur.value=""

})
function displayElement(){
        const li = document.createElement("li")
        li.textContent=valeur.value
        const accomplie = document.createElement("button")
        const supprimer = document.createElement("button")
        accomplie.textContent= "terminee !"
        supprimer.textContent= "supprimer"

        li.appendChild(accomplie)
        li.appendChild(supprimer)
        todo.appendChild(li)
        supprimer.addEventListener("click", function(){
            todo.removeChild(li)
        })
        accomplie.addEventListener("click", function(){
accomplie.style.backgroundColor="green"
        })
}
