/*
class Persona{
     // se asignan las propiedades el objeto a los parametros
    constructor(nombre, apellido, edad){
        this.nombre = nombre    
        this. apellido = apellido
        this.edad = edad
        //en el template es posible no escribir el this porque estamos dentro del contructor, pero po rfuera de él si se necesita.
        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }//Fin constructor
    //por fuera del constructor es que podemos creear todos los metodos que se requieran.
    //Solo se pone la funcion sin enceidad de la palabra fuction, solo con las llaves y ya sin el arrow
    saludar(){//metodo
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
    }
}//fin de clase
//Instanciar un Objeto
const juan = new Persona('Juan', 'García', 25);
const martha = new Persona('marta', 'García', 35);

console.log(juan);
console.log(juan.saludar());
console.log(martha);
console.log(martha.saludar());

*/

//EJERCICIO CLASE LIBRO
class Book{

    constructor(title, author, year, gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }
    BookInfo(){
        return `El libro se titula "${this.title}", escrito en el año ${this.year}, por su autor ${this.author} y pertenece al género ${this.gender}`
    }
    //un metodo que saque el autor
    getAuthor(){
        return this.author
    }
    //un métrodo que devuele va el gender, sin hacer el método prodía funcionar books.gender
    getGender(){
        return this.gender
    }
}

//programa que pide 3 libros y hace un ARRAY con los libros
//Forma No.1 (mia)
/*
let books =[];
let i = 1
while (i<=3) {
    let book = prompt(`Por favor ingresa el nombre del libro No.${i}`);
    if((book == '') || (typeof(book)===null)){
        alert(`no has ingresado un nombre, por favor intenta de nuevo`);
        continue;
    }else{
        books.push(book);
    }
    i++;
}
console.log(libros);
*/
//Forma No.2
let books =[];
let i = 1
while (books.length<3) {
    let title = prompt(`Por favor ingresa el título del libro No.${i}`);
    let author = prompt(`Por favor ingresa el autor del libro No.${i}`);
    let year = prompt(`Por favor ingresa el año del libro No.${i}`);
    let gender = prompt(`Por favor ingresa el género del libro No.${i}`).toLowerCase();
    if(((title === '') || (author === '') || (year === '') || (gender === '')) || ((isNaN(year)) || (year.length !== 4)) || ((gender!=='terror') && (gender!=='aventura') && (gender!=='fantasía'))){
        alert(`ha ingresado un dato erróneo, por favor intenta de nuevo`);
        continue;
    }else{
        books.push(new Book(title, author, year, gender));
    }
    i++;
}
//funcion que muestra los Arrays de los objetos
const showAllBooks = () =>{
    console.log(books);
}
//llamado de a funcion que muestra los Arrays de los objetos
showAllBooks();

//Funcion que ordena los autores alfabeticamente
const showAuthors =()=>{
    let authors=[];
    for(const book of books){
        authors.push(book.getAuthor());
    }
    console.log(authors.sort());
}
//LLAmado de la Funcion que ordena los autores alfabeticamente
showAuthors()

//Funcion que obtiene los géneros, a traves de solitar al usuario un género (filtro)
const showGender=()=>{
    const gender = prompt('Introduce el genero a buscar');
    for(const book of books){
        if(book.getGender()== gender){
            console.log(book.BookInfo());
        }
    }
}
//LLamado de la Funcion que obtiene los géneros, a traves de solitar al usuario un género (filtro)
showGender()

