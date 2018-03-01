
//elementos html
let button = document.getElementById("btn");
let gallery = document.getElementById("gallery");
//
let images = document.getElementsByClassName("imagen");
console.log(images);

let arrayImg = Array.from(images);
console.log(arrayImg);

button.addEventListener("click", figure);

function figure(){
    arrayImg.forEach((element,index) =>{
        
    })
}

