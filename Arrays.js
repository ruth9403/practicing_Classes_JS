/*let numeros =[1,2,3,4,5];

console.log(numeros);
console.log(numeros[3]);

let palabras=['hola', 'estamos', 'en','Youtube'];

console.log(numeros[0]+numeros[1]);

console.log(`La palabra "${palabras[3]}" tiene ${palabras[3].length} letras`);

console.log(numeros);*/

/*Propiedades */
//let numbers=[1,2,3,4,5];
/*Propiedad length */
//console.log(numbers.length);

/* Métodos


    Metodo Array.isArray(variable)
*/
//let number=4;
//console.log(Array.isArray(number));
//console.log(Array.isArray(numbers));

//ELIMINAR 1 ELEMENTO

/*
Metodo .shift()-- elimina el primer elemeneto de un Array y devuelve ese elemento
*/
//console.log(numbers);
//numbers.shift();
//console.log(numbers);
//let deleteElement = numbers.shift();
//console.log(deleteElement);



/*
Metodo .pop()-- elimina el ultimo elemento de un Array devuelve ese elemento

console.log(numbers);
let deleteElement = numbers.pop();
console.log(numbers);
console.log(deleteElement);

*/

/*
Metodo .push(element1, elemente2,...)-- Añade uno o mas elementos al final del array y devuelve la longitud.

console.log(numbers);
numbers.push(6);
console.log(numbers);

console.log(numbers);
let newLength = numbers.push(6);
console.log(newLength);
*/

/*
Metodo 

.push(element1, elemente2,...)-- Añade uno o mas elementos al final del array y devuelve la longitud.
.unshift(element1, elemente2,...)--añade uno o más elementos al comienzo del Array y devuelve a nueva longitud

console.log(numbers);
numbers.push(6);
console.log(numbers);

console.log(numbers);
let newLength = numbers.push(6);
console.log(newLength);
let newLength2 = numbers.unshift(0);
console.log(numbers);
console.log(newLength2);
*/


/*
Metodo para Buscar elementos en un Array

.indexOf()-- Devuelve el primer indice del elemento que coincide con el valor especificado,o -1 si no lo encontró.
.lastIndexOf() -- Devuelve el último indicie del elemento que coincida con el valor especificado

let numbers2 = [1,2,3,4,5,1]
console.log(numbers2);
console.log(numbers.indexOf(1));
console.log(numbers2.lastIndexOf(1));
*/

/*
Metodo 

.reverse()-- invierte el orden ed los elementos del array.


let numbers2 = [1,2,3,4,5,1]
console.log(numbers2);
numbers2.reverse();
console.log(numbers2);

*/

/*
Metodo 

.join()-- Devuelve un string del Array con separador que indiquemos, por defecto son comas.


let numbers2 = [1,2,3,4,5,1]
console.log(numbers2);
//console.log(numbers2.join());
console.log(numbers2.join('-'));
let arrayString = numbers2.join('-');
console.log(arrayString);
*/

/*
Metodo 

.splice(a,[b],[items])-- Cambia el contenido de un Array eliminando elementos exisitentes y/o agregando nuevos elementos.
a- Indice de inicio
b - Numero de elementos (opcional)
items - Elementos a añadir en el caso en que se añadan (opcional)

let numbers2 = [1,2,3,4,5,1]
console.log(numbers2);
//numbers2.splice(3); Elimina desde la posicion 3 incluyándola hasta el final
//numbers2.splice(2,2);Elimina desde la posicion 2 incluyándola, dos (2) valores.
//numbers2.splice(2,2,10,23,54); Si b es un valor distinto de 0, elimina el numero de valores que indiquemos en b y añade los valores de items a partir de la posicion a.
//numbers2.splice(2,0,10,23,54); Si b vale 0, añade los elementos a partir de la posicion a y no elimina ninguno
console.log(numbers2);

*/

/*
Metodo 

.slice(a,b)-- Extrae elementos de un array desde el índice a hasta el indice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b, hace una copia del original.
*/

//let numbers2 = [1,2,3,4,5,1]

//let newNumbers2 = numbers2.slice();
//console.log(numbers2);
//console.log(newNumbers2); se muestra otro array identico a numbers2.

//console.log(numbers2);
//let newNumbers2 = numbers2.slice(2);
//console.log(newNumbers2); Va a mostrar desde la posicion 2 hasta el final.

//console.log(numbers2);
//let newNumbers2 = numbers2.slice(2,4); 
//console.log(newNumbers2); Va a sacar los caracteres desde la posicion 2 hasta la 4, sin inlcuir la 4, es decir [3,4]


















