const imagesContainer = document.getElementById("gallery");

const replaceAndAdd = element => {
    let arrayImages = Array.from(element)
    console.log("array", arrayImages);
};
console.log("contenedor", imagesContainer);

replaceAndAdd(imagesContainer);