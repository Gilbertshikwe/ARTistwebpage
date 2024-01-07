//add  event listeners
document.querySelector("#art-form"),addEventListener("submit",handleSubmit)

//event handlers
function handleSubmit(e){
    e.preventDefault();
    let artObj = {
        title: e.target.title.value,
        img: e.target.displayimg.value,
        description: e.target.description.value,
       
    }
renderoneArt(artObj)
postArt(artObj)
}



function renderoneArt(art){
let card = document.createElement("li")
card.className = "card"
card.innerHTML = `
<img src = "${art.img}"
<div class = "content" 
<h4> ${art.title} </h4>
<p>${art.description}</p>
</div>
<div>
<button>Donate to Artist</button>
</div>

`
let editbutton = document.createElement("button")
editbutton.className = "button-warning"
editbutton.textContent = "Edit Post"
console.log(card)
console.log(editbutton)
document.querySelector("#artlist").appendChild(card)
card.appendChild(editbutton)

}


function getAllArt(){
fetch('http://localhost:3000/artpieces')
.then(response => response.json())
.then(artpieces => artpieces.forEach(art => renderoneArt(art)))

console.log("before")}

function postArt(artObj){
    fetch('http://localhost:3000/artpieces',{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(artObj)
    })
    .then(response => response.json())
    .then(art => console.log(art))
}

function initialize (){
    getAllArt()
    console.log("after")
}
initialize()