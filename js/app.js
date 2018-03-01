// Escribe tu código aqui----


const obteniendoElElemento = document.getElementById("gallery")
console.log(Array.from(obteniendoElElemento));

let objImg = {
    'src':'',
    'alt':''
};
console.log(obteniendoElElemento)

const nombreDeTuFuncion = element =>{
    let arrayImages = Array.from(obteniendoElElemento.getElementsByTagName("img"));
    console.log(arrayImages)

    // const arrayGallery = Array.from(document.getElementsByTagName('img'))

    arrayImages.forEach(img => {
    // console.log(img.src)
        objImg = {
            'src': img.src,
            'alt': img.alt
        };
        console.log(objImg)

        let figureTemplate = `<figure><img src=${objImg.src}></img><figcaption>${objImg.alt}</figcaption></figure>`;
        //reemplazar los nodos img por el template armado, usando el atributo outerHTML
        img.outerHTML = figureTemplate;
    });

};

nombreDeTuFuncion();