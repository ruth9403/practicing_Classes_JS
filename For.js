/*
for(let i=0;i<=10;i++){
    console.log(i);
}
*/
/*
for(let i=10;i>=0;i--){
    if (i!=5){
        console.log(i);
    }
}
*/
/*
let numbers = [56,14,23,37,41,59]

for(let i=0; i<numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posicion en el Array es ${numbers[i]}`);
}
i vale 0 y el valor de esa posicion en el Array es 56
For.js:16 i vale 1 y el valor de esa posicion en el Array es 14
For.js:16 i vale 2 y el valor de esa posicion en el Array es 23
For.js:16 i vale 3 y el valor de esa posicion en el Array es 37
For.js:16 i vale 4 y el valor de esa posicion en el Array es 41
For.js:16 i vale 5 y el valor de esa posicion en el Array es 59
*/

//let names = ['paco', 'jose', 'paula', 'maria', 'juan'];
/*
for(let name of names){ //devuelve los elementos del Array
    console.log(name);
}
*/

/*
for(let index in names){ //devulve el índice de cada elemento
    console.log(index);
}
*/
/*
//si queremos usar el for of para sacar los indices basta con
for(let name of names){ 
    console.log(names.indexOf(name));
}
*/

/*
//si queremos del for in para sacar el contenido bastaria con
for(let index in names){ 
    console.log(names[index]);
}
*/
/*
//PAra BREAK- rompe el bucle
for(let i=0; i < names.length; i++){ //Cuando entra en el If rompe el bucle y sale a la siguiente línea, solo alcanza a mostrar a paco y a jose
    if(names[i]==='paula'){
        break
    }
    console.log(names[i]);
}
*/
/*
//PAra Continue - Se salta la(s) posicion(es) que le indiquemos y despues continúa su ejecución.
for(let i=0; i < names.length; i++){ //Cuando entra en el If es como si ignorara esa vuelta o ciclo y continua ejecutando el codigo, por lo que resulta paco, jose , maria, menos paula.
    if(names[i]==='paula'){
        continue
    }
    console.log(names[i]);
}
*/