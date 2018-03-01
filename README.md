# Cardify

* **Track:** _Front-end especialización_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

Implementar una funcion de Javascript EcmaScript 6 que dado un _contenedor_ debe buscar todas las imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

## Para cumplir con el objetivo del proyecto deberas obtener el elemento con (id = "gallery") y pasarlo como parametro a la funcion principal

```
Ejemplo

const obteniendoElElemento = document.getElementById("miId")

const nombreDeTuFuncion =(obteniendoElElemento) => {
  Inicia tu proyecto...
}
```

## Flujo de trabajo

1. Debes realizar un [**fork**](https://github.com/Jonhks/cardify.git)
   de este repositorio.

2. Luego deberás **clonar** tu fork en tu máquina. Recuerda que el comando a usar
   es `git clone` y su estructura normalmente se ve así:

   ```bash
   git clone https://github.com/<nombre-de-usuario>/cardify.git
   ```

3. Crea tu propia rama y cuando tu producto esté terminado, sube tus cambios a la rama que creaste de ese repositorio y haz un pull request a tu propio master
   (puedes solicitar apoyo de tus profes para este paso).

> Nota: No olvides que es una buena práctica describir tu proyecto en este
> archivo `README.md` :smiley:.

***

# Mi readme

Investigación sobre figure y figcaption.

- FIGURE: La etiqueta <figure> especifica contenido autónomo, como ilustraciones, diagramas, fotos, listas de códigos, etc. Si bien el contenido del elemento <figure> está relacionado con el flujo principal, su posición es independiente del flujo principal, y si se elimina, no debería afectar el flujo del documento.

- FIGCAPTION: El elemento figcaption representa un título o leyenda de un fragmento de contenido (figure). Un elemento figure representa a un trozo de documento autocontenido que se usa habitualmente para encerrar imágenes, gráficos, tablas de referencia, videos, poemas, fragmentos de código, etc.

- Ejemplo de uso de ambas etiquetas:
<figure>
  <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2250&q=80" alt="Pietro De Grandi - Pragser Wildsee, Italy" />
  <figcaption>"Pietro De Grandi - Pragser Wildsee, Italy"</figcaption>
</figure>



Pseudocódigo.

1. Traer el elemento que contiene todas las imágenes, por su id que es "gallery"
2. Declarar funcion y aplicarle al elemento contenedor, el metodo de array from para acceder a sus indices, que son las imágenes.
3. Acceder a los atributos que necesitamos de cada indice, en este caso el alt y el src
4. Concatenar por medio de un template los atributos obtenidos con las etiquetas figure y figcaption
5. Aplicar metodo para reemplazar las etiquetas originales por el nuevo template


