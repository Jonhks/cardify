const imgContainer = document.querySelector("section");
//console.log(imgContainer);

const getImg = element =>{
  const images = element.querySelectorAll("img")
  const imgArr = Array.from(images);
  newElement (imgArr)
}


const newElement = array =>{
  let change = array.map((item) => {
  let newfigcaption = document.createElement("figcaption");
  newfigcaption.innerText = (item.alt);

  const newFigure = document.createElement("figure");
  newFigure.appendChild(newfigcaption);
  newFigure.appendChild(item);
  imgContainer.appendChild(newFigure);
  })

}

 getImg (imgContainer);
