// function loadPage () {
//   var containerGallery = document.getElementById("gallery");
//   var arrayOfImage = Array.from(containerGallery.getElementsByTagName("img"));
//   var data = getData(arrayOfImage);
//   removeGallery(containerGallery, arrayOfImage);
//   createElementsGallery(data, containerGallery);
  
//   // console.log(arrayOfImage);
// }

// function getData (arrayOfImage) {
//   var newData = arrayOfImage.map(function(item){
//   var altImg = item.alt;
//   var srcImg = item.src;

//   var obj = {
//     src : srcImg,
//     alt : altImg
//   }
//   // console.log(obj);
//   return obj;
//   });
//   console.log(newData);
//   return newData;
// }

// function removeGallery (containerGallery, arrayOfImage) {
//   // containerGallery.innerHTML = " ";
//   arrayOfImage.forEach(function(item){
//     containerGallery.removeChild(item)    
//   })
// }

// function createElementsGallery (data, containerGallery) {
//   // console.log(data);
//   data.forEach(function(item){
//     var figure = document.createElement("figure");
//     var img = document.createElement("img");
//     var figcaption = document.createElement("figcaption");

//     img.src = item.src;
//     figcaption.innerText = item.alt;    
    
//     figure.appendChild(img);
//     figure.appendChild(figcaption);
//     containerGallery.appendChild(figure);
//   })
  
// }

// loadPage();



// ----------------------------ES6-------------------------


loadPage = () => {
  let containerGallery = document.getElementById("gallery");
  let arrayOfImage = Array.from(containerGallery.getElementsByTagName("img"));
  let data = getData(arrayOfImage);
  removeGallery(containerGallery, arrayOfImage);
  createElementsGallery(data, containerGallery);
// console.log(arrayOfImage);
} 

getData = arrayOfImage => {
  let newData = arrayOfImage.map(item =>{
    let altImg = item.alt;
    let srcImg = item.src;
    const obj = {
      src: srcImg,
      alt: altImg
    }
    return obj;
  })
  return newData;
}

removeGallery = (containerGallery, arrayOfImage) => {
  arrayOfImage.map(item=>{
    containerGallery.removeChild(item);
  })
}

// createElementsGallery = (data, containerGallery) => {
//   data.forEach(item => {
//     let figure = document.createElement("figure");
//     let img = document.createElement("img");
//     let figcaption = document.createElement("figcaption");

//     img.src = item.src;
//     figcaption.innerHTML = item.alt;

//     figure.appendChild(img);
//     figure.appendChild(figcaption);
//     containerGallery.appendChild(figure);
//   })
// }

createElementsGallery = (data, containerGallery) => {
let output = ' '; 
  data.forEach(item=>{
    output +=
    `<figure>
    <img src = "${item.src}">
    <figcaption>${item.alt}</figcaption>
  </figure>`
  })
  console.log(output);
  containerGallery.innerHTML = output;
}

loadPage();