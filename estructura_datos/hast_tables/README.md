# Tables Hash

Las Table Hasf es un estructura de dato que nos ayuda almacenar valores emparejados y acceder de una forma rapida.
Una Table Hash se compone de clave/valor, donde el valor pasado se hash para transformase en un indice donde 
se almacenara el valor.

## ¿Para que aprender las tables Hash? 

Es una buena pregunta, ¿que lo hace diferente? ¿porque es algo que tenemos que tener conciente de ello?

Unos de los puntos a destacar de las tables hash son

- Rapidez
- Manejo de grandes cantidades de datos 
- Facil Acceso a los datos

Las tables Hash son rapidas ya que tienen una notacion - constante o(1) - ya que se debe
que no tienes que iterar para acceder aun valor sino con la key.

Las tables Hash pueden manejar grandes cantidades de datos por su 
facil acceso ya que su notacion seguira constante 0(1)

Como bien mencionado anterior las Tables Hash tiene facil acceso por tener llaves
hash marcando el index donde se eloja el valor.

Pero no todo es miel y amor, mencionaremos algunas de sus desventajas de las Tables Hash

## Desventajas 

Al momento de hash un valor puede ocurrir colecciones, por ejemplo quieres insertar este valor 'Hola'
y tu resultado de tu hash es de 3, todo bien, pero que pasa si insertamos otro dato 'aloH'
si miras bien es la misma palabra pero al reves, pensarimas que me daria otro hash diferente pues si lo 
pruebas veras que te dara un 3, ahora tienes dos valores con la mism llave, bueno esto se le llama colecciones
y aunque tengas una buena funcion hash tarde o temprano tendras una coleccion. 

¿Cuales pueden ser los motivos que se hagan las colecciones? 

- Tener una funcion Hash mal planeada (tu funcion Hash puede ser buena pero igual tendra colecciones)
- Insertar el mismo valor
- Que la Tables Hash tenga un tamaño pequeño definido.
