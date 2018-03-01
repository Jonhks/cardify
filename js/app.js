//traer contenedor de imagenes por su id
const imagesContainer = document.getElementById("gallery");

const addTags = element => {
    //convirtiendo en array el contenedor
    const arrayImages = Array.from(imagesContainer.getElementsByTagName("img"));
    //iterar en el array para acceder a los atributos de cada indice
    arrayImages.forEach(function(img) {
        let srcImage = img.getAttribute("src");
        //console.log(srcImage);
        let altImage = img.getAttribute("alt");
        //console.log(altImage);

        //creando template para armar la estructura de figure
        let figureTemplate = `<figure><img src=${srcImage}></img><figcaption>${altImage}</figcaption></figure>`;
        //reemplazar los nodos img por el template armado, usando el atributo outerHTML
        img.outerHTML = figureTemplate;
        console.log(figureTemplate);
    });
};

addTags(imagesContainer);