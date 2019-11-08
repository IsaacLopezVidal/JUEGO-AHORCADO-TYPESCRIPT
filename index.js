"use strict";
exports.__esModule = true;
/*function isBigEnough(element,index,array){
    return (element>=10)
}
var passed=[12,5,8,130,44].filter(isBigEnough);
console.log("Test  value" + passed)

var index=[12,5,8,130,44].indexOf(8)
console.log("index is : "+index)

var index=["A","B","C"].indexOf("B")
console.log("index is : "+index)

var arr=new Array("First","Second","Third")
var str=arr.join();
console.log("str: "+str)
var str=arr.join("+");
console.log("str: "+str)
var str=arr.join("|");
console.log("str: "+str)

var numbers=[1,4,9]
var roots=numbers.map(Math.sqrt)
console.log("roots is: "+roots)

var numberse=[1,4,9]
var rootss=numberse.pop()
console.log("roots is: "+rootss)
var rootss=numberse.pop()
console.log("roots is: "+rootss)

var number=[1,4,9]
var rootss=number.push(10)
console.log("roots is: "+rootss)
 rootss=number.push(20)
console.log("roots is: "+rootss)

var arr=["orange","mango","banana","sugar","tea"]
console.log("arr.slice(0,1) " +arr.splice(0,1))
console.log("arr.slice(1,3) " +arr.splice(0,3))*/
var readline_sync_1 = require("readline-sync");
var palabaraAjuego = new Array(3);
palabaraAjuego[1] = "COMPITE";
palabaraAjuego[2] = "VIVENCIAS";
palabaraAjuego[3] = "PROYECTOR";
var palabra;
var cadena;
var intentos = 3;
function inicializa() {
    var numeroJuego = Math.floor(Math.random() * 3) + 1;
    var i;
    palabra = palabaraAjuego[numeroJuego].split("");
    cadena = new Array(palabra.length);
    for (i = 0; i < cadena.length; i++) {
        cadena[i] = "_";
    }
    cadena[0] = palabra[0];
    cadena[cadena.length - 1] = palabra[palabra.length - 1];
}
function encuentraCoincidencias(letra) {
    var letras;
    var i;
    var encontrado = false;
    for (i = 0; i < palabra.length; i++) {
        if (palabra[i] == letra && cadena[i] != letra) {
            encontrado = true;
            cadena[i] = palabra[i];
        }
    }
    return encontrado;
}
function isEquals() {
    var i;
    var encontrado = 0;
    for (i = 0; i < palabra.length; i++) {
        if (palabra[i] == cadena[i]) {
            encontrado++;
        }
    }
    if (encontrado == palabra.length) {
        return true;
    }
    else {
        return false;
    }
}
inicializa();
do {
    var letra;
    console.clear();
    console.log("---AHORCADO---\nTienes " + intentos + " intentos.\n" + cadena.join(" "));
    letra = readline_sync_1.question("Ingresa letra: ");
    if (!encuentraCoincidencias(letra.toUpperCase())) {
        intentos--;
    }
    if (isEquals()) {
        console.log(cadena.join(" "));
        intentos = 0;
    }
} while (intentos != 0);
