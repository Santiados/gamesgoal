
# Manipulación del DOM

## COMENTARIOS
 1. Por defecto se crean X comentarios para preparar el entorno donde se colocarán los comentarios de los usuarios **logeados**.
 <br>
 2. Para la creación de comentarios se ha reutilizado la función **getCookies** para la verificación del usuario **temporal**.
 	Si este se cumple se permitirá incluir el comentario el la caja de comentarios, sino se le invitará al cliente a iniciar sesion
 	en su defecto se le dará la opción de registrarse, simplemente a traves de un enlace.

## Paises
 1. Para la generación de los paises se ha creado un array conteniendolos, se ha recorrido dicho **array** y con métodos DOM se han añadido
 	a la caja del selector **Pais**.

## Tarjeta de crédito
 1. Se ha seleccionado a los campos que seran el control de la tarjeta de crédito con **querySelectorAll**.De igual forma se ha recurrido a la 
    función **forEach** para recorrer las entradas que serán los **flags** para activar el campo de **tarjeta de crédito**. Y mediante booleanos se activa.


# Diseño web 960 grid

**Nota: Todo el proyecto incluye la funcionalidad de Jquery y Javascript puro, ninguna libreria.<br>
		 Siempre intentando realizar los efectos de forma autónoma, con pequeñas ayudas relativas a conceptos y teoria.**

# Formulario incluido.


## Imagen
 1. Obtenidos los iconos de [Flaticon](https://www.flaticon.es/), tambien reciclando imagenes anteriores.

## Efectos 

 1. Carrusel
 <br> 1.1 Para el carrusel se ha jugado con la propiedad de **overflow**, limitando el espacio de scroll horizontal del **Carrusel**.
 	      Se ha medido la cantidad de **px** de scrolling  con **innerWidth** para ir moviendo las imagenes.
 		  Además, se ha utilizado la funcion animate de **Jquery**.

 2. Scroll
 <br> 2.1 El efecto de scroll se ha conseguido utilizando **Jquery**, jugando con **Keyframes**
 <br> 2.2 Gracias a las propiedades de **scrollTop** y la funcion **getBoundingClientRect()**, ha sido posible detectar 
      los elementos a los que aplicar el efecto scroll.

 3. Efecto doble borde 
 <br> 3.1 Jugando con los pseudo selectores **before** y **after**, usando estos para generar elementos a los que aplicar el efecto, <br>
 		  ya que al borde no es posible aplicarle efecto de crecimiento lateral.
	
## Funcionalidad
 1. Cookies 
 <br> 1.1 Una vez terminadas las funcionalidad de cookies, se ha generado la funcion **logged** para identificar al usuario conectado o bien 
      para ofrecerle un formulario de registro en caso de no se encuentre registrado.
 <br> 2.1 Mostrar politicas de cookies, una vez registrado esta desaparece de la pagina de inicio aprovechando la funcion **logged** al inicio.

