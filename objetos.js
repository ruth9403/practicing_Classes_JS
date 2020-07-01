/*
const person={
    name:'Juan',
    age: '26',
    sons:['laura', 'Diego', 'Pepe', 'Rosa', 'Tomas']
}
*/
/*
console.log(person);//muestra todo el objeto
console.log(person.name); // muestra el valor de la key name
console.log(person['name']);// tambien muestra el valor de la key name.
*/
/*
for(const key in person){//leo el onjeto mediante for in, y muestra las keys que contiene
    console.log(key);
}

for(const key in person){//leo el onjeto mediante for in, y muestra lo que tiene en cada key, los valores
    console.log(person[key]);
}
*/
/*
for(const son of person.sons){//como person.sons ya es un Array, se puede iterar con el for of
    console.log(son);
}
for(const son in person.sons){//Asi se sacaría con for in del array person.sons
    console.log(person.sons[son]);
}
*/

//console.log(`Hola ${person.name}. Tienes ${person.age} años, y tus hijos se llaman ${person.sons.join(', ')}`);