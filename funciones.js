//Sintaxis anterior, la que hace hoisting
/*
function saludar(){
    console.log('hola');
}
//si queremos que la funcion haga algo debemos invocarla!

saludar()
*/
/*
//Sintaxis a usar hoy en día, 
const saludar =() => console.log('hola');
const saludarUsuario =(user) => console.log(`Hola ${user}`);

saludarUsuario('pepe');
saludarUsuario('martha');
*/

/*
const suma = (num1, num2) => {
    if (num1 == 2) {
        return num1+num2
    }
    console.log('Esto no se ejecuta si entra al if, si entra al If este trozo de codigo es ignorado')
}
console.log(suma(7,3));
*/

/*
const suma = (num1, num2) => num1+num2

let result =suma (3,6);

console.log(result);
*/