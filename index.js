//add  event listeners
let formSubmit = document.querySelector("#art-form")

//event handlers
formSubmit.addEventListener("submit",(e)=>{
    e.preventDefault();
    let artObj = {
        title: e.target.title.value,
        img: e.target.displayimg.value,
        description: e.target.description.value,
       
    }
formSubmit.reset()
renderoneArt(artObj)
postArt(artObj)
})



function renderoneArt(art){
let card = document.createElement("li")
card.className = "card"
card.innerHTML = `
<img src = "${art.img}"
<div class = "content" 
<h4> ${art.title} </h4>
<p>${art.description}</p>
<p>
</p>
</div>
<div>
<button id= "donate">Donate to Artist</button>
</div>

`
let editbutton = document.createElement("button")
editbutton.className = "button-warning"
editbutton.textContent = "Edit Post"
console.log(card)
console.log(editbutton)
/*PATCH request
card.querySelector("#donate").addEventListener("click",()=>
card.querySelector("span").textContent = art.donation,
updateDonation(art)
)*/


document.querySelector("#artlist").appendChild(card)
card.appendChild(editbutton)
}

//POST request
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
/*//PATCH request using FETCH
function updateDonation(artObj){
    fetch(`http://localhost:3000/artpieces/${artObj.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(artObj),
})
    .then(response => response.json())
    .then(art => console.log(art))
}*/


function initialize (){
    getAllArt()
    console.log("after")
}
initialize()