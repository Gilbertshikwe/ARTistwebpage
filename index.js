function renderoneArt(art){
let card = document.createElement("li")
card.className = "card"
card.innerHTML = `
<img src = "${art.img}"
<div class = "content" 
<h4> ${art.title} </h4>
<p>${art.description}</p>
</div>

`
console.log(card)
document.querySelector("#artlist").appendChild(card)
}
function getAllArt(){
fetch('http://localhost:3000/artpieces')
.then(response => response.json())
.then(artpieces => artpieces.forEach(art => renderoneArt(art)))

console.log("before")}
function initialize (){
    getAllArt()
    console.log("after")
}
initialize()