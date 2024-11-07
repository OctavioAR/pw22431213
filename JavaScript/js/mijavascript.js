/*document.write("Hola");
console.log("Hola desde la consola");
//console.error("Esto es un error")

//variables
let x; //<-- tipo - tipado debil (no lleva tipos de datos)
console.log(typeof(x));
let esPW=false;
console.log(typeof(esPW));

if(esPW){
    console.log("estamos en clase");
}else{
    console.log("no estamos en clase")
}

let numero = -2999.55;
console.log(numero);

let cadena = "una cadena 'comillas'";
console.log(cadena);

let cadena2 = 'una cadena "comillas"';
console.log(cadena2);
//interpolacion de variables solo se puede con comillas al revez
let cadena3=`otra cadena
incluso puedo tener renglones
y variables ${numero}`;
console.log(cadena3);

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1);
console.log(id2);

let usuario = {nombre:"Martin",[id1]:123};
console.log(usuario.nombre+" "+usuario[id1]);

let variableNula = null;
console.log(variableNula);

const PI = 3.1416;
console.log(PI);

let arreglo = [];
console.log(arreglo);
arreglo = [1,2,3];
console.log(arreglo);
arreglo.push(4);
console.log(arreglo);
arreglo.pop();
console.log(arreglo);
arreglo.shift();
console.log(arreglo);
arreglo.unshift(10);
console.log(arreglo);

let objeto = {nombre:"Octavio", edad: 21}
console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

/*alert("Alerta en pantalla");
let edad = prompt("Dame la edad:",0);
console.log(edad);

let variable = "valor";
const CONSTANTE = "valor";
function miFuncion(a = 2){ //valor por defecto
    return 2*a;
}
console.log(miFuncion(4));
const funcionFlecha = (a=10) =>{
    return 2*a;
}
console.log(funcionFlecha(7));

//Destructuring - destructurar
//Objetos
const usuarios = {
    nombre: 'Octavio',
    apellido: 'Aguilar'
}
/*let nombre = usuarios.nombre;
let apellido = usuarios.apellido;
const {nombre,apellido} = usuarios;
console.log(nombre+" "+apellido);
//Otro objeto
const usuarios2 = {
    nombre: 'Octavio',
    apellido: 'Aguilar',
    redes: {
        sociales: {
            twx: '@miusuario',
            face: '@miface'
        }
    }
}
//const face = usuarios2.redes.sociales.face;
//const {twx, face} = usuarios2.redes.sociales;
//console.log(twx+" "+face);
const {redes:{sociales:{twx}}} = usuarios2;
console.log(twx);

//Arreglos
const arregloNombres = ['Juan', 'Ernesto','Omar'];
//let nombre1 = arregloNombres[0];
//let nombre2 = arregloNombres[2];
const [nombre1,,nombre3] = arregloNombres;
console.log(nombre1+" "+nombre3);

//Combinaciones
const usuarios3 = {
    direccion: 'desconocida',
    numeracion: '300'
}
//propagacion de campos
const nuevoObjeto = {...usuarios2, ...usuarios3};
console.log(nuevoObjeto);

//Arreglos
const arregloApellidos = ['Perez', 'Lopez', 'Gomez'];
const nuevoArreglo = [...arregloNombres, ...arregloApellidos];
console.log(nuevoArreglo);
const otroNuevoArreglo = arregloNombres.concat(arregloApellidos);
console.log(otroNuevoArreglo);

//foreach, for, map, reduce  <--iterar arreglos
for(let i=0; i<nuevoArreglo.length;i++){
    console.log(nuevoArreglo[i]);
}
nuevoArreglo.forEach(function(nombre){
    console.log(nombre)
});
let numeros = [1,2,3,4];
let suma = 0;
numeros.forEach(function(numero){
    //suma = suma+numero;
    suma += numero;
});
console.log(suma);

//Map
let precios=[10,20,30,40,50];
const conversion = 0.85;
let preciosNuevos=precios.map(function(precio){
    return precio * conversion;
})
console.log(preciosNuevos);

//Reduce
let sumaPrecios = precios.reduce(function(suma, precio){
    return suma + precio;
},0);
console.log(sumaPrecios);

//Clases
class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    habla(){
        console.log(`Este ${this.nombre} hace ruido`);
    }
}

class Perro extends Animal{
    habla(){
        console.log(`Mi perro ${this.nombre} ladra`);
    }
}

const perro = new Perro('Hunter');
const animal = new Animal('caballo');
animal.habla();
perro.habla(); */

//Clousures
const variableFuncion = function(){
    return "Hola"
}
console.log(variableFuncion());

const saludo = " Hola ";
function externa(){
    const persona = ' Martin ';
    function interna(){
        const fin = ' Nevarez '
        return saludo+persona+fin;
    }
    return interna;
}
console.log(externa()());
const clousure = externa();
console.log(clousure());

//Otro ejemplo
const miContador = (function(){
    let contador = 0;
    function incrementar(){
        return ++contador;
    }
    function decrementar(){
        return --contador;
    }
    function valor(){
        return contador;
    }
    return{
        incrementar,
        decrementar,
        valor
    }
})();//este parentesis ejecuraa la funcion principal

console.log(miContador);
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.decrementar();
console.log(miContador.valor());

//Promesas
//Paginas Dinamicas <--- acceso a datos (internos, externos)
//Kb <--- externas, internas ---> MB o GB

let datos = [
    {
        id: 1,
        materias: 'PW',
        semestre: 6
    },
    {
        id: 2,
        materias: 'POO',
        semestre: 1
    
    },
    {
        id: 3,
        materias: 'Estructura de datos',
        semestre: 3
    },
];
//datos = [];
//console.log(datos);
//funcion que simula obtener datos de un servidor remoto 
const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        if(datos.length === 0){
            reject(new Error("Datos está vacío"));
        }
        setTimeout(() => {
            resolve(datos);
        },1500); //milisegundos
    });   
}
async function procesarDatos(){
    try{
        const misdatos = await obtenerDatos();
        console.log(misdatos);
    }catch(err){
        console.log(err.message);
    }
}
procesarDatos();

//console.log(obtenerDatos());
